import React from "react";
import { useThemeConfig } from "nextra-theme-docs";

export const HeroHeader = () => {
  return (
    <div className="grid gap-8 px-6 py-10 mx-auto lg:grid-cols-2 lg:px-8 lg:py-40">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-lime-600/10 px-3 py-1 text-sm font-semibold text-lime-600 ring-1 ring-inset ring-lime-600/10">
          Elaboration Phase
        </span>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-[currentColor] sm:text-7xl">
          Supercharge your Algae Knowledge
        </h1>

        <p className="mt-6 text-lg text-[currentColor]">
          Algae Care is a platform that helps you to grow your algae knowledge.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="/docs/introduction"
            className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-lime-500"
          >
            Documentation
          </a>
          <a
            href="https://gitlab.fhnw.ch/ip12-24vt/ip12-24vt_algae_care"
            className="text-sm font-semibold text-[currentColor]"
          >
            View on GitLab →
          </a>
        </div>
      </div>

      <img
        src="https://plus.unsplash.com/premium_photo-1661391809574-bb92749f8286?q=80&w=2972&auto=format&fit=crop"
        alt="Algae visualization"
        className="aspect-auto object-cover rounded-3xl shadow-lg"
      />
    </div>
  );
};
