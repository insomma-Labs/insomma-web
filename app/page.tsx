"use client";

import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vpsPlans } from "@/data/vps/vps-plans";
import {
  Camera,
  CheckCircle,
  Clock,
  Cpu,
  Gauge,
  Globe,
  HardDrive,
  MemoryStick,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { locations } from "@/data/home/locations";
import { features } from "@/data/home/features";

export default function HomePage() {
  const getPopularPlan = () => {
    return vpsPlans[0].id;
  };

  const [activeTab, setActiveTab] = useState("europe");
  const [selectedLocation, setSelectedLocation] = useState("Union Europea");

  return (
    <>
      <Header />

      <Container className="py-16 xxs:py-24 md:py-36 bg-[#1433d6]">
        <div>
          <div className="max-w-3xl space-y-4 xxs:space-y-6">
            <h4 className="font-inter-sans text-secondary font-semibold text-sm xxs:text-base">
              VPS Hosting Solutions
            </h4>
            <Badge className="text-xs bg-secondary/20 text-secondary border border-secondary/20 font-inter-sans xxs:text-sm">
              ⚡ CPU de alto rendimiento (hasta 4.2 GHz+)
            </Badge>

            <h1 className="text-3xl xxs:text-4xl md:text-5xl text-secondary font-semibold tracking-tighter text-balance leading-tight">
              VPS en la nube confiable y rápido, diseñado para ti.
            </h1>

            <ul className="flex text-secondary flex-col gap-1.5 xxs:gap-2 font-inter-sans text-sm xxs:text-base">
              <li className="flex items-start xxs:items-center gap-2">
                <CheckCircle className="size-4 mt-0.5 xxs:mt-0 flex-shrink-0" />
                <span>Servicios VPS en la nube de alto rendimiento.</span>
              </li>

              <li className="flex items-start xxs:items-center gap-2">
                <CheckCircle className="size-4 mt-0.5 xxs:mt-0 flex-shrink-0" />
                <span>Almacenamiento empresarial NVMe & SSD.</span>
              </li>

              <li className="flex items-start xxs:items-center gap-2">
                <CheckCircle className="size-4 mt-0.5 xxs:mt-0 flex-shrink-0" />
                <span>Conexiones de 10 Gbps.</span>
              </li>
            </ul>

            <Button
              size="lg"
              variant="outline"
              className="w-full font-semibold tracking-tighter rounded-full uppercase font-inter-sans bg-secondary text-primary hover:scale-105 transition-transform duration-200 xxs:w-auto text-sm xs:text-base px-6"
              asChild
            >
              <Link href="/vps">Ver VPS disponibles</Link>
            </Button>
          </div>
        </div>
      </Container>

      <Container className="py-24 px-4 md:px-8 xl:px-40">
        <div className="mb-12 tracking-tighter">
          <h2 className="text-4xl font-bold mb-1">
            Elige el plan que necesites
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestro equipo de ventas puede ayudarle a encontrar la solución que
            mejor se adapte a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vpsPlans.slice(0, -3).map((plan) => (
            <Card
              key={plan.id}
              className={`shadow-[inset_0_0_0_2px_#11192e1a] group relative transition-all duration-300 ${
                plan.id === getPopularPlan()
                  ? "shadow-[inset_0_0_0_2px_#0069ff] hover:shadow-[inset_0_0_0_2px_#0069ff]"
                  : "hover:hover:shadow-[inset_0_0_0_2px_#0069ff]"
              }`}
            >
              {plan.id === getPopularPlan() && (
                <Badge className="bg-blue-600 font-inter-sans absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Popular
                </Badge>
              )}

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

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="size-5 text-blue-500" />
                  <div>
                    <span className="font-semibold">{plan.vCpuCores} vCPU</span>
                    <p className="text-sm text-muted-foreground">
                      Núcleos virtuales
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
                  <Link href="https://discord.gg/BwBjEEDzrR">
                    <Server className="mr-2 h-4 w-4" />
                    Contratar Plan
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="font-inter-sans py-24 bg-[#1433d6]">
        <div className="">
          <div className="mb-12 tracking-tighter font-epilogue-sans flex flex-col justify-center md:flex-row md:justify-between items-center">
            <h2 className="text-[8vw] text-center xs:text-start xs:text-[5vw] text-secondary font-bold text-balance mb-4 md:mb-0 md:text-4xl">
              Características totalmente gratis.
            </h2>
            <Button
              variant="outline"
              size="lg"
              className="shrink-0 font-inter-sans tracking-normal hover:scale-105 transition-transform duration-200"
            >
              <Link href="#" className="flex items-center gap-2">
                Join us now
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="group bg-white relative overflow-hidden p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <CardHeader className="pb-4 p-0">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="size-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-balance leading-tight">
                          {feature.title}
                        </h4>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 p-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>

      <Container className="py-24">
        <div>
          <div className="mb-12 tracking-tighter">
            <h2 className="text-4xl font-bold mb-1">
              Más de 8 ubicaciones en todo el mundo
            </h2>
            <p className="text-lg text-muted-foreground">
              Elija la ubicación que mejor se adapte a su negocio y obtenga un
              VPS en la nube.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button
                variant="outline"
                onClick={() => setActiveTab("europe")}
                className={`h-14 px-8 font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-pointer ${
                  activeTab === "europe"
                    ? "bg-blue-600 text-white shadow-lg"
                    : ""
                }`}
              >
                Europe VPS
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("usa")}
                className={`h-14 px-8 font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-pointer ${
                  activeTab === "usa" ? "bg-blue-600 text-white shadow-lg" : ""
                }`}
              >
                USA VPS
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("asia")}
                className={`h-14 px-8 font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-pointer ${
                  activeTab === "asia" ? "bg-blue-600 text-white shadow-lg" : ""
                }`}
              >
                Asia VPS
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("australia")}
                className={`h-14 px-8 font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-pointer ${
                  activeTab === "australia"
                    ? "bg-blue-600 text-white shadow-lg"
                    : ""
                }`}
              >
                Australia
              </Button>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              <div className="lg:col-span-2">
                {/* Locations Grid */}
                <div className="bg-background h-full rounded-2xl p-4 shadow-lg border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations[activeTab as keyof typeof locations].map(
                      (location, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
                        >
                          <div className="text-2xl">{location.flag}</div>
                          <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                            {location.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-background h-full rounded-2xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Network Test
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Comprueba la velocidad de red de la ubicación que desea.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Elige ubicacion
                    </label>
                    <Select
                      value={selectedLocation}
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(locations)
                          .flat()
                          .map((location, index) => (
                            <SelectItem key={index} value={location.name}>
                              <div className="flex items-center gap-2">
                                <span>{location.flag}</span>
                                <span>{location.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full bg-blue-600 text-secondary font-inter-sans font-semibold uppercase hover:bg-blue-700 hover:text-secondary"
                  >
                    <Link href="">Network Test</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="font-inter-sans bg-[#1433d6] py-24">
        <div className="text-secondary">
          <div className="mb-12 tracking-tighter">
            <h2 className="text-4xl font-bold mb-1">Preguntas Frecuentes</h2>
            <p className="text-lg text-zinc-300">
              Resolvemos tus dudas sobre nuestros servicios de servidores VPS y
              dedicados.
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base cursor-pointer">
                  ¿Qué diferencia hay entre un VPS y un servidor dedicado?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Un VPS es un servidor virtual que comparte hardware físico con
                  otros VPS, pero con recursos garantizados. Un servidor
                  dedicado es un equipo físico completo exclusivo para ti,
                  ofreciendo máximo rendimiento y control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base cursor-pointer">
                  ¿Ofrecen registro de dominios?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  No, nos especializamos exclusivamente en servidores VPS y
                  dedicados. Para el registro de dominios, recomendamos utilizar
                  un registrador especializado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base cursor-pointer">
                  ¿Qué tipo de soporte técnico ofrecen?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Ofrecemos soporte técnico 24/7 para todos nuestros clientes.
                  Puedes contactarnos a través de nuestro sistema de tickets o
                  por Discord para resolver cualquier incidencia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base cursor-pointer">
                  ¿Cómo funciona la protección DDoS?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Todos nuestros servidores incluyen protección DDoS avanzada
                  que filtra el tráfico malicioso antes de que llegue a tu
                  servidor, manteniendo tu servicio siempre disponible incluso
                  durante ataques.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base cursor-pointer">
                  ¿Puedo actualizar mi plan en el futuro?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Sí, puedes actualizar tu plan en cualquier momento para
                  adaptarlo a tus necesidades. El proceso es sencillo y rápido,
                  y nuestro equipo de soporte te ayudará en todo lo que
                  necesites.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
}
