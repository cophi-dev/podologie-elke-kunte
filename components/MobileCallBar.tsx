import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 backdrop-blur md:hidden">
      <a href={site.phoneHref} className="btn-primary w-full">
        Termin vereinbaren · {site.phoneDisplay}
      </a>
    </div>
  );
}
