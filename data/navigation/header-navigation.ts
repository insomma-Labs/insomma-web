interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

interface NavItem {
  label: string;
  wide?: Boolean;
  href?: string;
  dropdown?: DropdownItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/team",
  },
  {
    label: "VPS",
    wide: true,
    dropdown: [
      {
        label: "Cloud VPS",
        description:
          "Servidores virtuales privados con NVMe rápido, desde €11.38",
        icon: "https://cdn-icons-png.flaticon.com/512/4663/4663391.png",
        href: "/vps",
      },
      {
        label: "Windows VPS",
        description:
          "Entornos Windows optimizados para software (proximamente)",
        icon: "https://cdn-icons-png.flaticon.com/512/25/25412.png",
        href: "/windows-vps",
      },
    ],
  },
  {
    label: "Dedicated servers",
    wide: true,
    dropdown: [
      {
        label: "Servidor dedicado",
        description:
          "Potencia bruta. Hardware Bare Metal con recursos 100% dedicados. (proximamente)",
        icon: "https://cdn-icons-png.flaticon.com/512/6595/6595988.png",
        href: "/dedicated-servers",
      },
      {
        label: "Cloud VDS",
        description:
          "Servidores Dedicados Virtuales con aislamiento completo, desde €62.16",
        icon: "https://cdn-icons-png.flaticon.com/128/9292/9292589.png",
        href: "/vds",
      },
    ],
  },
  {
    label: "Social",
    dropdown: [
      {
        label: "Discord",
        icon: "https://svgl.app/library/discord.svg",
        href: "https://discord.com/invite/BwBjEEDzrR",
      },
      {
        label: "Instagram",
        icon: "https://svgl.app/library/instagram.svg",
        href: "https://www.instagram.com/insomma.cloud",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

// TODO: Aregar redes futuras cuando tengamos

/* 
      {
        label: "Tiktok",
        icon: "https://svgl.app/library/tiktok.svg",
        href: "https://tiktok.com/insomma",
      },
      {
        label: "Telegram",
        icon: "https://svgl.app/library/telegram.svg",
        href: "/t.me/invite/insomma",
      },
*/
