import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { submitForm } from "@/lib/form-submit";

export const Route = createFileRoute("/onprendrdv/questionnaire")({
  head: () => ({
    meta: [
      { title: "Questionnaire mariage — Lucas Magnier" },
      {
        name: "description",
        content: "Le questionnaire de préparation pour imaginer votre film de mariage.",
      },
    ],
  }),
  component: QuestionnairePage,
});

const inputClass =
  "w-full bg-transparent outline-none font-display text-2xl md:text-3xl placeholder:text-foreground/70 focus:text-acid transition-colors";
const labelClass =
  "block font-mono text-sm md:text-base uppercase tracking-[0.16em] text-foreground/80 mb-3";
const fieldClass = "border-b border-border pb-4";

function QuestionnairePage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  return (
    <main className="px-6 md:px-10 pt-36 pb-24 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>[ 006 ]</span>
          <span className="h-px w-16 bg-border" />
          <span>Le questionnaire</span>
        </div>
        <h1 className="font-display text-mega">
          Quelques questions
          <br />
          <span className="text-acid">pour commencer.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/80">
          Il n'y a pas de bonne réponse et vous pouvez rester simple. Ces quelques détails me
          permettent d'arriver à notre échange avec une première idée de votre journée.
        </p>

        {sent ? (
          <div className="mt-16 border border-acid bg-acid/10 p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-acid mb-5">
              C'est bien reçu
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Merci pour ces premiers détails.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Je relis tout ça tranquillement et je reviens vers vous pour la suite. Vous pouvez
              déjà choisir votre créneau de 30 minutes sur Calendly.
              <br />
              <a
                href="https://calendly.com/lucasmagnier-videaste/30min?back=1&month=2026-07"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-acid hover:text-foreground transition-colors"
              >
                Choisir mon créneau →
              </a>
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex font-mono text-xs uppercase tracking-[0.2em] text-acid hover:text-foreground transition-colors"
            >
              Revenir au site →
            </Link>
          </div>
        ) : (
          <form
            className="mt-16 space-y-12"
            onSubmit={async (event) => {
              event.preventDefault();
              setSending(true);
              setSendError("");
              const form = event.currentTarget;
              const formData = Object.fromEntries(new FormData(form).entries());

              try {
                await submitForm({
                  ...Object.fromEntries(
                    Object.entries(formData).map(([key, value]) => [key, String(value)]),
                  ),
                  _subject: "Nouveau questionnaire mariage — Lucas Magnier",
                  _replyto: String(formData.email || ""),
                  _template: "table",
                  _honey: "",
                });
                form.reset();
                setSent(true);
              } catch {
                setSendError(
                  "L'envoi n'a pas fonctionné. Vérifiez votre connexion et réessayez dans un instant.",
                );
              } finally {
                setSending(false);
              }
            }}
          >
            <QuestionSection title="01 — Vous">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field id="names" label="Vos prénoms" required />
                <Field id="email" label="Votre e-mail" type="email" required />
                <Field id="phone" label="Téléphone (si vous préférez)" type="tel" />
                <Field id="date" label="Date du mariage" type="date" required />
              </div>
            </QuestionSection>

            <QuestionSection title="02 — La journée">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field id="place" label="Lieu(x) et département" required />
                <Field id="guests" label="Nombre d'invités (environ)" type="number" />
              </div>
              <SelectField
                id="schedule"
                label="À quels moments voulez-vous être filmés ?"
                required
                options={[
                  "Préparatifs + cérémonie + vin d'honneur",
                  "Des préparatifs jusqu'au vin d'honneur",
                  "La journée complète, du matin à la piste de danse",
                  "Je ne sais pas encore, on en parle",
                ]}
              />
              <TextAreaField
                id="musthave"
                label="Les moments ou personnes à ne surtout pas manquer"
                placeholder="Un discours, une grand-mère, une surprise, une tradition…"
              />
            </QuestionSection>

            <QuestionSection title="03 — Votre film">
              <TextAreaField
                id="vibe"
                label="L'ambiance que vous voulez retrouver en le regardant"
                required
                placeholder="Du rire, du rythme, de l'émotion, du vrai… racontez-moi avec vos mots."
              />
              <TextAreaField
                id="avoid"
                label="Ce que vous ne voulez surtout pas dans votre film"
                placeholder="Les poses figées, les effets trop vus… ou rien de particulier."
              />
            </QuestionSection>

            <QuestionSection title="04 — Le petit plus">
              <SelectField
                id="discovery"
                label="Comment m'avez-vous trouvé ?"
                options={["Instagram", "Recommandation", "Google", "Autre"]}
              />
              <TextAreaField
                id="message"
                label="Un dernier détail à me partager ?"
                placeholder="Une question, une idée, un détail qui vous ressemble…"
              />
            </QuestionSection>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-acid text-black py-7 font-display text-3xl md:text-5xl uppercase hover:bg-foreground hover:text-background transition-colors magnetic-button"
            >
              {sending ? "Envoi en cours…" : "Envoyer le questionnaire →"}
            </button>
            {sendError ? (
              <p className="text-sm md:text-base text-destructive leading-relaxed">{sendError}</p>
            ) : null}
            <p className="text-sm md:text-base leading-relaxed text-foreground/75 font-mono">
              Vos réponses servent uniquement à préparer notre échange. Je vous réponds ensuite
              personnellement, sans réponse automatique.
            </p>
          </form>
        )}
      </div>
    </main>
  );
}

function QuestionSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-8 border-t border-border pt-10">
      <div className="font-mono text-sm md:text-base uppercase tracking-[0.16em] text-acid">
        {title}
      </div>
      {children}
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={fieldClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={`${inputClass} ${type === "date" ? "[color-scheme:dark]" : ""}`}
        placeholder={type === "date" ? undefined : "—"}
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  required = false,
}: {
  id: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className={fieldClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className="w-full bg-background/90 outline-none text-lg md:text-xl leading-relaxed text-foreground focus:text-acid transition-colors"
      >
        <option value="" disabled>
          Choisir une option
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  id,
  label,
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className={fieldClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={3}
        required={required}
        className="w-full bg-transparent outline-none text-xl md:text-2xl leading-relaxed placeholder:text-foreground/70 resize-y"
        placeholder={placeholder}
      />
    </div>
  );
}
