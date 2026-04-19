"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Spotlight", href: "#resources" },
    { label: "Categories", href: "#categories" },
    { label: "Directory", href: "#directory" },
    { label: "Submit a Resource", href: "#submit" },
  ],
  community: [
    { label: "Cumming City Hall", href: "https://www.cummingga.gov" },
    { label: "Forsyth County Gov", href: "https://www.forsythco.com" },
    { label: "Chamber of Commerce", href: "https://www.cummingforsythchamber.org" },
    { label: "United Way of Forsyth", href: "https://www.forsythunitedway.org" },
  ],
  support: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "mailto:hello@cummingconnects.org" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-medium text-foreground">
              CUMMING CONNECTS
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A neighbor-built directory of community resources serving Cumming
              and Forsyth County, Georgia.
            </p>
            <p className="mt-4 max-w-xs text-xs text-muted-foreground">
              Cumming, GA 30040
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Cumming Connects. All rights reserved. Serving Forsyth County, Georgia.
          </p>

          

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
