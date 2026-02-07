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
    <div className="bg-bondi-purple px-4 py-2 text-center text-sm text-white">
      <p>
        {message}{" "}
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="font-semibold underline underline-offset-2 hover:no-underline"
          >
            {linkText}
          </Link>
        )}
      </p>
    </div>
  );
}
