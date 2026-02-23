import {
  clearStoredToken,
  fetchCurrentUser,
  getStoredToken,
  setStoredToken,
} from "../lib/authClient";
import { subscribeToUpdates } from "../lib/subscriptionClient";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function mountSubscribeForm(container: HTMLElement): void {
  container.innerHTML = `
    <form class="subscribeForm" id="subscribeForm">
      <label>
        Email
        <input id="emailInput" name="email" type="email" required placeholder="you@example.com" />
      </label>
      <label>
        API token (optional)
        <input id="tokenInput" name="token" type="text" placeholder="Paste Bearer token if your endpoint requires auth" />
      </label>
      <label class="checkboxRow">
        <input id="consentInput" name="consent" type="checkbox" />
        <span>I agree to receive product updates and release emails.</span>
      </label>
      <button class="btn primary" type="submit" id="submitBtn">Subscribe</button>
      <button class="btn" type="button" id="clearTokenBtn">Clear token</button>
      <div class="status" id="statusLine"></div>
    </form>
  `;

  const form = container.querySelector<HTMLFormElement>("#subscribeForm");
  const emailInput = container.querySelector<HTMLInputElement>("#emailInput");
  const tokenInput = container.querySelector<HTMLInputElement>("#tokenInput");
  const consentInput = container.querySelector<HTMLInputElement>("#consentInput");
  const statusLine = container.querySelector<HTMLDivElement>("#statusLine");
  const clearTokenBtn = container.querySelector<HTMLButtonElement>("#clearTokenBtn");
  const submitBtn = container.querySelector<HTMLButtonElement>("#submitBtn");

  if (
    !form ||
    !emailInput ||
    !tokenInput ||
    !consentInput ||
    !statusLine ||
    !clearTokenBtn ||
    !submitBtn
  ) {
    return;
  }

  const existingToken = getStoredToken();
  if (existingToken) {
    tokenInput.value = existingToken;
  }

  clearTokenBtn.addEventListener("click", () => {
    clearStoredToken();
    tokenInput.value = "";
    statusLine.className = "status";
    statusLine.textContent = "Stored token cleared.";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusLine.className = "status";
    statusLine.textContent = "";

    const email = emailInput.value.trim();
    const token = tokenInput.value.trim();
    const consent = consentInput.checked;

    if (!isValidEmail(email)) {
      statusLine.className = "status error";
      statusLine.textContent = "Please enter a valid email address.";
      return;
    }

    if (!consent) {
      statusLine.className = "status error";
      statusLine.textContent = "Consent is required to subscribe.";
      return;
    }

    submitBtn.disabled = true;
    statusLine.textContent = "Submitting...";

    if (token) {
      setStoredToken(token);
      const me = await fetchCurrentUser(token);
      if (!me.success) {
        statusLine.className = "status error";
        statusLine.textContent = `Token check failed: ${me.error ?? "Invalid token"}`;
        submitBtn.disabled = false;
        return;
      }
    }

    const response = await subscribeToUpdates(
      {
        email,
        source: "eta-ejs-prettifier-site",
        consent,
      },
      token || undefined
    );

    submitBtn.disabled = false;

    if (!response.success) {
      statusLine.className = "status error";
      statusLine.textContent =
        response.error ??
        "Subscription failed. If your API requires auth, provide a valid token and retry.";
      return;
    }

    statusLine.className = "status ok";
    statusLine.textContent = "Subscribed successfully. You will receive version updates by email.";
    form.reset();
    if (token) {
      tokenInput.value = token;
    }
  });
}
