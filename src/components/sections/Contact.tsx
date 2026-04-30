"use client";

import { useState, type FormEvent } from "react";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!email.trim()) e.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="reveal mb-3 font-mono text-sm text-primary">03. What&apos;s next?</p>
          <h2 className="reveal font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Get in touch
          </h2>
          <p className="reveal mx-auto mt-6 max-w-md text-muted-foreground">
            My inbox is always open. Whether you have a question, a project
            idea, or just want to say hello — I&apos;ll do my best to get back to you.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-1 gap-12 md:grid-cols-5">
          {}
          <div className="space-y-6 md:col-span-2">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:benantonio.belga-23@cpu.edu.ph"
                  className="text-sm transition-colors hover:text-primary"
                >
                  benantonio.belga-23@cpu.edu.ph
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:09762872000"
                  className="text-sm transition-colors hover:text-primary"
                >
                  0976 287 2000
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">Iloilo City, Philippines</span>
              </li>
            </ul>
          </div>

          {}
          <form onSubmit={handleSubmit} className="space-y-4 md:col-span-3">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-border bg-surface/60 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-surface/60 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-border bg-surface/60 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" size="lg" variant="primary" disabled={loading}>
                {loading ? "Sending..." : "Say hello"}
              </Button>
              {sent && (
                <span className="flex items-center gap-2 font-mono text-xs text-primary animate-fade-in">
                  <Check className="h-4 w-4" /> Message sent — I&apos;ll be in touch.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}