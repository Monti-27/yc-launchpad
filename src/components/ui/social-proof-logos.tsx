import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  logoPath: string;
}

const companies: Logo[] = [
  { name: "Stripe", logoPath: "/icons/brandbird-Stripe-logotype.svg" },
  { name: "Dropbox", logoPath: "/icons/brandbird-Dropbox-logotype.svg" },
  { name: "Notion", logoPath: "/icons/brandbird-Notion-logotype.svg" },
  { name: "Netflix", logoPath: "/icons/brandbird-Netflix-logotype.svg" },
  { name: "Coinbase", logoPath: "/icons/brandbird-Coinbase-logotype.svg" },
  { name: "Amazon", logoPath: "/icons/brandbird-Amazon-logotype.svg" },
  { name: "Discord", logoPath: "/icons/brandbird-Discord-logotype.svg" },
  { name: "Firebase", logoPath: "/icons/brandbird-Firebase-logotype.svg" },
];

export function SocialProofLogos() {
  const allLogos = [...companies, ...companies];

  return (
    <section className="relative z-20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
            Trusted by founders from companies like
          </p>
        </div>

        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll group-hover:[animation-play-state:paused]">
            {allLogos.map((company, index) => (
              <li key={index}>
                <img src={company.logoPath} alt={company.name} className="h-12 opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 