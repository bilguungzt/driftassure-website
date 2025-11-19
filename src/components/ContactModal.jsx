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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={copy.title}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-2 pr-10">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-medium">
            Concierge help
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {copy.title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.18em] text-slate-500 flex flex-col gap-2 font-medium">
              Full name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
                placeholder="Ada Lovelace"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.18em] text-slate-500 flex flex-col gap-2 font-medium">
              Work email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="text-xs uppercase tracking-[0.18em] text-slate-500 flex flex-col gap-2 font-medium">
            Company / team
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="Cognitude Platform"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.18em] text-slate-500 flex flex-col gap-2 font-medium">
            Context
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all resize-none"
              placeholder="Share model providers, traffic, and goals so we can respond with concrete recommendations."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-indigo-600 text-white text-sm font-semibold py-3 shadow-lg shadow-indigo-200 hover:bg-indigo-500 transition-all transform hover:scale-[1.02]"
          >
            {copy.cta}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
