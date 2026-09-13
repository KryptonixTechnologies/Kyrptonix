export const web3FormsAccessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "e7754e07-a925-48d6-9603-a38096d99c5b";

type Web3FormsPayload = Record<string, string | string[]>;

export async function submitToWeb3Forms(payload: Web3FormsPayload) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: web3FormsAccessKey,
      ...payload,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Your message could not be sent right now.");
  }

  return result;
}
