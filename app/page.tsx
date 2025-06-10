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
              ⚡ High performance CPU (up to 4.2 GHz+)
            </Badge>

            <h1 className="text-3xl xxs:text-4xl md:text-5xl text-secondary font-semibold tracking-tighter text-balance leading-tight">
              Reliable and fast cloud VPS, designed for you.
            </h1>

            <ul className="flex text-secondary flex-col gap-1.5 xxs:gap-2 font-inter-sans text-sm xxs:text-base">
              <li className="flex items-start xxs:items-center gap-2">
                <CheckCircle className="size-4 mt-0.5 xxs:mt-0 flex-shrink-0" />
                <span>High-performance cloud VPS services.</span>
              </li>

              <li className="flex items-start xxs:items-center gap-2">
                <CheckCircle className="size-4 mt-0.5 xxs:mt-0 flex-shrink-0" />
                <span>NVMe & SSD enterprise storage.</span>
              </li>

              <li className="flex items-start xxs:items-center gap-2">
                <CheckCircle className="size-4 mt-0.5 xxs:mt-0 flex-shrink-0" />
                <span>10 Gbps connections.</span>
              </li>
            </ul>

            <Button
              size="lg"
              variant="outline"
              className="w-full font-semibold font-inter-sans tracking-tighter rounded-full bg-secondary text-primary hover:scale-105 transition-transform duration-200 xxs:w-auto text-sm xs:text-base px-8"
              asChild
            >
              <Link href="/vps">Start now</Link>
            </Button>
          </div>
        </div>
      </Container>

      <Container className="py-24 px-4 md:px-8 xl:px-40">
        <div className="mb-12 tracking-tighter">
          <h2 className="text-4xl font-bold mb-1">Choose the plan you need </h2>
          <p className="text-lg text-muted-foreground">
            Our sales team can help you find the solution that best suits your
            needs. best suits your needs.
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
              Totally free features.
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
              More than 8 locations worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the location that best suits your business and get a VPS in
              the cloud.
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
                Europe
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("usa")}
                className={`h-14 px-8 font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-pointer ${
                  activeTab === "usa" ? "bg-blue-600 text-white shadow-lg" : ""
                }`}
              >
                USA
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("asia")}
                className={`h-14 px-8 font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-pointer ${
                  activeTab === "asia" ? "bg-blue-600 text-white shadow-lg" : ""
                }`}
              >
                Asia
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
                  Check the network speed of the desired location.{" "}
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select location
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
            <h2 className="text-4xl font-bold mb-1">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-300">
              We solve your doubts about our VPS and dedicated servers services.
              dedicated servers.
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base cursor-pointer">
                  What is the difference between a VPS and a dedicated server?{" "}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  A VPS is a virtual server that shares physical hardware with
                  other VPSs, but with other VPS, but with guaranteed resources.
                  A dedicated dedicated server is a complete physical equipment
                  exclusively for you, offering maximum performance and control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base cursor-pointer">
                  Do you offer domain registration?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  No, we specialize exclusively in VPS and dedicated servers.
                  dedicated servers. For domain registration, we recommend using
                  a specialized registrar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base cursor-pointer">
                  What kind of technical support do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  We offer 24/7 technical support for all our customers. You can
                  contact us through our ticketing system or via Discord to
                  resolve Discord to resolve any issue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base cursor-pointer">
                  How does DDoS protection work?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  All our servers include advanced DDoS protection that filters
                  malicious traffic before it reaches your server, keeping your
                  service server, keeping your service always available even
                  during attacks. during attacks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base cursor-pointer">
                  Can I upgrade my plan in the future?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes, you can upgrade your plan at any time to suit your needs.
                  adapt it to your needs. The process is simple and fast, and
                  our support team will help you with everything you need. you
                  need.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
}
