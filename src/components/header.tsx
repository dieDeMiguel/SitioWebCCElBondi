"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
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
  { label: "Blog", href: "/blog" },
  { label: "Radio", href: "/radio" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Main nav bar - Figma: 1512 x 86px */}
      <nav className="mx-auto flex h-[86px] max-w-[1512px] items-center justify-between px-6 lg:px-10">
        {/* Logo - circular, ~70px */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Colectivo Cultural"
            width={70}
            height={70}
            className="h-[70px] w-[70px] rounded-full object-cover"
            priority
          />
        </Link>

        {/* Desktop Navigation - Figma: 1126 x 36 Hug */}
        <div className="hidden xl:flex xl:items-center xl:gap-2">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-base font-medium text-gray-800 transition-colors hover:text-bondi-purple"
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
        </div>

        {/* Donar Button - Figma: 106 x 40px, gradient #9D1271 → #732B8F */}
        <Link
          href="/donar"
          className="hidden h-10 w-[106px] items-center justify-center rounded-full text-base font-semibold text-white transition-opacity hover:opacity-90 xl:flex"
          style={{
            background: "linear-gradient(135deg, #9D1271 0%, #732B8F 100%)",
          }}
        >
          Donar
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
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
            {navItems.map((item) => (
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
            <Link
              href="/donar"
              className="mt-4 flex h-10 items-center justify-center rounded-full text-center text-base font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #9D1271 0%, #732B8F 100%)",
              }}
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
