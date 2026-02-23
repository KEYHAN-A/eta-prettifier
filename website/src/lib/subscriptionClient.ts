import { apiRequest, getApiConfig } from "./apiClient";

export interface SubscribePayload {
  email: string;
  source: string;
  consent: boolean;
}

export async function subscribeToUpdates(payload: SubscribePayload): Promise<{
  success: boolean;
  error?: string;
}> {
  const { subscribePath } = getApiConfig();
  if (!subscribePath) {
    return {
      success: false,
      error: "Subscription endpoint is not configured yet. Waitlist mode is enabled.",
    };
  }

  const result = await apiRequest<{ success: true }>(subscribePath, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return {
    success: result.success,
    error: result.error,
  };
}
