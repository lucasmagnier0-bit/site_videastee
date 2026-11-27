const formSubmitEndpoint = "https://formsubmit.co/ajax/lucasmagnier.videaste@gmail.com";

export async function submitForm(payload: Record<string, string>) {
  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || result?.success === false) {
    throw new Error(result?.message || "L'envoi n'a pas abouti.");
  }
}
