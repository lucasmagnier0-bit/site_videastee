import { createFileRoute, Link } from "@tanstack/react-router";
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
    price: "1 500 €",
    description:
      "Un film court et percutant pour garder une trace authentique des temps forts, sans courir après chaque minute de la journée.",
    presence: "5 à 6 h",
    moments: "Cérémonies et vin d'honneur",
    film: "5 à 6 minutes",
  },
  {
    number: "02",
    name: "PLEIN CADRE",
    price: "1 800 €",
    description:
      "Les coulisses du matin, la montée en émotion, les embrassades du cocktail : le récit prend le temps de respirer.",
    presence: "10 à 11 h",
    moments: "Des préparatifs au vin d'honneur",
    film: "8 à 10 minutes",
  },
  {
    number: "03",
    name: "GRAND ÉCRAN",
    price: "2 100 €",
    description:
      "La journée complète, les discours, la première danse et toute l'ambiance. Pour revivre votre histoire du réveil à la fête.",
    presence: "13 à 14 h",
    moments: "Du matin à la piste de danse",
    film: "12 à 15 minutes",
  },
];

const included = ["Préparation en amont", "Teaser d'une minute", "Coffret USB personnalisé"];

const extras = [
  ["Captation intégrale", "Cérémonie ou discours", "150 € TTC"],
  ["Second vidéaste", "Un double point de vue", "Sur devis"],
  ["Tournage la veille", "Dîner ou soirée de la veille", "300 € TTC"],
  ["Vidéo du brunch", "Le lendemain, sans se presser", "300 € TTC"],
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
          className="flex items-end justify-between gap-8 flex-wrap mb-14"
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
          <p className="max-w-sm text-base text-muted-foreground leading-relaxed">
            Trois façons de raconter votre journée, selon le temps que vous voulez garder en images.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.number}
              className="offer-card flex flex-col border border-border bg-card/60 p-7 md:p-8"
              data-reveal="offer-card"
            >
              <div className="font-mono text-sm uppercase tracking-[0.16em] text-acid">
                Formule {offer.number}
              </div>
              <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[0.95]">
                {offer.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-5xl md:text-6xl leading-none text-acid">
                  {offer.price}
                </span>
                <span className="font-mono text-sm text-muted-foreground">TTC</span>
              </div>
              <p className="mt-6 text-base leading-relaxed text-foreground/80">
                {offer.description}
              </p>
              <dl className="mt-8 border-t border-border">
                {[
                  ["Présence", offer.presence],
                  ["Moments filmés", offer.moments],
                  ["Votre film", offer.film],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                  >
                    <dt className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-right text-base leading-snug text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div
          className="mt-6 flex flex-col gap-5 border border-border bg-card/60 p-6 md:flex-row md:items-center md:gap-10 md:p-8"
          data-reveal="highlight"
        >
          <div className="shrink-0 font-mono text-sm uppercase tracking-[0.16em] text-acid">
            Inclus dans chaque formule
          </div>
          <ul className="grid flex-1 gap-3 sm:grid-cols-3">
            {included.map((label) => (
              <li key={label} className="flex items-start gap-3 text-base text-foreground/90">
                <span className="text-acid" aria-hidden="true">
                  ✓
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-7">
            <div className="font-mono text-sm uppercase tracking-[0.2em] text-acid">
              Options à la carte
            </div>
            <p className="text-base text-muted-foreground">
              On ajoute uniquement ce qui a du sens pour votre journée.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
            {extras.map(([title, description, price]) => (
              <li
                key={title}
                className="option-card flex items-start justify-between gap-6 bg-card/60 p-5 md:p-6"
                data-reveal="option-card"
              >
                <div>
                  <h3 className="font-display text-xl md:text-2xl leading-[0.95]">{title}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="shrink-0 whitespace-nowrap text-right font-mono text-sm md:text-base text-acid">
                  {price}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="mt-20 border-t border-border pt-8" data-reveal="good-to-know">
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
                <p className="mt-3 max-w-xs text-sm md:text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-acid pl-4 text-sm md:text-base leading-relaxed text-foreground/75">
            On en parle simplement lors de notre premier échange, sans petite ligne cachée.
          </p>
        </aside>

        <div className="mt-20 flex flex-col gap-8 border border-acid bg-acid/10 p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="font-display text-3xl md:text-5xl leading-[0.95]">
              Une formule vous parle ?
            </h3>
            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-foreground/80">
              On en discute 30 minutes, en visio ou au téléphone, pour trouver celle qui colle à
              votre journée.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              to="/onprendrdv"
              className="inline-flex items-center justify-center bg-acid px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-black transition-colors hover:bg-foreground hover:text-background magnetic-button"
            >
              Prendre rendez-vous →
            </Link>
            <a
              href="#message"
              className="inline-flex items-center justify-center border border-border px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:border-acid hover:text-acid"
            >
              Poser une question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldLabelClass =
  "block font-mono text-sm uppercase tracking-[0.16em] text-foreground/80 mb-2";
const fieldWrapClass = "border-b border-border pb-3";

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  return (
    <section
      id="contact"
      className="relative border-t border-border px-6 md:px-10 py-24 md:py-40 grain-overlay"
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
        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/80">
          Deux façons de commencer, au choix. Basé dans les Hauts-de-France, je me déplace là où se
          passe votre histoire.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col lg:col-span-2" data-reveal="contact-choices">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-acid">
              Option 1 · En direct
            </div>
            <Link
              to="/onprendrdv"
              className="group appointment-cta bg-card/70 p-7 md:p-9 min-h-72 flex-1 flex flex-col justify-between hover:bg-acid hover:text-black transition-colors"
            >
              <div>
                <h3 className="font-display text-4xl md:text-5xl leading-[0.92]">
                  Réserver un appel
                </h3>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/80 group-hover:text-black/75">
                  30 minutes en visio ou au téléphone pour faire connaissance, sans pression. Vous
                  choisissez directement votre créneau.
                </p>
              </div>
              <span className="appointment-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          <div id="message" className="scroll-mt-28 lg:col-span-3" data-reveal="contact-form">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-acid">
              Option 2 · Par écrit
            </div>
            {sent ? (
              <div className="border border-acid bg-acid/10 p-8 md:p-10" role="status">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-acid mb-5">
                  C'est bien reçu
                </div>
                <h3 className="font-display text-4xl md:text-6xl leading-[0.92]">
                  Merci, je vous réponds sous 48 h.
                </h3>
                <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-foreground/80">
                  Si vous préférez ne pas attendre, vous pouvez aussi réserver directement un appel
                  de 30 minutes.
                </p>
                <Link
                  to="/onprendrdv"
                  className="mt-8 inline-flex items-center justify-center bg-acid px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-black transition-colors hover:bg-foreground hover:text-background"
                >
                  Choisir un créneau →
                </Link>
              </div>
            ) : (
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
                className="space-y-7"
              >
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                  <div className={fieldWrapClass}>
                    <label className={fieldLabelClass} htmlFor="contact-names">
                      Vos prénoms
                    </label>
                    <input
                      required
                      id="contact-names"
                      name="prenoms"
                      type="text"
                      autoComplete="name"
                      className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl placeholder:text-muted/50 focus:text-acid transition-colors"
                      placeholder="—"
                    />
                  </div>
                  <div className={fieldWrapClass}>
                    <label className={fieldLabelClass} htmlFor="contact-email">
                      Votre e-mail
                    </label>
                    <input
                      required
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl placeholder:text-muted/50 focus:text-acid transition-colors"
                      placeholder="—"
                    />
                  </div>
                </div>
                <div className={fieldWrapClass}>
                  <label className={fieldLabelClass} htmlFor="contact-date">
                    Date et lieu du mariage{" "}
                    <span className="normal-case tracking-normal text-muted-foreground">
                      (même approximatifs)
                    </span>
                  </label>
                  <input
                    required
                    id="contact-date"
                    name="date_lieu"
                    type="text"
                    className="w-full bg-transparent outline-none font-display text-2xl md:text-3xl placeholder:text-muted/50 focus:text-acid transition-colors"
                    placeholder="—"
                  />
                </div>
                <div className={fieldWrapClass}>
                  <label className={fieldLabelClass} htmlFor="contact-message">
                    Un mot sur votre journée{" "}
                    <span className="normal-case tracking-normal text-muted-foreground">
                      (facultatif)
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    name="message"
                    className="w-full bg-transparent outline-none font-sans text-xl md:text-2xl placeholder:text-foreground/40 resize-none"
                    placeholder="Le lieu, l'ambiance, vos envies…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-acid text-black py-6 font-display text-3xl md:text-4xl uppercase hover:bg-foreground hover:text-background transition-colors magnetic-button disabled:opacity-70"
                >
                  {sending ? "Envoi en cours…" : "Envoyer mon message →"}
                </button>
                {sendError ? (
                  <p role="alert" className="text-sm md:text-base text-destructive leading-relaxed">
                    {sendError}
                  </p>
                ) : null}
                <p className="font-mono text-sm leading-relaxed text-foreground/70">
                  Je vous réponds personnellement sous 48 h.
                </p>
              </form>
            )}
          </div>
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
