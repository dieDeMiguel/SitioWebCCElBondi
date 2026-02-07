"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const primaryNavItems = [
  {
    label: "Centro Cultural",
    href: "#",
    hasDropdown: true,
    items: [
      { label: "Quiénes Somos", href: "/centro-cultural/quienes-somos" },
      { label: "Historia", href: "/centro-cultural/historia" },
      { label: "Equipo", href: "/centro-cultural/equipo" },
    ],
  },
  {
    label: "Eventos y Novedades",
    href: "/eventos",
    hasDropdown: true,
    items: [
      { label: "Próximos Eventos", href: "/eventos/proximos" },
      { label: "Eventos Pasados", href: "/eventos/pasados" },
    ],
  },
  {
    label: "Talleres y Bachilleratos",
    href: "/talleres",
    hasDropdown: true,
    items: [
      { label: "Talleres", href: "/talleres" },
      { label: "Bachilleratos", href: "/bachilleratos" },
    ],
  },
  { label: "Clases Regulares", href: "/clases" },
];

const moreNavItems = [
  { label: "Blog", href: "/blog" },
  { label: "Radio", href: "/radio" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="El Bondi - Centro Cultural Comunitario"
            width={60}
            height={60}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex xl:items-center xl:gap-1">
          {primaryNavItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-bondi-purple"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.hasDropdown && item.items && (
                <div className="invisible absolute left-0 top-full min-w-48 rounded-md bg-white py-2 opacity-0 shadow-lg ring-1 ring-black/5 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bondi-purple"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-bondi-purple"
              aria-haspopup="true"
            >
              Más
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full min-w-44 rounded-md bg-white py-2 opacity-0 shadow-lg ring-1 ring-black/5 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {moreNavItems.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-bondi-purple"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/donar"
          className="hidden rounded-full bg-bondi-purple px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-bondi-purple-dark xl:block"
        >
          Donar
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden">
          <div className="space-y-1 px-4 pb-4">
            {primaryNavItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-bondi-purple"
                  onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && item.items && (
                  <div className="ml-4 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-1 text-sm text-gray-600 hover:text-bondi-purple"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div>
              <p className="pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Más
              </p>
              {moreNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-bondi-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/donar"
              className="mt-4 block rounded-full bg-bondi-purple px-6 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
