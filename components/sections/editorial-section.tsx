"use client";

import Image from "next/image";

const specs = [
  { label: "Listed Resources", value: "50+" },
  { label: "Categories", value: "6" },
  { label: "Forsyth County Residents", value: "260K" },
  { label: "Cost to Use", value: "Free" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-4xl">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Full-width Image */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src="/images/lake-lanier.jpg"
          alt="Lake Lanier at sunset near Cumming, Georgia"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
