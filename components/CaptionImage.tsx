import Image from "next/image";

export function CaptionImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-deep">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      {caption ? <figcaption className="mt-2 text-sm leading-relaxed text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
