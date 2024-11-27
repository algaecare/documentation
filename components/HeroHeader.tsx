import React from "react";
// bg-customColor dark:bg-customColor-dark text-customColor dark:text-customColor-dark"

export const HeroHeader = () => {
  return (
    <div className="grid gap-8 py-10 mx-auto lg:grid-cols-2 lg:py-40">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-customColor/10 dark:bg-customColor-dark/10 px-3 py-1 text-sm font-semibold text-customColor dark:text-customColor-dark ring-1 ring-inset ring-customColor/10">
          Elaboration Phase
        </span>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-[currentColor] sm:text-7xl">
          Supercharge your Algae Knowledge
        </h1>

        <p className="mt-6 text-lg text-[currentColor]">
          Algae Care is a platform that helps you to grow your algae knowledge.
        </p>

        <div className="mt-10 flex gap-6 items-center">
          <a
            href="/docs/einfuehrung"
            className="rounded-md bg-customColor dark:bg-customColor-dark py-2.5 px-3 text-sm font-semibold text-white dark:text-black hover:bg-customColor/75 hover:dark:bg-customColor-dark/75"
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
