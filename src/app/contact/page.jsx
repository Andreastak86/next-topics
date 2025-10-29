"use client";

import { useState, useTransition } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [isPending, startTransition] = useTransition();

  function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Noe gikk galt");
        setStatus({ type: "ok", msg: "Takk! Meldingen er sendt." });
        setName("");
        setEmail("");
        setMessage("");
      } catch (err) {
        setStatus({ type: "error", msg: err.message || "Noe gikk galt" });
      }
    });
  }

  return (
    <section className="container section fade-in">
      <div className="card p-8 space-y-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-semibold text-(--accent)">Kontakt meg</h1>
        <p className="text-muted">
          Har du spørsmål, forslag til kommende topics eller ønsker å bidra?
          Send meg en melding da
        </p>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Navn
            </label>
            <input
              id="name"
              type="text"
              className="input"
              placeholder="Ditt navn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-post
            </label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="deg@eksempel.no"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Melding
            </label>
            <textarea
              id="message"
              className="textarea h-32"
              placeholder="Skriv her..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {status?.type === "ok" && (
            <p className="text-green-600 text-sm">{status.msg}</p>
          )}
          {status?.type === "error" && (
            <p className="text-red-600 text-sm">{status.msg}</p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full flex justify-center"
            disabled={isPending}
          >
            {isPending ? "Sender..." : "Send melding"}
          </button>
        </form>
      </div>
    </section>
  );
}
