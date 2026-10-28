<?php
/**
 * Lead-form proxy for static hosting. Keeps the Web3Forms access key on the server.
 *
 * Provide the key through the WEB3FORMS_ACCESS_KEY environment variable, or put
 *   <?php return ['access_key' => 'YOUR_KEY'];
 * in lead-config.php one directory ABOVE the web root (never inside the site folder).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(array $body, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['success' => false, 'message' => 'Method not allowed.'], 405);
}

$accessKey = getenv('WEB3FORMS_ACCESS_KEY') ?: '';
$configFile = dirname($_SERVER['DOCUMENT_ROOT']) . '/lead-config.php';
if ($accessKey === '' && is_file($configFile)) {
    $config = require $configFile;
    $accessKey = (string) ($config['access_key'] ?? '');
}
if ($accessKey === '') {
    respond(['success' => false, 'message' => 'The contact service is not configured.'], 500);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) {
    respond(['success' => false, 'message' => 'Forbidden.'], 403);
}

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    respond(['success' => false, 'message' => 'Invalid request.'], 400);
}

$clean = static function ($value, int $max): string {
    $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', (string) $value) ?? '';
    return mb_substr(trim($text), 0, $max);
};

$elapsed = (int) ($body['elapsed_ms'] ?? 0);
if (!empty($body['botcheck']) || ($body['human'] ?? '') !== '1' || $elapsed < 1000) {
    respond(['success' => true]);
}

$email = $clean($body['email'] ?? '', 254);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(['success' => false, 'errors' => ['email' => 'Enter a valid email address.']], 422);
}

$phone = $clean($body['phone'] ?? '', 20);
if ($phone !== '' && !preg_match('/^\+[1-9]\d{6,14}$/', $phone)) {
    respond(['success' => false, 'errors' => ['phone' => 'Invalid phone number.']], 422);
}

$first = $clean($body['first_name'] ?? '', 50);
$last = $clean($body['last_name'] ?? '', 50);
$payload = [
    'access_key' => $accessKey,
    'from_name' => 'Atlantech Global Website',
    'subject' => $clean($body['subject'] ?? '', 150) ?: 'Website enquiry',
    'name' => $clean($body['name'] ?? '', 100) ?: trim("$first $last"),
    'email' => $email,
    'replyto' => $email,
    'source' => $clean($body['source'] ?? '', 100),
    'phone' => $phone,
    'company' => $clean($body['company'] ?? '', 100),
    'interest' => $clean($body['interest'] ?? '', 60),
    'preferred_time' => $clean($body['preferred_time'] ?? '', 40),
    'message' => $clean($body['message'] ?? '', 2000),
];

$curl = curl_init('https://api.web3forms.com/submit');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
    CURLOPT_POSTFIELDS => json_encode(array_filter($payload, static fn ($v) => $v !== '')),
]);
$response = curl_exec($curl);
$status = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

$result = is_string($response) ? json_decode($response, true) : null;
if ($status >= 200 && $status < 300 && is_array($result) && !empty($result['success'])) {
    respond(['success' => true]);
}
respond(['success' => false, 'message' => 'The message could not be delivered.'], 502);
