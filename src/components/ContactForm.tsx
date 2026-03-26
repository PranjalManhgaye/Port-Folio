"use client";

import { useEffect, useState } from "react";
import { contact } from "@/data/contact";
import { Button } from "./Button";

export function ContactForm() {
  const inbox = contact.email;
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount-only: FormSubmit _next redirect URL
    setOrigin(`${window.location.origin}/?contact=sent`);
  }, []);

  if (!inbox) {
    return (
      <div className="mt-8 rounded-3xl border border-amber-500/30 bg-amber-500/10 p-4">
        <p className="text-sm text-foreground/90 leading-6">
          Add <span className="font-mono font-semibold">NEXT_PUBLIC_CONTACT_EMAIL</span> to{" "}
          <span className="font-mono">.env.local</span> (see <span className="font-mono">.env.example</span>),
          then restart <span className="font-mono">npm run dev</span>. The form submits via FormSubmit.co to
          your inbox—no backend required.
        </p>
      </div>
    );
  }

  const action = `https://formsubmit.co/${encodeURIComponent(inbox)}`;

  async function onCopyEmail() {
    if (!inbox) return;
    await navigator.clipboard.writeText(inbox);
  }

  return (
    <form action={action} method="POST" className="mt-8 space-y-4">
      <input type="hidden" name="_subject" value="Portfolio inquiry" />
      <input type="hidden" name="_captcha" value="false" />
      {origin ? <input type="hidden" name="_next" value={origin} /> : null}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-foreground/80">Name</span>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-foreground/10 bg-white/40 dark:bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-[color:var(--accent)]/50"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-foreground/80">Your email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-2xl border border-foreground/10 bg-white/40 dark:bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-[color:var(--accent)]/50"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-foreground/80">Project details</span>
        <textarea
          name="message"
          required
          minLength={10}
          className="mt-2 w-full min-h-[140px] rounded-2xl border border-foreground/10 bg-white/40 dark:bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-[color:var(--accent)]/50"
          placeholder="What are you building? Timeline? Tech preferences?"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send inquiry
        </Button>
        <button
          type="button"
          onClick={onCopyEmail}
          className="text-sm font-semibold text-foreground/80 hover:text-foreground transition"
        >
          Copy my email
        </button>
      </div>

      <p className="text-xs text-foreground/55 leading-5">
        Submissions are delivered by{" "}
        <a
          href="https://formsubmit.co"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          FormSubmit
        </a>
        . First message may ask you to confirm your email once.
      </p>
    </form>
  );
}
