import { useState, type FormEvent } from "react";
import { FileText } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { socialIcons } from "@/components/socialIcons";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent focus:ring-1 focus:ring-accent/50";

const errorClass = "mt-1.5 text-xs text-accent";

const labelClass = "block font-mono text-xs text-ink-muted";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  status: Status;
  errors: Record<string, string[]>;
  formError: string | null;
}

const initialState: FormState = { status: "idle", errors: {}, formError: null };

interface FormspreeError {
  field: string | null;
  message: string;
}

function FieldError({
  errors,
  field,
}: {
  errors: Record<string, string[]>;
  field: string;
}) {
  const messages = errors[field];
  if (!messages || messages.length === 0) return null;
  return (
    <p role="alert" className={errorClass}>
      {messages.join(", ")}
    </p>
  );
}

function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setState({ ...initialState, status: "submitting" });

    let response: Response;
    try {
      response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      setState({
        status: "error",
        errors: {},
        formError: `Something went wrong sending that. Please email me at ${site.email} instead.`,
      });
      return;
    }

    if (!response.ok) {
      let body: { errors?: FormspreeError[] } = {};
      try {
        body = (await response.json()) as { errors?: FormspreeError[] };
      } catch {
        body = {};
      }

      const errors: Record<string, string[]> = {};
      let formError: string | null = null;

      for (const error of body.errors ?? []) {
        if (error.field) {
          const existing = errors[error.field];
          if (existing) existing.push(error.message);
          else errors[error.field] = [error.message];
        } else {
          formError = error.message;
        }
      }

      setState({
        status: "error",
        errors,
        formError: formError ?? `Sending failed. Please email me at ${site.email} instead.`,
      });
      return;
    }

    form.reset();
    setState({ ...initialState, status: "success" });
  }

  if (state.status === "success") {
    return (
      <div className="max-w-2xl rounded-lg border border-line bg-surface p-6">
        <p role="status" className="text-sm text-ink">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      {state.formError && (
        <p role="alert" className="text-sm text-accent">
          {state.formError}
        </p>
      )}

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={fieldClass}
        />
        <FieldError errors={state.errors} field="name" />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
        <FieldError errors={state.errors} field="email" />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project"
          className={fieldClass}
        />
        <FieldError errors={state.errors} field="message" />
      </div>

      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <SectionHeading title="Contact" headingId="contact-heading" />

      <Reveal delay={80}>
        <p className="max-w-2xl leading-relaxed text-ink-muted">
          I&apos;m currently looking for junior developer roles or internships. Feel
          free to reach out — I&apos;d love to chat.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {site.socials.map((social) => {
            const Icon = socialIcons[social.key];
            const isExternal = social.href.startsWith("http");
            return (
              <a
                key={social.key}
                href={social.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                <Icon className="size-4" aria-hidden="true" />
                {social.label}
              </a>
            );
          })}
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
          >
            <FileText className="size-4" aria-hidden="true" />
            Résumé
          </a>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
