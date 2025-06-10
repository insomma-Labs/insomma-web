import { Cpu, Gauge, HardDrive, Server, Shield, Zap } from "lucide-react";

export const features = [
  {
    icon: Cpu,
    title: "Powerful Hardware",
    description:
      "Servers with Intel/AMD processors, DDR4 RAM and NVMe storage.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "High Speed Webs",
    description: "Fast connectivity with 1 Gbps ports, high transfer.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Safety and security",
    description:
      "DDoS protection, security options and RAID configurations available.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Gauge,
    title: "Comfortable reliability",
    description: "99.9% availability and fast and reliable Tier 3 data center.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "Dedicated resources",
    description:
      "Full dedicated resources without sharing. Guaranteed performance.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD storage",
    description: "Ultra-fast NVMe and SSD storage for fast data access.",
    gradient: "from-teal-500 to-cyan-500",
  },
];
