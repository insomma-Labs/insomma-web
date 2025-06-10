import { Cpu, Gauge, HardDrive, Server, Shield, Zap } from "lucide-react";

export const features = [
  {
    icon: Cpu,
    title: "Hardware potente",
    description:
      "Servidores con procesadores Intel/AMD, RAM DDR4 y almacenamiento NVMe.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Webs de alta velocidad",
    description:
      "Conectividad rápida con puertos de 1 Gbps, transferencia alta.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Seguridad y protección",
    description:
      "Protección DDoS, opciones de seguridad y configuraciones RAID disponibles.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Gauge,
    title: "Fiabilidad cómoda",
    description:
      "99.9% de disponibilidad y centro de datos Tier 3 veloz y fiable.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "Recursos dedicados",
    description:
      "Recursos dedicados completos sin compartir. Rendimiento garantizado.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: HardDrive,
    title: "Almacenamiento NVMe SSD",
    description:
      "Almacenamiento NVMe y SSD ultrarrápido para acceso veloz a datos.",
    gradient: "from-teal-500 to-cyan-500",
  },
];
