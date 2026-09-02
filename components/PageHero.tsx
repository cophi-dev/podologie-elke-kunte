import { asset } from "@/lib/site";

export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="absolute inset-0 opacity-25"
        style={{
            backgroundImage: `url(${asset("/images/hero-sand.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/88 to-cream" />
      <div className="relative mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
        {kicker ? (
          <p className="text-[0.72rem] font-medium tracking-[0.28em] uppercase text-gold">{kicker}</p>
        ) : null}
        <h1 className="serif mt-3 max-w-3xl text-4xl leading-[1.12] text-navy md:text-6xl">{title}</h1>
        {text ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{text}</p> : null}
        <div className="gold-rule mt-7" />
      </div>
    </section>
  );
}
