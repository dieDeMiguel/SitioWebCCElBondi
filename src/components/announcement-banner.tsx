import Link from "next/link";

interface AnnouncementBannerProps {
  message: string;
  linkText?: string;
  linkHref?: string;
}

export function AnnouncementBanner({
  message,
  linkText = "Tickets.",
  linkHref = "/tickets",
}: AnnouncementBannerProps) {
  return (
    <div
      className="flex h-[55px] items-center justify-center px-4 text-center text-sm text-white sm:text-base"
      style={{
        background: "linear-gradient(135deg, #9D1271 0%, #732B8F 100%)",
      }}
    >
      <p>
        {message}{" "}
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="font-bold italic underline underline-offset-2 hover:no-underline"
          >
            {linkText}
          </Link>
        )}
      </p>
    </div>
  );
}
