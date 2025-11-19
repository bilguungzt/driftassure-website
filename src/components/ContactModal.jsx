import { useState, useEffect } from "react";
import { X } from "@phosphor-icons/react";

const VARIANT_COPY = {
  support: {
    title: "Contact support",
    subtitle:
      "Share a few details about your stack and we’ll reply with specific guidance and savings estimates.",
    subject: "Support inquiry",
    recipient: "support@cognitude.com",
    cta: "Send to support",
  },
  engineer: {
    title: "Talk with an engineer",
    subtitle:
      "Walk through your architecture with our solutions engineers and map out an integration plan.",
    subject: "Engineer consult request",
    recipient: "hello@cognitude.com",
    cta: "Request consult",
  },
};

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function ContactModal({ isOpen, onClose, variant = "support" }) {
  const copy = VARIANT_COPY[variant] ?? VARIANT_COPY.support;
  const [formData, setFormData] = useState(INITIAL_FORM);

  useEffect(() => {
    if (!isOpen) {
      setFormData(INITIAL_FORM);
    }
  }, [isOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, company, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
    window.location.href = `mailto:${
      copy.recipient
    }?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(
      body
    )}`;
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={copy.title}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-2 pr-10">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-200/80">
            Concierge help
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {copy.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.18em] text-slate-400 flex flex-col gap-2">
              Full name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                placeholder="Ada Lovelace"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.18em] text-slate-400 flex flex-col gap-2">
              Work email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="text-xs uppercase tracking-[0.18em] text-slate-400 flex flex-col gap-2">
            Company / team
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
              placeholder="Cognitude Platform"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.18em] text-slate-400 flex flex-col gap-2">
            Context
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
              placeholder="Share model providers, traffic, and goals so we can respond with concrete recommendations."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-white text-slate-900 text-sm font-semibold py-3 shadow-lg shadow-slate-900/40 hover:bg-slate-100 transition"
          >
            {copy.cta}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
