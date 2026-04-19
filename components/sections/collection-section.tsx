"use client";

import { useState } from "react";
import { FadeImage } from "@/components/fade-image";
import { Phone, MapPin } from "lucide-react";

type Resource = {
  id: number;
  name: string;
  category: string;
  description: string;
  phone: string;
  address: string;
  image: string;
};

const resources: Resource[] = [
  {
    id: 1,
    name: "Northside Hospital Forsyth",
    category: "Healthcare",
    description:
      "Full-service hospital with emergency care, maternity, cancer, and surgical services for Forsyth County residents.",
    phone: "(770) 844-3200",
    address: "1200 Northside Forsyth Dr, Cumming, GA 30041",
    image: "/images/cumming-hospital.jpg",
  },
  {
    id: 2,
    name: "Forsyth County Public Library",
    category: "Education",
    description:
      "Free books, computer access, kids programs, tutoring, and lifelong-learning classes across four county branches.",
    phone: "(770) 781-9840",
    address: "585 Dahlonega Hwy, Cumming, GA 30040",
    image: "/images/cumming-library.jpg",
  },
  {
    id: 3,
    name: "Forsyth County Parks & Recreation",
    category: "Recreation",
    description:
      "Youth sports, adult leagues, fitness classes, aquatics, and over 20 parks including Central Park and Fowler Park.",
    phone: "(770) 781-2215",
    address: "5670 Windermere Pkwy, Cumming, GA 30041",
    image: "/images/cumming-parks.jpg",
  },
  {
    id: 4,
    name: "The Place of Forsyth County",
    category: "Food & Housing",
    description:
      "Food pantry, thrift stores, financial assistance, and holiday support for neighbors facing hardship.",
    phone: "(770) 887-1098",
    address: "2550 The Place Circle, Cumming, GA 30040",
    image: "/images/cumming-food-pantry.jpg",
  },
  {
    id: 5,
    name: "Family Haven of Forsyth County",
    category: "Safety & Support",
    description:
      "24-hour crisis shelter, counseling, and advocacy for survivors of domestic violence and sexual assault.",
    phone: "(770) 887-1121",
    address: "212 Webb St, Cumming, GA 30040",
    image: "/images/cumming-family-haven.jpg",
  },
  {
    id: 6,
    name: "Forsyth County Senior Services",
    category: "Seniors",
    description:
      "Senior center programs, meal deliveries, transportation, and wellness activities for adults 55 and older.",
    phone: "(770) 781-2178",
    address: "595 Dahlonega St, Cumming, GA 30040",
    image: "/images/cumming-senior-center.jpg",
  },
  {
    id: 7,
    name: "Sawnee Mountain Preserve",
    category: "Recreation",
    description:
      "963-acre nature preserve with hiking trails, visitor center, and the Indian Seats overlook at 1,946 feet.",
    phone: "(770) 781-2217",
    address: "4075 Spot Rd, Cumming, GA 30040",
    image: "/images/sawnee-mountain.jpg",
  },
  {
    id: 8,
    name: "Bald Ridge Lodge",
    category: "Youth Services",
    description:
      "Residential home, mentoring, and life-skills programs for boys and young men facing difficult circumstances.",
    phone: "(770) 887-8419",
    address: "P.O. Box 1925, Cumming, GA 30028",
    image: "/images/bald-ridge-lodge.jpg",
  },
  {
    id: 9,
    name: "Forsyth County Community Connection",
    category: "Support Services",
    description:
      "Central referral network linking residents to food, housing, healthcare, and financial assistance providers.",
    phone: "(404) 985-7796",
    address: "Serving all of Forsyth County",
    image: "/images/community-connection.jpg",
  },
];

const categories = [
  "All",
  "Healthcare",
  "Education",
  "Recreation",
  "Food & Housing",
  "Safety & Support",
  "Seniors",
  "Youth Services",
  "Support Services",
];

export function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <section id="directory" className="bg-background">
      {/* Section Title */}
      <div className="px-6 pt-20 pb-8 md:px-12 lg:px-20 md:pt-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Directory
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Real organizations.
              <br />
              Real phone numbers.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">
            A growing list of vetted community resources serving Cumming and
            all of Forsyth County.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="pb-24 pt-6">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {filtered.map((resource) => (
            <article
              key={resource.id}
              className="group flex-shrink-0 w-[80vw] snap-center"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="backdrop-blur-md px-3 py-1 text-xs font-medium rounded-full bg-[rgba(255,255,255,0.85)] text-foreground">
                    {resource.category}
                  </span>
                </div>
              </div>

              <div className="py-6">
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {resource.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                    <a href={`tel:${resource.phone}`} className="hover:underline">
                      {resource.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{resource.address}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {filtered.map((resource) => (
            <article key={resource.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="backdrop-blur-md px-3 py-1 text-xs font-medium rounded-full bg-[rgba(255,255,255,0.85)] text-foreground">
                    {resource.category}
                  </span>
                </div>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-medium leading-snug text-foreground">
                  {resource.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
                <div className="mt-5 space-y-2 border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                    <a href={`tel:${resource.phone}`} className="hover:underline">
                      {resource.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{resource.address}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="px-6 py-20 text-center md:px-12 lg:px-20">
            <p className="text-muted-foreground">
              No resources in this category yet. Know one? Submit it below.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
