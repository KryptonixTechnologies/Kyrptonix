export {};

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      target: string,
      params?: Record<string, unknown>
    ) => void;
  }
}