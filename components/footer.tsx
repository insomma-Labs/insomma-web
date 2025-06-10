import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t font-medium font-inter-sans py-8 px-4 md:px-8 xl:px-40">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Copyright © 2025 <span className="text-primary">Insomma Cloud</span>
          {""} all right reserved.{" "}
          <Link href="/privacy-policy" className="underline text-primary">
            Politica de privacidad
          </Link>
          {" - "}
          <Link href="/terms-and-conditions" className="underline text-primary">
            Terminos y condiciones
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
