"use client";

import React from "react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type Testimonial = {
  text: string;
  name: string;
  role?: string;
  image?: string;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration ?? 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                {props.testimonials.map(({ text, image, name, role }, i) => (
                  <div
                    className="p-6 rounded-xl border border-border shadow-lg shadow-primary/10 max-w-xs w-full bg-card"
                    key={`${index}-${i}`}
                  >
                    <p className="text-neutral-700 font-serif text-sm leading-relaxed">
                      {text}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <Avatar className="h-10 w-10 rounded-full border border-border">
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback
                          className={cn(
                            "bg-brand-primary/10 text-brand-primary text-sm font-medium"
                          )}
                        >
                          {getInitials(name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-neutral-900 truncate text-sm">
                          {name}
                        </span>
                        {role && (
                          <span className="text-xs text-neutral-500 truncate">
                            {role}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            )),
        ]}
      </motion.div>
    </div>
  );
}
