import { afterEach, describe, expect, it, vi } from "vitest";

import { subscribeToUpdates } from "./subscriptionClient";

describe("subscribeToUpdates", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns success for successful API response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      })
    );

    const result = await subscribeToUpdates({
      email: "user@example.com",
      source: "eta-ejs-prettifier-site",
      consent: true,
    });

    expect(result.success).toBe(true);
  });

  it("returns error when API reports failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        json: async () => ({ success: false, error: "auth_required" }),
      })
    );

    const result = await subscribeToUpdates({
      email: "user@example.com",
      source: "eta-ejs-prettifier-site",
      consent: true,
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe("auth_required");
  });
});
