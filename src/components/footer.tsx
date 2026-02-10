"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <footer className="w-full bg-[#1E1E1E] text-[#F5F5F5]">
      {/* Community CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - CTA Text */}
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold tracking-wide text-[#D1D1D1]">
              Unite al movimiento cultural de tu barrio
            </p>
            <h2 className="text-balance text-4xl font-bold leading-tight text-[#F5F5F5] sm:text-5xl">
              Se parte de nuestra comunidad
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-[#A0A0A0]">
              Enterate de los proximos eventos, talleres, clases y novedades del
              Colectivo Cultural El Bondi. Dejanos tu contacto y te mantenemos
              al tanto de todo lo que pasa en el centro cultural.
            </p>
          </div>

          {/* Right - Subscription Form */}
          <div className="rounded-lg bg-[#2A2A2A] p-6 sm:p-8">
            <h3 className="mb-2 text-xl font-semibold text-[#F5F5F5]">
              Para mas informacion
            </h3>
            <p className="mb-6 text-sm text-[#A0A0A0]">
              Si tienes preguntas o quieres tener noticias de los siguientes
              eventos.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="rounded-md border border-[#444] bg-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#777] outline-none transition-colors focus:border-bondi-purple"
                required
              />
              <input
                type="email"
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-[#444] bg-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#777] outline-none transition-colors focus:border-bondi-purple"
                required
              />
              <input
                type="tel"
                placeholder="Numero de telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="rounded-md border border-[#444] bg-[#2A2A2A] px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#777] outline-none transition-colors focus:border-bondi-purple"
              />
              <label className="flex items-start gap-3 text-sm text-[#A0A0A0]">
                <input
                  type="checkbox"
                  checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#444] accent-bondi-purple"
                  required
                />
                <span>
                  Acepto recibir comunicaciones y he leido la{" "}
                  <Link
                    href="/politica-de-privacidad"
                    className="text-bondi-purple-light underline underline-offset-2 hover:text-bondi-purple"
                  >
                    politica de privacidad
                  </Link>
                  .
                </span>
              </label>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-bondi-purple py-3 text-sm font-semibold text-[#F5F5F5] transition-colors hover:bg-bondi-purple-dark"
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-[#333]" />
      </div>

      {/* Footer Info Section */}
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand + Copyright */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-12">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Colectivo Cultural El Bondi"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-[#F5F5F5]">Colectivo Cultural</p>
                <p className="text-xs text-[#777]">&copy; {new Date().getFullYear()}</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-1 text-sm font-semibold text-[#F5F5F5]">
                Contacto
              </p>
              <p className="text-xs text-[#A0A0A0]">Buenos Aires, Argentina</p>
              <a
                href="mailto:mailcolectivocultural@gmail.com"
                className="text-xs text-bondi-purple-light underline underline-offset-2 hover:text-bondi-purple"
              >
                mailcolectivocultural@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-[#D1D1D1] transition-colors hover:bg-bondi-purple hover:text-[#F5F5F5]"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-[#D1D1D1] transition-colors hover:bg-bondi-purple hover:text-[#F5F5F5]"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-[#D1D1D1] transition-colors hover:bg-bondi-purple hover:text-[#F5F5F5]"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-[#D1D1D1] transition-colors hover:bg-bondi-purple hover:text-[#F5F5F5]"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#333]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row lg:px-8">
          <p className="text-xs text-[#777]">
            Copyright &copy; 2015-{new Date().getFullYear()} Colectivo Cultural El Bondi
          </p>
          <div className="flex items-center gap-4 text-xs text-[#777]">
            <Link
              href="/aviso-legal"
              className="transition-colors hover:text-[#D1D1D1]"
            >
              Aviso legal
            </Link>
            <span className="text-[#444]">|</span>
            <Link
              href="/politica-de-privacidad"
              className="transition-colors hover:text-[#D1D1D1]"
            >
              Politica de privacidad
            </Link>
            <span className="text-[#444]">|</span>
            <Link
              href="/terminos-y-condiciones"
              className="transition-colors hover:text-[#D1D1D1]"
            >
              Terminos y condiciones
            </Link>
            <span className="text-[#444]">|</span>
            <Link
              href="/impressum"
              className="transition-colors hover:text-[#D1D1D1]"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
