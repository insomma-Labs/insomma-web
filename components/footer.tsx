import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground font-inter-sans py-12 px-4 md:px-8 xl:px-40 2xl:px-80">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-20 pb-12">
          <div className="hidden lg:block lg:col-span-2">
            <h3 className="text-foreground font-medium mb-4">Featured</h3>

            <div className="rounded-lg p-5 mb-4 border">
              <h4 className="text-foreground tracking-tight font-normal mb-1">
                New Regions Available
              </h4>
              <p className="text-xs">
                We’ve expanded to new datacenter locations across Europe and the
                U.S. for lower latency and faster performance.
              </p>
            </div>

            <div className="rounded-lg p-5 border">
              <h4 className="text-foreground tracking-tight font-normal mb-1">
                Windows VPS Coming Soon
              </h4>
              <p className="text-xs">
                Stay tuned for our upcoming Windows-based virtual servers with
                full RDP access and high-speed NVMe.
              </p>
            </div>
          </div>

          {/* Main Navigation Grid - Takes 3/4 of space */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 items-center gap-y-12 xs:gap-12 xxs:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="text-foreground font-medium mb-4">Product</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link href="/vps" className="hover:text-blue-600">
                      VPS Hosting
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="/pricing" className="hover:text-blue-600">
                      Pricing
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="/windows-vps" className="hover:text-blue-600">
                      Windows VPS
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="/dedicated-servers"
                      className="hover:text-blue-600"
                    >
                      Dedicated Servers
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-medium mb-4">Support</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link href="/contact" className="hover:text-blue-600">
                      Contact Us
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="https://discord.gg/BwBjEEDzrR"
                      className="hover:text-blue-600"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="https://discord.gg/BwBjEEDzrR"
                      className="hover:text-blue-600"
                    >
                      Ticket System
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="https://discord.gg/BwBjEEDzrR"
                      className="hover:text-blue-600"
                    >
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-medium mb-4">Community</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link
                      href="https://discord.gg/BwBjEEDzrR"
                      className="hover:text-blue-600"
                    >
                      Discord
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-blue-600">
                      Twitter
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="https://instagram.com/insomma.cloud"
                      className="hover:text-blue-600"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="mailto:insomma.cloud@outlook.com"
                      className="hover:text-blue-600"
                    >
                      Email
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Second Row */}
              <div>
                <h3 className="text-foreground font-medium mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link href="/docs" className="hover:text-blue-600">
                      Documentation
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-blue-600">
                      Server Status
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="/blog" className="hover:text-blue-600">
                      Blog
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="/updates" className="hover:text-blue-600">
                      Updates
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-medium mb-4">Company</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link href="/about" className="hover:text-blue-600">
                      About Insomma
                    </Link>
                  </li>

                  <li className="text-sm">
                    <Link href="/team" className="hover:text-blue-600">
                      Join the Team
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="/affiliate" className="hover:text-blue-600">
                      Affiliate Program
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link href="#" className="hover:text-blue-600">
                      Uptime & Trust
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-medium mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <Link
                      href="/acceptable-use-policy"
                      className="hover:text-blue-600"
                    >
                      Acceptable Use Policy
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="/privacy-policy"
                      className="hover:text-blue-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="/terms-of-service"
                      className="hover:text-blue-600"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href="/cookie-settings"
                      className="hover:text-blue-600"
                    >
                      Cookie Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-12 border-t">
          <div className="flex items-center mb-4 md:mb-0">
            <Link
              href="https://discord.gg/BwBjEEDzrR"
              target="_blank"
              className="text-sm text-blue-600 flex items-center gap-2 hover:underline"
            >
              <div className="size-1.5 bg-blue-600 rounded-full"></div>
              Visit our community
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Insomma Cloud. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
