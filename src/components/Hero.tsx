import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-black font-montserrat">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-primary/20">
        <div className="mx-auto max-w-7xl min-h-screen pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <Logo />
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                  Supercharge your Algae Knowledge
                </h1>
                {/* <p className="mt-6 text-lg/8 text-white">
                  Algae Care is a platform that helps you to grow your algae
                  knowledge.
                </p> */}
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/docu/einfuehrung"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Documentation
                  </a>
                  <a
                    href="https://gitlab.fhnw.ch/ip12-24vt/ip12-24vt_algae_care"
                    className="text-sm/6 font-semibold text-primary"
                  >
                    View on GitLab <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-black ring-1 shadow-xl shadow-primary/10 ring-primary md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-primary [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-primary opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            AlgaeCare.java
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            Gamification.java
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        {/* Your code example */}
                        <pre className="text-sm text-gray-400">
                          <code className="text-white">
                            {`package algaeCare;

import algaeCare.gamification.Gamification;

public class AlgaeCare {
    public static void main(String[] args) {
        Gamification gamification = new Gamification();
        gamification.start();
        System.out.println("Welcome to Algae Care!");
        System.out.println("Your algae knowledge is about to be supercharged!");
        System.out.println("Let's get started!");
        System.out.println("Algae Care is a platform that helps you to grow your algae knowledge.");
        System.out.println("You can learn about different types of algae, their habitats, and their uses.");
    }
}`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
