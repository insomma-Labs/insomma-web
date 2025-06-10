import Header from "@/components/header";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import React from "react";

export default function TeamPage() {
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
              <h2 className="text-5xl text-background text-balance font-bold tracking-tighter">
                Meet Our Team
              </h2>

              <p className="text-zinc-200 text-balance">
                We are a team of professionals passionate about technology and
                cloud infrastructure. Our mission is to deliver high
                performance, reliable and secure solutions to help our customers
                scale their projects without limits.
              </p>

              <Link
                href="/careers"
                className="h-9 bg-background font-inter-sans font-medium text-primary inline-flex items-center text-sm px-6 border rounded-full hover:scale-105 transition-transform duration-200"
              >
                Join the team
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Container className="py-24">
        <div className="mb-20 text-center tracking-tighter">
          <h1 className="text-4xl font-bold mb-4">
            Meet the People Who Make It Happen
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            We're a passionate group of engineers, designers, and
            problem-solvers committed to building powerful infrastructure
            solutions that help our customers scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="text-center">
            <img
              src="https://cdn.discordapp.com/avatars/1094781812699570276/af140c3bc2e11cdb2bc5672424122192.webp?size=240"
              alt="Alex Jones"
              className="size-32 rounded-full mx-auto mb-4 object-cover border border-blue-600 p-0.5"
            />
            <h3 className="text-xl font-semibold">Talismike</h3>
            <p className="text-muted-foreground">Chief Executive Officer</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn.discordapp.com/avatars/935607571136520274/b5233038b8a53961dba937d28a10d76a.webp?size=240"
              alt="Rons"
              className="size-32 rounded-full mx-auto mb-4 object-cover border border-blue-600 p-0.5"
            />
            <h3 className="text-xl font-semibold">Rons</h3>
            <p className="text-muted-foreground">Chief Operating Officer</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn.discordapp.com/avatars/866913071405989898/ab9f3e88a65b0847ef4757c9eac7dab3.webp?size=160"
              alt="Doyun"
              className="size-32 rounded-full mx-auto mb-4 object-cover border border-blue-600 p-0.5"
            />
            <h3 className="text-xl font-semibold">Doyun</h3>
            <p className="text-muted-foreground">Chief Technology Officer</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn.discordapp.com/avatars/1011029489519689809/b00382a72e6c2810766b16018d549928.webp?size=240"
              alt="Adrian"
              className="size-32 rounded-full mx-auto mb-4 object-cover border border-blue-600 p-0.5"
            />
            <h3 className="text-xl font-semibold">Adrian</h3>
            <p className="text-muted-foreground">Chief of Staff</p>
          </div>
        </div>
      </Container>
    </>
  );
}
