import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
        return NextResponse.json({ success: false, message: "Server not configured" }, { status: 500 });
    }

    let incoming: FormData;
    try {
        incoming = await req.formData();
    } catch {
        return NextResponse.json({ success: false, message: "Invalid form data" }, { status: 400 });
    }

    const out = new FormData();
    incoming.forEach((value, key) => {
        if (key === "access_key") return; // never accept a key from the client
        out.append(key, typeof value === "string" ? value.slice(0, 5000) : value);
    });
    out.set("access_key", accessKey);

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: out,
        });
        const result = await res.json().catch(() => ({ success: false }));
        return NextResponse.json({ success: Boolean(result.success) }, { status: res.ok ? 200 : 502 });
    } catch (error) {
        console.error("Web3Forms error:", error);
        return NextResponse.json({ success: false }, { status: 502 });
    }
}