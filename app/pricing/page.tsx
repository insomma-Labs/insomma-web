import Header from "@/components/header";
import VdsPricing from "@/components/pricing/vds-pricing";
import VpsPricing from "@/components/pricing/vps-pricing";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Header />

      <main className="w-full h-[55vh] bg-[#0069ff]">
        <div
          className="w-full h-full object-cover object-center"
          style={{
            backgroundImage:
              "url('https://www.digitalocean.com/_next/static/media/hero-background.e485d546.svg')",
          }}
        >
          <div className="w-full h-full grid place-content-center bg-gradient-to-t from-blue-700 to-blue-800/50">
            <div className="max-w-3xl text-center space-y-6">
              <h2 className="text-[10vw] xs:text-5xl text-background text-balance font-bold tracking-tighter">
                Explore our pricing
              </h2>

              <p className="text-zinc-200 text-balance text-sm xs:text-base">
                Discover flexible and transparent pricing plans tailored to your
                needs — whether you're scaling up or just getting started.
              </p>

              <Link
                href="/careers"
                className="h-9 bg-background font-inter-sans font-medium text-primary inline-flex items-center text-sm px-6 border rounded-full hover:scale-105 transition-transform duration-200"
              >
                Start now
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Container className="grid gap-8 font-inter-sans">
        <VpsPricing />
        <VdsPricing />
      </Container>
    </>
  );
}
