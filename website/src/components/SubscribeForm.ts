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
      <label class="checkboxRow">
        <input id="consentInput" name="consent" type="checkbox" />
        <span>I agree to receive product updates and release emails.</span>
      </label>
      <button class="btn primary" type="submit" id="submitBtn">Subscribe</button>
      <div class="status" id="statusLine"></div>
    </form>
  `;

  const form = container.querySelector<HTMLFormElement>("#subscribeForm");
  const emailInput = container.querySelector<HTMLInputElement>("#emailInput");
  const consentInput = container.querySelector<HTMLInputElement>("#consentInput");
  const statusLine = container.querySelector<HTMLDivElement>("#statusLine");
  const submitBtn = container.querySelector<HTMLButtonElement>("#submitBtn");

  if (!form || !emailInput || !consentInput || !statusLine || !submitBtn) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusLine.className = "status";
    statusLine.textContent = "";

    const email = emailInput.value.trim();
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

    const response = await subscribeToUpdates({
      email,
      source: "eta-ejs-prettifier-site",
      consent,
    });

    submitBtn.disabled = false;

    if (!response.success) {
      statusLine.className = "status error";
      statusLine.textContent = response.error ?? "Subscription failed. Please try again.";
      return;
    }

    statusLine.className = "status ok";
    statusLine.textContent = "Subscribed successfully. You will receive version updates by email.";
    form.reset();
  });
}
