"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { navigationItems } from "@/data/navigation/header-navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  const handleMobileDropdownClick = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="border-b sticky top-0 left-0 z-50">
        <div className="hidden h-8 bg-[#1433d6] font-inter-sans xxs:flex justify-between items-center px-4 md:px-8 xl:px-40">
          <h4 className="text-sm text-primary-foreground font-medium hover:underline">
            🚀 Visit our discord and join the community.
          </h4>

          <ul className="hidden md:flex items-center gap-4">
            <Link
              href="/docs"
              className="text-primary-foreground font-medium text-sm hover:underline"
            >
              Docs
            </Link>
            <Link
              href="https://discord.gg/BwBjEEDzrR"
              target="_blank"
              className="text-primary-foreground font-medium text-sm hover:underline"
            >
              Support
            </Link>
            <Link
              href="https://discord.gg/BwBjEEDzrR"
              target="_blank"
              className="text-primary-foreground font-medium text-sm hover:underline"
            >
              Contact sales
            </Link>
          </ul>
        </div>

        <div className="w-full h-16 bg-background flex items-center px-4 md:px-8 xl:px-40">
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="text-2xl font-medium tracking-tighter">
              insomma.
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden font-inter-sans lg:block">
              <nav className="flex items-center gap-8">
                {navigationItems.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.dropdown ? (
                      <span className="inline-flex items-center gap-1 text-muted-foreground text-sm cursor-pointer hover:text-foreground">
                        {item.label}
                        <ChevronDown className="mt-0.5 size-3 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
                      </span>
                    ) : (
                      <Link
                        href={`${item.href}`}
                        className="inline-flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Desktop Dropdown */}
                    {item.dropdown && (
                      <div
                        className={`${
                          item.wide ? "w-80" : "w-44"
                        } absolute py-2 left-0 z-50 opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-in-out transform`}
                      >
                        <div className="bg-background rounded-lg border overflow-hidden">
                          <div>
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className={`${
                                  dropdownItem.icon ? "flex" : "block"
                                } border-b last:border-none items-center gap-4 px-4 py-3 text-sm hover:bg-accent transition-colors duration-150 ease-in-out`}
                              >
                                {dropdownItem.icon && (
                                  <img
                                    src={dropdownItem.icon}
                                    alt=""
                                    className="size-6"
                                  />
                                )}

                                <div>
                                  <h4 className="font-medium text-foreground text-balance">
                                    {dropdownItem.label}
                                  </h4>

                                  {dropdownItem.description && (
                                    <p className="text-xs text-muted-foreground text-balance mt-1">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="hidden lg:flex items-center">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
                className="font-inter-sans"
              >
                <Link href="https://discord.gg/BwBjEEDzrR">
                  <ShoppingCart className="text-4 mr-1.5" />
                  Store
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="relative lg:hidden">
              <button
                className="relative grid grid-cols-1 py-3 transition-colors duration-200"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div
                  className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0.5"
                      : "rotate-0 -translate-y-1"
                  }`}
                />

                <div
                  className={`w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-0"
                      : "rotate-0 translate-y-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`font-inter-sans fixed inset-x-0 top-16 xxs:top-24 bottom-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-background h-full border-b shadow transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-15"
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Contenido scrolleable */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="grid mb-8">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                  asChild
                  className="mobile-nav-btn h-12"
                >
                  <Link href="/contact">
                    <ShoppingCart />
                    Store
                  </Link>
                </Button>
              </div>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleMobileDropdownClick(item.label)}
                          className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-medium hover:bg-accent transition-all duration-200"
                        >
                          <div className="flex items-center">{item.label}</div>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                              mobileActiveDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown */}
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            mobileActiveDropdown === item.label
                              ? "max-h-[600px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-2 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors duration-150"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="text-foreground font-medium">
                                  {dropdownItem.label}
                                </span>
                                {dropdownItem.description && (
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {dropdownItem.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className="flex items-center px-3 py-3 rounded-lg text-base font-medium hover:bg-accent transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
