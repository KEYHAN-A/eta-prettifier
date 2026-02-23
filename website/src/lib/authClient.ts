import { apiRequest, getApiConfig } from "./apiClient";

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
}

const TOKEN_STORAGE_KEY = "eta_ejs_prettifier_token";

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setStoredToken(token: string): void {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export async function fetchCurrentUser(token: string): Promise<{
  success: boolean;
  user?: AuthUser;
  error?: string;
}> {
  const { mePath } = getApiConfig();
  const result = await apiRequest<{ user?: AuthUser }>(mePath, { method: "GET" }, token);
  if (!result.success) {
    return { success: false, error: result.error };
  }

  return {
    success: true,
    user: result.data?.user,
  };
}
