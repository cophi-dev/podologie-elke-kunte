"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} pathname={pathname} />;
}

function HeaderInner({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link href="/" className="min-w-0">
          <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold">Podologie</p>
          <p className="serif text-xl leading-none text-navy md:text-[1.35rem]">Elke Kunte</p>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Hauptnavigation">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-[0.92rem] ${pathname.startsWith(item.href) ? "text-navy" : "text-ink-soft hover:text-navy"}`}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-20 min-w-64 translate-y-2 rounded-2xl border border-line bg-cream p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-cream-deep hover:text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.92rem] ${pathname === item.href ? "text-navy" : "text-ink-soft hover:text-navy"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn-primary hidden !px-4 !py-2.5 text-sm sm:inline-flex">
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-px bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-cream px-5 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobiles Menü">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2.5 text-left text-ink"
                    onClick={() => setTreatmentsOpen((v) => !v)}
                  >
                    {item.label}
                    <span className="text-gold">{treatmentsOpen ? "–" : "+"}</span>
                  </button>
                  {treatmentsOpen
                    ? item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block py-2 pl-3 text-sm text-ink-soft">
                          {child.label}
                        </Link>
                      ))
                    : null}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="py-2.5 text-ink">
                  {item.label}
                </Link>
              ),
            )}
            <a href={site.phoneHref} className="btn-primary mt-3">
              Termin vereinbaren · {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
