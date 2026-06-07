export const web3FormsAccessKey = "d595484a-e896-4b88-aad8-229cb63dd873";

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
