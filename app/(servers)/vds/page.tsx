"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  HardDrive,
  Camera,
  Server,
  Globe,
  MemoryStick,
  Shield,
  Clock,
  Copy,
} from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";
import { vdsPlans } from "@/data/vps/vds.plans";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

export default function VdsPage() {
  const getPopularPlan = () => {
    return vdsPlans[1].id;
  };

  const copySpecifications = (plan: any) => {
    const specs = `
  Plan: ${plan.name}
  Precio: ${plan.newPrice}
  CPU: ${plan.CpuCores} Núcleos fisicos
  RAM: ${plan.ram}
  Almacenamiento: ${plan.storage}
  Snapshots: ${plan.snapshots}
  Protección: ${plan.ddos} Incluida
  Tráfico: ${plan.traffic}
  Puerto: ${plan.port} Velocidad de transferencia
  Soporte: 24/7
`;

    navigator.clipboard
      .writeText(specs.trim())
      .then(() => {
        toast.success(`Especificaciones copiadas | ${plan.name}`, {
          duration: 3000,
        });
      })
      .catch(() => {
        toast.error("Error al copiar", {
          description:
            "No se pudieron copiar las especificaciones. Inténtalo de nuevo.",
          duration: 3000,
        });
      });
  };

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
                VPS de Alto Rendimiento
              </h2>

              <p className="text-zinc-200 text-balance">
                Servidor virtual dedicado con potencia reservada, perfecto para
                ejecutar servicios críticos, servidores web, servidores de
                juegos multiplayer, o plataformas de alta exigencia.
              </p>

              <Link
                href=""
                className="h-9 bg-background font-inter-sans font-medium text-primary inline-flex items-center text-sm px-6 border rounded-full hover:scale-105 transition-transform duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>

      <section className="py-24 px-4 md:px-8 xl:px-40">
        <div className="mb-12 tracking-tighter">
          <h1 className="text-4xl font-bold mb-4">
            Elige el plan que necesites
          </h1>

          <p className="text-lg text-muted-foreground">
            Nuestro equipo de ventas puede ayudarle a encontrar la solución que
            mejor se adapte a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vdsPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`shadow-[inset_0_0_0_1px_#11192e1a] group relative transition-all duration-300 hover:shadow-lg ${
                plan.id === getPopularPlan()
                  ? "shadow-[inset_0_0_0_2px_#0069ff] hover:shadow-[inset_0_0_0_2px_#0069ff]"
                  : "hover:shadow-[inset_0_0_0_2px_#0069ff]"
              }`}
            >
              {plan.id === getPopularPlan() && (
                <Badge className="bg-blue-600 font-inter-sans absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Popular
                </Badge>
              )}

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        copySpecifications(plan);
                      }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-background/80 backdrop-blur-sm cursor-pointer hover:bg-background border-border/50 hover:border-border"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copiar especificaciones</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <CardHeader>
                <CardTitle className="text-3xl text-center font-bold tracking-tight leading-relaxed uppercase">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm text-center font-inter-sans text-muted-foreground">
                  <span className="text-2xl font-bold line-through">
                    €{plan.price}
                  </span>
                  <div className="font-inter-sans mt-4">
                    <span className="text-4xl font-bold text-primary">
                      €{plan.newPrice}
                    </span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 font-inter-sans">
                <div className="flex items-center gap-3">
                  <Cpu className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.CpuCores} CPU</span>
                    <p className="text-sm text-muted-foreground">
                      Núcleos fisicos
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MemoryStick className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.ram} RAM</span>
                    <p className="text-sm text-muted-foreground">Memoria</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HardDrive className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.storage}</span>
                    <p className="text-sm text-muted-foreground">
                      Almacenamiento
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Camera className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">
                      {plan.snapshots} Snapshot{plan.snapshots > 1 ? "s" : ""}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Copias de seguridad
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.ddos}</span>
                    <p className="text-sm text-muted-foreground">
                      Protección incluida
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.port}</span>
                    <p className="text-sm text-muted-foreground">
                      Velocidad de transferencia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.traffic}</span>
                    <p className="text-sm text-muted-foreground">Tráfico</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">Soporte</span>
                    <p className="text-sm text-muted-foreground">Rapido 24/7</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  size="lg"
                  className={`w-full font-inter-sans cursor-pointer ${
                    plan.id === getPopularPlan()
                      ? "bg-blue-600 hover:bg-blue-700"
                      : ""
                  }`}
                  variant={plan.id === getPopularPlan() ? "default" : "outline"}
                  asChild
                >
                  <Link href="https://discord.gg/BwBjEEDzrR" target="_blank">
                    <Server className="mr-2 h-4 w-4" />
                    Contratar Plan
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
