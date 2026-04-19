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
  // Healthcare
  {
    id: 1,
    name: "Northside Hospital Forsyth",
    category: "Healthcare",
    description: "Full-service hospital with emergency care, maternity, cancer, and surgical services for Forsyth County residents.",
    phone: "(770) 844-3200",
    address: "1200 Northside Forsyth Dr, Cumming, GA 30041",
    image: "/images/cumming-hospital.png",
  },
  {
    id: 2,
    name: "Forsyth County Health Department",
    category: "Healthcare",
    description: "Immunizations, WIC nutrition program, family planning, STD testing, and environmental health services.",
    phone: "(770) 781-6900",
    address: "428 S Main St, Cumming, GA 30040",
    image: "/images/cumming-health-wellness.png",
  },
  {
    id: 3,
    name: "Good Samaritan Health Center of Forsyth",
    category: "Healthcare",
    description: "Affordable primary care, dental services, and prescription assistance for uninsured and underinsured residents.",
    phone: "(678) 807-8760",
    address: "1140 Dahlonega Hwy, Cumming, GA 30040",
    image: "/images/good-samaritan-cumming.png",
  },
  {
    id: 4,
    name: "WellStar Urgent Care Cumming",
    category: "Healthcare",
    description: "Walk-in urgent care for non-emergency illnesses and injuries, X-rays, and lab services.",
    phone: "(470) 956-5970",
    address: "410 Peachtree Pkwy, Cumming, GA 30041",
    image: "/images/wellstar-urgent-care.png",
  },
  // Education
  {
    id: 5,
    name: "Forsyth County Public Library",
    category: "Education",
    description: "Free books, computer access, kids programs, tutoring, and lifelong-learning classes across four county branches.",
    phone: "(770) 781-9840",
    address: "585 Dahlonega Hwy, Cumming, GA 30040",
    image: "/images/cumming-library.png",
  },
  {
    id: 6,
    name: "Forsyth County Schools",
    category: "Education",
    description: "Public school system serving 55,000+ students with award-winning academics, athletics, and arts programs.",
    phone: "(770) 887-2461",
    address: "1120 Dahlonega Hwy, Cumming, GA 30040",
    image: "/images/forsyth-county-schools.png",
  },
  {
    id: 7,
    name: "Lanier Technical College - Forsyth Campus",
    category: "Education",
    description: "Career and technical education, GED prep, workforce development, and associate degree programs.",
    phone: "(770) 533-7000",
    address: "3410 Ronald Reagan Blvd, Cumming, GA 30041",
    image: "/images/lanier-tech-forsyth.png",
  },
  {
    id: 8,
    name: "University of North Georgia - Cumming Campus",
    category: "Education",
    description: "Four-year university offering bachelor's degrees, nursing programs, and continuing education.",
    phone: "(706) 864-1400",
    address: "300 Aquatic Cir, Cumming, GA 30040",
    image: "/images/ung-cumming-campus.png",
  },
  // Recreation
  {
    id: 9,
    name: "Forsyth County Parks & Recreation",
    category: "Recreation",
    description: "Youth sports, adult leagues, fitness classes, aquatics, and over 20 parks including Central Park and Fowler Park.",
    phone: "(770) 781-2215",
    address: "5670 Windermere Pkwy, Cumming, GA 30041",
    image: "/images/forsyth-county-parks.png",
  },
  {
    id: 10,
    name: "Sawnee Mountain Preserve",
    category: "Recreation",
    description: "963-acre nature preserve with hiking trails, visitor center, and the Indian Seats overlook at 1,946 feet.",
    phone: "(770) 781-2217",
    address: "4075 Spot Rd, Cumming, GA 30040",
    image: "/images/sawnee-mountain.png",
  },
  {
    id: 11,
    name: "Big Creek Greenway",
    category: "Recreation",
    description: "20+ mile paved multi-use trail for walking, running, and cycling connecting Forsyth to Alpharetta.",
    phone: "(770) 781-2215",
    address: "2285 Pilgrim Mill Rd, Cumming, GA 30041",
    image: "/images/big-creek-trailhead.png",
  },
  {
    id: 12,
    name: "Lake Lanier",
    category: "Recreation",
    description: "38,000-acre reservoir offering boating, fishing, swimming, camping, and water sports.",
    phone: "",
    address: "Various access points in Forsyth County",
    image: "/images/lake-lanier.png",
  },
  {
    id: 13,
    name: "Cumming Aquatic Center",
    category: "Recreation",
    description: "Olympic-sized pool, leisure pool, splash pad, water slides, swim lessons, and lap swimming.",
    phone: "(770) 781-2220",
    address: "201 Aquatic Cir, Cumming, GA 30040",
    image: "/images/lake-lanier-sailing.png",
  },
  // Food & Housing
  {
    id: 14,
    name: "The Place of Forsyth County",
    category: "Food & Housing",
    description: "Food pantry, thrift stores, financial assistance, and holiday support for neighbors facing hardship.",
    phone: "(770) 887-1098",
    address: "2550 The Place Circle, Cumming, GA 30040",
    image: "/images/cumming-food-pantry.png",
  },
  {
    id: 15,
    name: "HOPE Forsyth",
    category: "Food & Housing",
    description: "Emergency rent and utility assistance, case management, and financial counseling for families in crisis.",
    phone: "(678) 341-4473",
    address: "Serving all of Forsyth County",
    image: "/images/hope-forsyth-office.png",
  },
  {
    id: 16,
    name: "North Georgia Community Food Bank",
    category: "Food & Housing",
    description: "Mobile food pantry distributions, senior food boxes, and backpack programs for children.",
    phone: "(770) 725-9035",
    address: "Multiple locations in Forsyth County",
    image: "/images/ng-food-bank-warehouse.png",
  },
  {
    id: 17,
    name: "Meals on Wheels of Forsyth County",
    category: "Food & Housing",
    description: "Home-delivered nutritious meals and wellness checks for homebound seniors and disabled adults.",
    phone: "(770) 781-2198",
    address: "Serving all of Forsyth County",
    image: "/images/meals-on-wheels-forsyth.png",
  },
  {
    id: 18,
    name: "Habitat for Humanity - Forsyth County",
    category: "Food & Housing",
    description: "Affordable homeownership, critical home repairs, and ReStore thrift store supporting housing initiatives.",
    phone: "(770) 205-0000",
    address: "2170 Keith Bridge Rd, Cumming, GA 30040",
    image: "/images/habitat-forsyth-progress.png",
  },
  // Safety & Support
  {
    id: 19,
    name: "Family Haven of Forsyth County",
    category: "Safety & Support",
    description: "24-hour crisis shelter, counseling, and advocacy for survivors of domestic violence and sexual assault.",
    phone: "(770) 887-1121",
    address: "212 Webb St, Cumming, GA 30040",
    image: "/images/cumming-family-haven.png",
  },
  {
    id: 20,
    name: "Forsyth County Sheriff's Office",
    category: "Safety & Support",
    description: "Law enforcement, emergency response, and community safety programs for all Forsyth County residents.",
    phone: "(770) 781-2222",
    address: "100 Courthouse Sq, Cumming, GA 30040",
    image: "/images/sheriff-car-community.png",
  },
  {
    id: 21,
    name: "Georgia Crisis & Access Line (GCAL)",
    category: "Safety & Support",
    description: "24/7 free and confidential access to mental health, substance abuse, and IDD crisis services.",
    phone: "1-800-715-4225",
    address: "Phone Service / Statewide",
    image: "/images/gcal-crisis-center.png",
  },
  {
    id: 22,
    name: "988 Suicide & Crisis Lifeline",
    category: "Safety & Support",
    description: "Immediate support for anyone in emotional distress or considering suicide. Available 24/7 via call or text.",
    phone: "988",
    address: "National Hotline",
    image: "/images/988-prevention-center.png",
  },
  {
    id: 23,
    name: "RAINN (Sexual Assault Hotline)",
    category: "Safety & Support",
    description: "National network providing confidential support for survivors of sexual assault and their loved ones.",
    phone: "1-800-656-HOPE",
    address: "National Hotline",
    image: "/images/rainn-support-office.png",
  },
  // Seniors
  {
    id: 24,
    name: "Forsyth County Senior Services",
    category: "Seniors",
    description: "Senior center programs, meal deliveries, transportation, and wellness activities for adults 55 and older.",
    phone: "(770) 781-2178",
    address: "595 Dahlonega St, Cumming, GA 30040",
    image: "/images/cumming-senior-center.png",
  },
  {
    id: 25,
    name: "Empowerline (Aging Services)",
    category: "Seniors",
    description: "The gateway to information and services for older adults and individuals with disabilities in North Georgia.",
    phone: "(404) 463-3333",
    address: "Regional Service",
    image: "/images/senior-wellness-yoga.png",
  },
  {
    id: 26,
    name: "Elder Law of Georgia",
    category: "Seniors",
    description: "Legal assistance specializing in estate planning, Medicaid, and rights for older Forsyth County residents.",
    phone: "(770) 889-1111",
    address: "Serving Forsyth County",
    image: "/images/elder-law-exterior.png",
  },
  {
    id: 27,
    name: "Georgia DHS Division of Aging Services",
    category: "Seniors",
    description: "State-level advocacy and services to help older Georgians live longer, safer, and more independently.",
    phone: "1-866-552-4464",
    address: "Statewide / Phone Service",
    image: "/images/empowerline-staff.png",
  },
  // Youth Services
  {
    id: 28,
    name: "Bald Ridge Lodge",
    category: "Youth Services",
    description: "Stabilization and residential home for boys and young men facing difficult life circumstances.",
    phone: "(770) 887-8419",
    address: "P.O. Box 1925, Cumming, GA 30028",
    image: "/images/bald-ridge-lodge.png",
  },
  {
    id: 29,
    name: "Forsyth County Child Advocacy Center",
    category: "Youth Services",
    description: "Providing a safe place for children who have been victims of abuse to receive healing and support.",
    phone: "(678) 513-5246",
    address: "100 Sawnee Dr, Cumming, GA 30040",
    image: "/images/child-advocacy-entrance.png",
  },
  {
    id: 30,
    name: "DFCS Forsyth County",
    category: "Youth Services",
    description: "Child protective services, foster care, and economic assistance programs like SNAP and Medicaid.",
    phone: "(770) 781-6700",
    address: "426 Canton Rd, Cumming, GA 30040",
    image: "/images/dfcs-office-front.png",
  },
  {
    id: 31,
    name: "CASA of Forsyth County",
    category: "Youth Services",
    description: "Court Appointed Special Advocates who advocate for the best interests of children in foster care.",
    phone: "(678) 513-5246",
    address: "100 Sawnee Dr, Cumming, GA 30040",
    image: "/images/casa-forsyth.png",
  },
  // Support Services
  {
    id: 32,
    name: "Forsyth County Community Connection",
    category: "Support Services",
    description: "Central referral network linking residents to food, housing, healthcare, and financial assistance providers.",
    phone: "(404) 985-7796",
    address: "Serving all of Forsyth County",
    image: "/images/community-connection-meeting.png",
  },
  {
    id: 33,
    name: "United Way of Forsyth County",
    category: "Support Services",
    description: "Mobilizing local resources to improve lives and address critical needs across the community.",
    phone: "(770) 881-4110",
    address: "2400 Lakeview Pkwy, Alpharetta, GA 30009",
    image: "/images/united-way-impact.png",
  },
  {
    id: 34,
    name: "The Salvation Army - Forsyth County",
    category: "Support Services",
    description: "Emergency financial aid, seasonal assistance, and spiritual support for neighbors in need.",
    phone: "(770) 781-9556",
    address: "Serving Forsyth County",
    image: "/images/salvation-army-forsyth.png",
  },
  {
    id: 35,
    name: "Saint Vincent de Paul Society - Cumming",
    category: "Support Services",
    description: "Direct assistance with rent, utilities, and basic necessities for families facing temporary hardship.",
    phone: "(678) 947-0677",
    address: "805 Dahlonega Hwy, Cumming, GA 30040",
    image: "/images/svdp-thrift-cumming.png",
  },
  // Government
  {
    id: 36,
    name: "City of Cumming",
    category: "Government",
    description: "Main office for city administration, utilities, planning, and municipal services.",
    phone: "(770) 781-2000",
    address: "100 Main St, Cumming, GA 30040",
    image: "/images/cumming-city-center.png",
  },
  {
    id: 37,
    name: "Forsyth County Government",
    category: "Government",
    description: "Administrative headquarters for county services, commissioners, and public records.",
    phone: "(770) 781-2101",
    address: "110 E Main St, Cumming, GA 30040",
    image: "/images/forsyth-admin-building.png",
  },
  {
    id: 38,
    name: "Georgia Department of Labor - Cumming",
    category: "Government",
    description: "Job seeker services, unemployment insurance claims, and employer support.",
    phone: "(770) 781-6700",
    address: "Phone / Online Service",
    image: "/images/ga-dept-labor.png",
  },
  {
    id: 39,
    name: "Social Security Administration",
    category: "Government",
    description: "Federal agency managing retirement, disability, and survivor benefits for Forsyth County.",
    phone: "(800) 772-1213",
    address: "1100 Northside Forsyth Dr, Cumming, GA 30041",
    image: "/images/social-security-cumming.png",
  },
  // Mental Health
  {
    id: 40,
    name: "Forsyth County Mental Health Center",
    category: "Mental Health",
    description: "Outpatient psychiatric services, counseling, and addiction support provided by Avita Community Partners.",
    phone: "(770) 781-6900",
    address: "428 S Main St, Cumming, GA 30040",
    image: "/images/avita-mental-health.png",
  },
  {
    id: 41,
    name: "NAMI Forsyth",
    category: "Mental Health",
    description: "Free peer-led support groups and education for individuals living with mental illness and their families.",
    phone: "(770) 232-1362",
    address: "Serving Forsyth County",
    image: "/images/nami-support-group.png",
  },
  {
    id: 42,
    name: "Willowbrooke at Tanner - Cumming",
    category: "Mental Health",
    description: "Comprehensive behavioral health services offering inpatient and outpatient treatment for all ages.",
    phone: "(770) 812-3266",
    address: "Serving Forsyth County",
    image: "/images/willowbrooke-health.png",
  },
  // Employment
  {
    id: 43,
    name: "Forsyth County Workforce Development",
    category: "Employment",
    description: "Connecting residents with career training, job coaching, and local employment opportunities.",
    phone: "(770) 781-2101",
    address: "110 E Main St, Cumming, GA 30040",
    image: "/images/workforce-job-fair.png",
  },
  {
    id: 44,
    name: "Goodwill Career Center - Cumming",
    category: "Employment",
    description: "Free job search assistance, resume workshops, and skills training for anyone looking for work.",
    phone: "(770) 205-2936",
    address: "91 Catoma Dr, Cumming, GA 30040",
    image: "/images/goodwill-training-room.png",
  },
  {
    id: 45,
    name: "Georgia Vocational Rehabilitation Agency",
    category: "Employment",
    description: "Helping Georgians with disabilities find and maintain meaningful employment.",
    phone: "(770) 535-5420",
    address: "Regional Service",
    image: "/images/vocational-rehab-office.png",
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
  "Government",
  "Mental Health",
  "Employment",
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
                  {resource.phone && (
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                      <a href={`tel:${resource.phone}`} className="hover:underline">
                        {resource.phone}
                      </a>
                    </div>
                  )}
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
                  {resource.phone && (
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                      <a href={`tel:${resource.phone}`} className="hover:underline">
                        {resource.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{resource.address}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
