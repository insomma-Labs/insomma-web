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
    label: "Team",
    href: "/team",
  },
  {
    label: "VPS",
    wide: true,
    dropdown: [
      {
        label: "Cloud VPS",
        description: "Virtual private servers with fast NVMe, from €7.97",
        icon: "https://cdn-icons-png.flaticon.com/512/4663/4663391.png",
        href: "/vps",
      },
      {
        label: "Windows VPS",
        description:
          "Windows environments optimized for software (coming soon)",
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
        label: "Dedicated Servers",
        description:
          "Raw power. Bare Metal hardware with 100% dedicated resources (coming soon)",
        icon: "https://cdn-icons-png.flaticon.com/512/6595/6595988.png",
        href: "/dedicated-servers",
      },
      {
        label: "Cloud VDS",
        description:
          "Virtual Dedicated Servers with full isolation, from €59.05",
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
        icon: "https://imgs.search.brave.com/nM9dtTWh5MJITWjadxAT5P6iD-359PV3LdSxwboTMO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzk2/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw",
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
