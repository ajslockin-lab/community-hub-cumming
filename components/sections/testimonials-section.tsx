"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            About Cumming Connects
          </p>
          <p className="mt-8 text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug text-pretty">
            &ldquo;Every town has the help it needs &mdash; it&apos;s just often
            hidden behind three phone calls and a PDF from 2014. We built Cumming
            Connects so one mom, one caregiver, one neighbor can find the right
            door on the first try.&rdquo;
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            &mdash; A small group of Forsyth County residents and volunteers
          </p>
        </div>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/community-connection.jpg"
          alt="Forsyth County Community Connection referral center"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
