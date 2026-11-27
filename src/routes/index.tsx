import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import hero from "@/assets/martin1.jpg";
import w1 from "@/assets/w1.jpg";
import w2 from "@/assets/w2.jpg";
import w3 from "@/assets/w3.jpg";
import w4 from "@/assets/w4.jpg";
import { submitForm } from "@/lib/form-submit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Magnier — Vidéaste de mariage dans les Hauts-de-France" },
      {
        name: "description",
        content:
          "Des films de mariage vrais, drôles et pleins de vie. Lucas Magnier raconte votre journée comme vous l'avez ressentie, dans les Hauts-de-France et partout où l'on s'aime.",
      },
      {
        name: "keywords",
        content:
          "vidéaste mariage, film mariage, Hauts-de-France, vidéaste de mariage, Lucas Magnier",
      },
      {
        property: "og:title",
        content: "Lucas Magnier — Des films de mariage vrais, drôles et pleins de vie",
      },
      {
        property: "og:description",
        content:
          "Votre journée, comme vous l'avez ressentie : les grands moments, les imprévus et tout ce qui vous ressemble.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Un moment de joie capturé lors d'un mariage par Lucas Magnier",
      },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Lucas Magnier Vidéaste" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lucas Magnier — Vidéaste de mariage" },
      {
        name: "twitter:description",
        content: "Des films de mariage vrais, drôles et pleins de vie.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Lucas Magnier",
          jobTitle: "Vidéaste de mariage",
          description:
            "Vidéaste de mariage qui raconte les journées comme elles ont été vécues : vraies, spontanées et pleines de vie.",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Hauts-de-France",
            addressCountry: "FR",
          },
          areaServed: "France",
          makesOffer: {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Film de mariage",
              serviceType: "Wedding videography",
            },
          },
        }),
      },
    ],
  }),
  component: Index,
});

const films = [
  {
    title: "MARIAGE DE CINDY & MARTIN",
    subtitle: "Film de mariage",
    img: w1,
    videoType: "youtube",
    videoUrl: "https://youtu.be/MqDJZzhod84",
  },
  {
    title: "MARIAGE ANAIS & ROMAIN",
    subtitle: "Film de mariage",
    img: w2,
    videoType: "youtube",
    videoUrl: "https://youtu.be/D71egQHBzzU",
  },
  {
    title: "MARIAGE DE LINE & GUILLAUME",
    subtitle: "Film de mariage",
    img: w3,
    videoType: "youtube",
    videoUrl: "https://youtu.be/HAAW_xxYlAU",
  },
  {
    title: "MARIAGE DE CHLOÉ ET BENOIT",
    subtitle: "Film de mariage",
    img: w4,
    videoType: "youtube",
    videoUrl: "https://youtu.be/3OPXrCKLCXA",
  },
];

const offers = [
  {
    number: "01",
    name: "BEST OF",
    price: "1 500 € TTC",
    duration: "5 à 6 h · cérémonies & vin d'honneur",
    description:
      "Un film court et percutant pour garder une trace authentique des temps forts, sans courir après chaque minute de la journée.",
    film: "Film de 5 à 6 minutes",
  },
  {
    number: "02",
    name: "PLEIN CADRE",
    price: "1 800 € TTC",
    duration: "10 à 11 h · préparatifs au vin d'honneur",
    description:
      "Les coulisses du matin, la montée en émotion, les embrassades du cocktail : le récit prend le temps de respirer.",
    film: "Film de 8 à 10 minutes",
  },
  {
    number: "03",
    name: "GRAND ÉCRAN",
    price: "2 100 € TTC",
    duration: "13 à 14 h · du matin à la piste de danse",
    description:
      "La journée complète, les discours, la première danse et toute l'ambiance. Pour revivre votre histoire du réveil à la fête.",
    film: "Film de 12 à 15 minutes",
  },
];

function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("has-reveal");
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return () => document.documentElement.classList.remove("has-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-reveal");
    };
  }, []);
}

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Films />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="header-shell fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-5 text-white">
      <a href="#top" className="font-display text-2xl md:text-3xl tracking-tight nav-link">
        LUCAS<span className="text-acid">.</span>
      </a>
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.16em] font-mono">
        <a href="#approche" className="nav-link hover:text-acid transition-colors">
          L'approche
        </a>
        <a href="#films" className="nav-link hover:text-acid transition-colors">
          Films
        </a>
        <a href="#formules" className="nav-link hover:text-acid transition-colors">
          Formules
        </a>
        <a href="#contact" className="nav-link hover:text-acid transition-colors">
          Contact
        </a>
      </nav>
      <a
        href="/onprendrdv"
        className="text-xs md:text-sm uppercase tracking-[0.12em] md:tracking-[0.16em] font-mono border border-current px-3 md:px-5 py-3 hover:bg-acid hover:text-black hover:border-acid transition-colors whitespace-nowrap"
      >
        Prendre rendez-vous
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full grain-overlay flex flex-col justify-end overflow-hidden"
    >
      <img
        src={hero}
        alt="Les mariés dansent au milieu de leurs invités"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover hero-image"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="relative px-6 md:px-10 pb-16 md:pb-24 pt-32" data-reveal="hero">
        <div className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.25em] text-acid">
          <span className="h-2 w-2 bg-acid animate-pulse" />
          Lucas Magnier · Vidéaste de mariage · Hauts-de-France
        </div>
        <h1 className="text-mega hero-title" data-reveal="hero-title">
          Votre journée.
          <br />
          Vos émotions.
          <br />
          <span className="text-acid">Votre film.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <p
            className="max-w-md text-sm md:text-base text-muted-foreground font-mono leading-relaxed"
            data-reveal="hero-copy"
          >
            Je raconte votre mariage comme vous l'avez ressenti : les grands éclats de rire, les
            petits imprévus, le stress aussi. En vrai, tout ce qui fait que cette journée ne
            ressemble qu'à vous.
          </p>
          <a
            href="#films"
            className="group flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] cta-link"
          >
            <span className="h-px w-16 bg-foreground group-hover:w-24 transition-all" />
            Voir les films
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "DES MOMENTS QUI RESTENT",
    "DU RIRE",
    "DES ÉMOTIONS BRUTES",
    "DES IMPRÉVUS",
    "VOTRE HISTOIRE EN MOUVEMENT",
    "DES MOMENTS QUI RESTENT",
  ];
  return (
    <div className="border-y border-border bg-acid text-black overflow-hidden py-5">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_28s_linear_infinite] font-display text-3xl md:text-5xl">
        {[...words, ...words, ...words].map((word, index) => (
          <span key={index} className="flex items-center gap-12">
            {word}
            <span className="text-2xl">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

function Manifesto() {
  return (
    <section id="approche" className="relative px-6 md:px-10 py-24 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div
          className="flex items-center gap-4 mb-16 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          data-reveal="label"
        >
          <span>[ 001 ]</span>
          <span className="h-px w-16 bg-border" />
          <span>L'approche</span>
        </div>
        <h2 className="font-display text-huge max-w-6xl" data-reveal="manifesto-title">
          Un film qui vous ressemble,
          <br />
          pas un film <span className="text-acid italic">catalogue</span>.<br />
          Du sourire, de l'émotion
          <br />
          et cette petite part de <span className="text-acid">bordel</span>
          <br />
          qui rend tout mémorable.
        </h2>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
          {[
            [
              "01",
              "PAS DE SCÈNE À REJOUER",
              "Vous vivez votre journée, je la capte. Je ne vous demanderai pas de refaire un regard ou une accolade juste parce que « c'est comme ça ».",
            ],
            [
              "02",
              "DE LA VRAIE VIE",
              "Les éclats de rire, les discours qui tremblent, la musique qui ne part pas au bon moment : ce sont souvent les instants que vous aimerez le plus revoir.",
            ],
            [
              "03",
              "PRÉSENT, SANS PRENDRE TOUTE LA PLACE",
              "Le professionnalisme n'empêche ni le sourire ni la décontraction. Je prends votre journée au sérieux, pas besoin de faire la tête pour autant.",
            ],
          ].map(([number, title, description]) => (
            <div key={number} className="space-y-4" data-reveal="manifesto-card">
              <div className="font-mono text-xs text-acid">{number}</div>
              <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Films() {
  return (
    <section id="films" className="relative py-20 md:py-40 border-t border-border">
      <div className="px-6 md:px-10 mb-16 flex items-end justify-between gap-8 flex-wrap">
        <div>
          <div
            className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            data-reveal="label"
          >
            <span>[ 002 ]</span>
            <span className="h-px w-16 bg-border" />
            <span>Quelques histoires</span>
          </div>
          <h2 className="font-display text-huge" data-reveal="films-title">
            Films <br className="md:hidden" />
            <span className="text-acid">de mariage</span>
          </h2>
        </div>
        <p
          className="max-w-xs text-base text-muted-foreground font-mono leading-relaxed"
          data-reveal="films-intro"
        >
          Quatre histoires, quatre ambiances. Installez-vous, les films sont juste ici.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          {films.map((film, index) => (
            <FilmCard key={film.title} film={film} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilmCard({ film, index }: { film: (typeof films)[number]; index: number }) {
  const youtubeEmbed = getYoutubeEmbedUrl(film.videoUrl);
  const hasVideo = Boolean(film.videoUrl);

  return (
    <article
      className="group film-card"
      data-reveal="film-card"
      style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
    >
      <div className="film-media relative overflow-hidden bg-card aspect-[16/9] border border-border">
        {film.videoType === "youtube" && youtubeEmbed ? (
          <iframe
            src={youtubeEmbed}
            title={film.title}
            className="film-media-content h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : film.videoType === "local" && hasVideo ? (
          <video
            className="film-media-content h-full w-full object-cover"
            controls
            preload="metadata"
            poster={film.img}
          >
            <source src={film.videoUrl} />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        ) : (
          <img
            src={film.img}
            alt={film.subtitle}
            loading="lazy"
            width={1600}
            height={900}
            className="film-media-content h-full w-full object-cover"
          />
        )}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/85 backdrop-blur px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
          <span className="h-1.5 w-1.5 bg-acid" /> {String(index + 1).padStart(2, "0")} / 04
        </div>
      </div>
      <div className="mt-6 border-t border-border pt-5">
        <div>
          <div className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground mb-3 leading-relaxed">
            {film.subtitle}
          </div>
          <h3 className="font-display text-3xl md:text-5xl leading-[0.95]">{film.title}</h3>
        </div>
      </div>
    </article>
  );
}

function getYoutubeEmbedUrl(url: string) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    const id =
      parsed.hostname === "youtu.be" ? parsed.pathname.slice(1) : parsed.searchParams.get("v");
    return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : "";
  } catch {
    return "";
  }
}

function Offers() {
  return (
    <section id="formules" className="border-t border-border bg-card/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className="flex items-end justify-between gap-8 flex-wrap mb-16"
          data-reveal="section-heading"
        >
          <div>
            <div
              className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
              data-reveal="label"
            >
              <span>[ 003 ]</span>
              <span className="h-px w-16 bg-border" />
              <span>Les formules</span>
            </div>
            <h2 className="font-display text-huge" data-reveal="offers-title">
              À votre <span className="text-acid">image</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground font-mono">
            Trois façons de raconter votre journée, selon le temps que vous voulez garder en images.
          </p>
        </div>
        <div
          className="mb-16 grid gap-8 border-y border-border py-8 md:grid-cols-[minmax(12rem,0.75fr)_minmax(0,2fr)] md:items-center"
          data-reveal="highlight"
        >
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-acid">
            Inclus dans chaque formule
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["01", "Préparation en amont"],
              ["02", "Teaser d'une minute"],
              ["03", "Coffret USB personnalisé"],
            ].map(([number, label]) => (
              <div key={number} className="border-l border-acid/60 pl-4">
                <div className="font-mono text-[10px] tracking-[0.18em] text-acid">{number}</div>
                <div className="mt-2 text-sm leading-snug text-foreground/85">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-border">
          {offers.map((offer) => (
            <article
              key={offer.number}
              className="border-b border-border px-0 py-10 last:border-b-0 lg:border-r lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 offer-card"
              data-reveal="offer-card"
            >
              <div className="font-mono text-xs text-acid">FORMULE {offer.number}</div>
              <h3 className="font-display text-4xl md:text-5xl leading-[0.95]">{offer.name}</h3>
              <div className="mt-6 font-mono text-xl text-acid">{offer.price}</div>
              <p className="mt-6 border-y border-border py-4 font-mono text-xs uppercase tracking-[0.14em] leading-relaxed text-muted-foreground">
                {offer.duration}
              </p>
              <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                {offer.description}
              </p>
              <div className="mt-8 font-mono text-xs uppercase tracking-[0.14em] leading-relaxed text-foreground/90">
                {offer.film}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-10">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-7">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
              Options à la carte
            </div>
            <p className="text-sm text-muted-foreground">
              On ajoute uniquement ce qui a du sens pour votre journée.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              ["Captation intégrale", "Cérémonie ou discours", "150 € TTC"],
              ["Second vidéaste", "Un double point de vue", "Sur devis"],
              ["Tournage la veille", "Dîner ou soirée de la veille", "300 € TTC"],
              ["Vidéo du brunch", "Le lendemain, sans se presser", "300 € TTC"],
            ].map(([title, description, price]) => (
              <div
                key={title}
                className="bg-card/40 p-6 min-h-36 flex flex-col justify-between option-card"
                data-reveal="option-card"
              >
                <div>
                  <h3 className="font-display text-xl leading-[0.95]">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-acid">
                  {price}
                </div>
              </div>
            ))}
          </div>
          <aside className="mt-16 border-t border-border pt-8" data-reveal="good-to-know">
            <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-display text-4xl md:text-5xl leading-[0.9]">
                Bon à <span className="text-acid">savoir</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Les détails qui comptent
              </span>
            </div>
            <div className="mt-8 grid grid-cols-1 border-y border-border sm:grid-cols-3">
              {[
                ["6 semaines", "Livraison sous six semaines maximum."],
                ["Drone", "Selon les conditions et les autorisations du lieu."],
                ["80 km", "Déplacements inclus dans ce rayon autour de moi."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="px-0 py-6 sm:px-6 sm:first:pl-0 sm:border-l sm:first:border-l-0 border-border"
                >
                  <div className="font-display text-3xl md:text-4xl leading-[0.9]">{title}</div>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-acid pl-4 text-sm md:text-base leading-relaxed text-foreground/75">
              On en parle simplement lors de notre premier échange, sans petite ligne cachée.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  return (
    <section
      id="contact"
      className="relative border-t border-border px-6 md:px-10 py-24 md:py-48 grain-overlay"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="flex items-center gap-4 mb-12 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          data-reveal="label"
        >
          <span>[ 004 ]</span>
          <span className="h-px w-16 bg-border" />
          <span>Un premier échange</span>
        </div>
        <h2 className="font-display text-mega" data-reveal="contact-title">
          Racontez-moi
          <br />
          votre <span className="text-acid">histoire.</span>
        </h2>
        <div className="mt-12 max-w-3xl" data-reveal="contact-choices">
          <a
            href="/onprendrdv"
            className="group appointment-cta bg-card/70 p-7 md:p-9 min-h-48 flex flex-col justify-between hover:bg-acid hover:text-black transition-colors"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid group-hover:text-black">
              Avant le formulaire
            </div>
            <div>
              <h3 className="font-display text-4xl md:text-5xl leading-[0.92]">
                Prendre rendez-vous
              </h3>
              <p className="mt-4 max-w-md text-sm text-muted-foreground group-hover:text-black/70">
                On fait connaissance tranquillement pendant 30 minutes. Choisissez votre créneau.
              </p>
            </div>
            <span className="appointment-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
        <div id="message" className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-12">
          <form
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
                  _subject: "Nouveau message depuis le site — Lucas Magnier",
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
            className="md:col-span-3 space-y-6"
            data-reveal="contact-form"
          >
            {[
              { name: "name", label: "01 — Vos prénoms", type: "text" },
              { name: "email", label: "02 — Votre e-mail", type: "email" },
              { name: "date", label: "03 — Date & lieu du mariage", type: "text" },
            ].map((field) => (
              <div key={field.name} className="border-b border-border pb-3">
                <label className="block font-mono text-sm md:text-base uppercase tracking-[0.16em] text-foreground/80 mb-2">
                  {field.label}
                </label>
                <input
                  required
                  type={field.type}
                  name={field.name}
                  className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl placeholder:text-muted/50 focus:text-acid transition-colors"
                  placeholder="—"
                />
              </div>
            ))}
            <div className="border-b border-border pb-3">
              <label className="block font-mono text-sm md:text-base uppercase tracking-[0.16em] text-foreground/80 mb-2">
                04 — Racontez-moi votre journée
              </label>
              <textarea
                required
                rows={3}
                name="msg"
                className="w-full bg-transparent outline-none font-sans text-xl md:text-2xl placeholder:text-foreground/70 resize-none"
                placeholder="Le lieu, l'ambiance, vos envies… et les détails qui comptent pour vous."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full mt-8 bg-acid text-black py-8 font-display text-3xl md:text-5xl uppercase hover:bg-foreground hover:text-background transition-colors magnetic-button"
            >
              {sending ? "Envoi en cours…" : sent ? "→ À très vite" : "On en parle →"}
            </button>
            {sendError ? (
              <p className="text-sm md:text-base text-destructive leading-relaxed">{sendError}</p>
            ) : null}
          </form>
          <aside
            className="md:col-span-2 space-y-10 font-mono text-base md:text-lg"
            data-reveal="contact-aside"
          >
            <div>
              <div className="text-sm md:text-base uppercase tracking-[0.16em] text-foreground/75 mb-3">
                Ici, pas de formulaire froid
              </div>
              <p className="text-foreground leading-relaxed">
                Dites-moi ce qui vous fait vibrer, ce que vous imaginez — ou justement ce que vous
                ne voulez surtout pas. Je vous réponds sous 48 h.
              </p>
            </div>
            <div>
              <div className="text-sm md:text-base uppercase tracking-[0.16em] text-foreground/75 mb-3">
                Basé dans les Hauts-de-France
              </div>
              <p className="text-foreground">Disponible là où votre histoire se passe.</p>
            </div>
            <div className="border-t border-border pt-6 text-muted-foreground leading-relaxed">
              Un rendez-vous de préparation nous permet de faire connaissance, de parler de vos
              attentes et de laisser la place aux surprises.
            </div>
            <a
              href="/onprendrdv/questionnaire"
              className="inline-flex text-acid hover:text-foreground transition-colors"
            >
              Préparer notre échange →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.25em] text-muted-foreground">
      <div>© 2026 Lucas Magnier — Vidéaste de mariage</div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 bg-acid animate-pulse" /> Hauts-de-France · Disponible partout
      </div>
      <div>Des films vrais, drôles et pleins de vie.</div>
    </footer>
  );
}
