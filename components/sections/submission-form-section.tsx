"use client";

import { useState } from "react";
import { Phone, AlertCircle } from "lucide-react";

type FormData = {
  organizationName: string;
  category: string;
  description: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  submittedBy: string;
};

const emptyForm: FormData = {
  organizationName: "",
  category: "",
  description: "",
  phone: "",
  email: "",
  website: "",
  address: "",
  submittedBy: "",
};

const emergencyContacts = [
  { label: "Emergency (Police / Fire / Medical)", phone: "911" },
  { label: "Forsyth County Sheriff (non-emergency)", phone: "(770) 781-2222" },
  { label: "Family Haven 24-hour Crisis Line", phone: "(770) 887-1121" },
  { label: "Georgia Crisis & Access Line", phone: "(800) 715-4225" },
  { label: "The Place of Forsyth County", phone: "(770) 887-1098" },
];

export function SubmissionFormSection() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData(emptyForm);
      setSubmitted(false);
    }, 3500);
  };

  return (
    <section id="submit" className="bg-background">
      {/* Emergency Contacts Strip */}
      <div className="border-t border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-3 md:max-w-xs">
              <AlertCircle
                className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Need help right now?
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  If you or someone you know is in immediate danger, call 911.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:flex-1 md:max-w-2xl">
              {emergencyContacts.map((c) => (
                <li key={c.label} className="flex items-center gap-3 text-sm">
                  <Phone
                    className="h-4 w-4 text-muted-foreground flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground flex-1 truncate">
                    {c.label}
                  </span>
                  <a
                    href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
                    className="font-medium text-foreground hover:underline flex-shrink-0"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Submit
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          Know a resource we missed?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm text-muted-foreground leading-relaxed">
          Tell us about a nonprofit, program, or service that serves Cumming
          and Forsyth County. We&apos;ll verify it and add it to the directory.
        </p>
      </div>

      {/* Form */}
      <div className="px-6 pb-28 md:px-12 md:pb-36 lg:px-20 lg:pb-44">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-border bg-secondary px-8 py-16 text-center">
              <p className="text-lg font-medium text-foreground">
                Thanks for the tip.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our volunteers will review your submission and add verified
                resources to the directory within a few days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Organization name *
                </label>
                <input
                  id="organizationName"
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                  placeholder="e.g. Forsyth County Meals on Wheels"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Recreation">Recreation</option>
                  <option value="Food & Housing">Food & Housing</option>
                  <option value="Safety & Support">Safety & Support</option>
                  <option value="Seniors">Seniors</option>
                  <option value="Youth Services">Youth Services</option>
                  <option value="Support Services">Support Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  What do they do? *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors resize-none"
                  placeholder="A couple of sentences about who they help and how."
                />
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                    placeholder="(770) 555-0123"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                    placeholder="contact@organization.org"
                  />
                </div>
              </div>

              {/* Website and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Website
                  </label>
                  <input
                    id="website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                    placeholder="123 Main St, Cumming, GA 30040"
                  />
                </div>
              </div>

              {/* Submitted by */}
              <div>
                <label
                  htmlFor="submittedBy"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your name (optional)
                </label>
                <input
                  id="submittedBy"
                  type="text"
                  name="submittedBy"
                  value={formData.submittedBy}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
                  placeholder="So we can thank you"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-3 pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  Submit resource
                </button>
                <p className="text-xs text-muted-foreground">
                  We review every submission before it goes live.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
