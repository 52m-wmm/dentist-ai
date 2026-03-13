import React from "react";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { Calendar, MicIcon } from "lucide-react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Grid background */}
      <div
        className="absolute inset-0
          bg-[linear-gradient(to_right,#93c5fd_1px,transparent_1px),linear-gradient(to_bottom,#93c5fd_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-40"
      />

      <div className="relative z-10 w-full px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              {/* BADGE */}
              <div
                className="inline-flex items-center gap-2 rounded-full border border-primary/20
                  bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-1 backdrop-blur-sm"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">
                  AI-Powered Dentist Assistant
                </span>
              </div>

              {/* MAIN HEADING */}
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  questions
                </span>
                <br />
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  answered instantly
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="max-w-xl text-md font-medium leading-relaxed text-muted-foreground">
                Chat with our AI dental assistant for instant advice, book smart
                appointments, and get personalized care recommendations.
                Available 24/7.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <SignUpButton mode="modal">
                  <Button size="lg">
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="secondary">
                    <Calendar className="mr-2 size-5" />
                    Book Appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* AVATARS + RATING (A: left avatars, right rating) */}
              <div className="flex items-start gap-6 pt-8">
                {/* USER IMAGES */}
                <div className="flex -space-x-3">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                    alt="Jessica Davis"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="Sam Miller"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                    alt="Anna Lopez"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                    alt="Mike Rodriguez"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                    alt="Katie Lee"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                  />
                </div>

                {/* RATING AND STATS */}
                <div className="space-y-1 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      4.9/5
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Trusted by{" "}
                    <span className="font-semibold text-foreground">
                      1,200+ patients
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative lg:pl-8">
              {/* GRADIENT ORBS */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rotate-45 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 blur-xl" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 blur-2xl" />

              <Image
                src="/hero.png"
                alt="DentWise AI"
                width={600}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;