import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/onprendrdv")({
  head: () => ({
    meta: [
      { title: "On prend rendez-vous — Lucas Magnier" },
      {
        name: "description",
        content: "Préparons votre film de mariage simplement, autour d'un échange sans pression.",
      },
    ],
  }),
  component: AppointmentPage,
});

const calendlyUrl = "https://calendly.com/lucasmagnier-videaste/30min?back=1&month=2026-07";

function AppointmentPage() {
  const showChildRoute = useMatches().some(
    (match) => match.routeId === "/onprendrdv/questionnaire",
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageHeader />
      {showChildRoute ? (
        <Outlet />
      ) : (
        <main className="px-6 md:px-10 pt-36 pb-24 md:pt-48 md:pb-40">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-12 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span>[ 005 ]</span>
              <span className="h-px w-16 bg-border" />
              <span>On prend rendez-vous</span>
            </div>
            <div className="max-w-4xl">
              <h1 className="font-display text-mega">
                Avant notre rendez-vous
                <br />
                <span className="text-acid">découverte.</span>
              </h1>
              <p className="mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
                Pour que notre échange soit vraiment utile et centré sur votre mariage, voici les
                trois petites étapes à suivre avant notre appel.
              </p>
            </div>

            <div className="mt-16 space-y-6">
              <article className="border border-border bg-card/60 p-6 md:p-10">
                <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] md:gap-16">
                  <div className="max-w-2xl">
                    <div className="font-mono text-sm text-acid mb-7">01</div>
                    <h2 className="font-display text-4xl md:text-6xl leading-[0.92]">
                      Regardez la plaquette vidéo
                    </h2>
                    <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-foreground/75">
                      Une minute pour découvrir mon univers, ma façon de travailler et ce que
                      j'aime garder dans un film de mariage.
                    </p>
                  </div>
                  <div className="mx-auto aspect-[9/16] w-full max-w-64 overflow-hidden border border-border bg-background shadow-2xl">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/p_AQHHLWXws?rel=0&autoplay=1&mute=1&playsinline=1"
                      title="La plaquette vidéo de Lucas Magnier"
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </article>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
                <StepCard number="02" title="Réservez votre créneau">
                <p className="text-base leading-relaxed text-foreground/75">
                  Choisissez simplement le moment qui vous convient le mieux pour que nous puissions
                  échanger tranquillement, sans courir entre deux préparatifs.
                </p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center bg-acid text-black px-5 py-4 font-mono text-xs uppercase tracking-[0.16em] hover:bg-foreground hover:text-background transition-colors magnetic-button"
                >
                  Choisir un créneau →
                </a>
              </StepCard>
                <StepCard number="03" title="Répondez au questionnaire">
                <p className="text-base leading-relaxed text-foreground/75">
                  Il me permettra d'en savoir un peu plus sur votre journée, vos envies et les
                  moments que vous voulez absolument retrouver dans votre film.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-acid">
                  Si possible, remplissez-le au moins 48 h avant notre rendez-vous.
                </p>
                <Link
                  to="/onprendrdv/questionnaire"
                  className="mt-8 inline-flex items-center justify-center border border-border px-5 py-4 font-mono text-xs uppercase tracking-[0.16em] hover:border-acid hover:text-acid transition-colors"
                >
                  Ouvrir le questionnaire →
                </Link>
              </StepCard>
              </div>
            </div>

            <div className="mt-12 border border-acid bg-acid/10 p-7 md:p-10 max-w-4xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-acid mb-5">
                L'objectif
              </div>
              <p className="font-display text-3xl md:text-5xl leading-[0.95]">
                Le jour du rendez-vous, on se concentre sur vous, votre journée et le film qui vous
                ressemble vraiment.
              </p>
              <div className="mt-7 border-t border-acid/40 pt-6 text-base md:text-lg leading-relaxed text-foreground/80">
                Environ 30 minutes, en visio ou au téléphone. Et surtout, une conversation simple
                pour voir si le feeling passe bien des deux côtés.
              </div>
            </div>
          </div>
        </main>
      )}
      <PageFooter />
    </div>
  );
}

function StepCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-card/60 p-6 md:p-8 min-h-80 flex flex-col">
      <div className="font-mono text-sm text-acid mb-7">{number}</div>
      <h2 className="font-display text-3xl md:text-4xl leading-[0.92] mb-7">{title}</h2>
      <div className="mt-auto">{children}</div>
    </article>
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
