import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/onprendrdv")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Lucas Magnier" },
      {
        name: "description",
        content:
          "Réservez un échange de 30 minutes pour parler de votre mariage, sans pression, en visio ou au téléphone.",
      },
    ],
  }),
  component: AppointmentPage,
});

const calendlyUrl = "https://calendly.com/lucasmagnier-videaste/30min";
const calendlyEmbedUrl = `${calendlyUrl}?embed_domain=lucasmagnier.fr&embed_type=Inline&hide_gdpr_banner=1&background_color=0c0d0f&text_color=f8f8f8&primary_color=fcea00`;

function AppointmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageHeader />
      <main className="px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>[ 005 ]</span>
            <span className="h-px w-16 bg-border" />
            <span>Prendre rendez-vous</span>
          </div>

          <h1 className="font-display text-5xl leading-[0.95] md:text-7xl max-w-4xl">
            Parlons de votre mariage,
            <br />
            <span className="text-acid">30 minutes suffisent.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/80">
            Une conversation simple pour parler de votre journée et voir si le feeling passe bien
            des deux côtés. Choisissez le créneau qui vous arrange ci-dessous.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
            {[
              ["30 min", "Un échange court, sans préparation"],
              ["Visio ou téléphone", "Comme vous préférez"],
              ["Sans pression", "Aucun engagement à la clé"],
            ].map(([title, description]) => (
              <li key={title} className="bg-card/60 p-5 md:p-6">
                <div className="font-display text-2xl md:text-3xl leading-[0.95] text-acid">
                  {title}
                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">{description}</p>
              </li>
            ))}
          </ul>

          <section aria-label="Réserver un créneau" className="mt-10 border border-border">
            <iframe
              src={calendlyEmbedUrl}
              title="Réserver un créneau de 30 minutes avec Lucas Magnier"
              className="block h-[780px] w-full bg-card md:h-[720px]"
            />
          </section>
          <p className="mt-4 text-sm text-muted-foreground">
            Le calendrier ne s'affiche pas ?{" "}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-acid underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Ouvrez-le dans un nouvel onglet
            </a>
            . Vous recevrez ensuite une confirmation par e-mail.
          </p>

          <div className="mt-16 flex flex-col gap-6 border border-border bg-card/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl leading-[0.95]">
                Vous préférez écrire ?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Aucun souci : laissez-moi un petit message avec la date de votre mariage, je vous
                réponds sous 48 h.
              </p>
            </div>
            <Link
              to="/"
              hash="message"
              className="inline-flex shrink-0 items-center justify-center border border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.16em] hover:border-acid hover:text-acid transition-colors"
            >
              M'écrire un message →
            </Link>
          </div>

          <div className="mt-6 grid items-center gap-8 border border-border bg-card/60 p-6 md:grid-cols-[minmax(0,1fr)_14rem] md:gap-12 md:p-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl leading-[0.95]">
                Une minute pour me découvrir
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Ma façon de travailler et ce que j'aime garder dans un film de mariage.
              </p>
            </div>
            <div className="mx-auto aspect-[9/16] w-full max-w-56 overflow-hidden border border-border bg-background">
              <iframe
                src="https://www.youtube-nocookie.com/embed/p_AQHHLWXws?rel=0&playsinline=1"
                title="La plaquette vidéo de Lucas Magnier"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}

function PageHeader() {
  return (
    <header className="header-shell fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-5 text-white">
      <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight nav-link">
        LUCAS<span className="text-acid">.</span>
      </Link>
      <div className="flex items-center gap-5 font-mono text-xs md:text-sm uppercase tracking-[0.14em]">
        <Link to="/" className="nav-link hover:text-acid transition-colors">
          Retour au site
        </Link>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.25em] text-muted-foreground">
      <div>© 2026 Lucas Magnier — Vidéaste de mariage</div>
      <div>Des films vrais, drôles et pleins de vie.</div>
    </footer>
  );
}
