
export async function submitLead(formData: FormData, subject: string): Promise<boolean> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (accessKey) {
    formData.set("access_key", accessKey);
  }

  if (subject && (!formData.has("subject") || !formData.get("subject"))) {
    formData.set("subject", subject);
  }

  if (!formData.has("from_name") || !formData.get("from_name")) {
    formData.set("from_name", "Atlantech Global Website");
  }

  // If first_name / last_name are present without a unified name, provide name
  if (!formData.get("name")) {
    const firstName = (formData.get("first_name") as string)?.trim() ?? "";
    const lastName = (formData.get("last_name") as string)?.trim() ?? "";
    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    if (fullName) {
      formData.set("name", fullName);
    }
  }

  // Ensure reply-to header maps to submitter email if provided
  const email = formData.get("email");
  if (email && !formData.has("replyto")) {
    formData.set("replyto", String(email));
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const result = await res.json();
    return Boolean(result.success);
  } catch (error) {
    console.error("Submission error:", error);
    return false;
  }
}


