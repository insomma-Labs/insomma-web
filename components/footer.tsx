import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t font-medium font-inter-sans py-8 px-4 md:px-8 xl:px-40">
      <div className="flex flex-col gap-4 text-center md:flex-row md:text-start justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Copyright © 2025 <span className="text-primary">Insomma Cloud</span>{" "}
          all rights reserved.{" "}
          <Link href="/privacy-policy" className="underline text-primary">
            Privacy Policy
          </Link>
          {" - "}
          <Link href="/terms-and-conditions" className="underline text-primary">
            Terms and Conditions
          </Link>
        </p>

        <p className="text-sm">
          <Link href="mailto:insomma.cloud@outlook.com" className="underline">
            insomma.cloud@outlook.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
