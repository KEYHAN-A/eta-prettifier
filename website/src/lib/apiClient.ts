export interface ApiClientConfig {
  baseUrl: string;
  subscribePath: string;
  mePath: string;
}

export interface ApiResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export function getApiConfig(): ApiClientConfig {
  return {
    baseUrl: import.meta.env.VITE_API_BASE_URL ?? "https://api.keyhan.info",
    subscribePath: import.meta.env.VITE_SUBSCRIBE_PATH ?? "/updates/subscribe",
    mePath: import.meta.env.VITE_ME_PATH ?? "/auth/me",
  };
}

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
  token?: string
): Promise<ApiResult<T>> {
  const { baseUrl } = getApiConfig();
  const headers = new Headers(init.headers ?? {});
  headers.set("Content-Type", "application/json");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      ...init,
      headers,
    });

    const json = (await response.json()) as
      | { success?: boolean; error?: string; [key: string]: unknown }
      | undefined;

    if (!response.ok) {
      return {
        success: false,
        error: json?.error ?? `Request failed (${response.status})`,
      };
    }

    if (!json?.success) {
      return {
        success: false,
        error: json?.error ?? "Unknown API error",
      };
    }

    return {
      success: true,
      data: json as T,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}
