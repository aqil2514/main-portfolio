import Link from "next/link";
import { navigationLinks } from "./navigation";
import ParticlesAnimation from "@/components/HeroSection/Particles";

export default function NavigationBar() {
  return (
    <div>
      <div className="w-full h-8 text-white fixed top-0 left-0 p-4 z-20">
        <div className="flex justify-between">
          <h1>Muhamad Aqil Maulana</h1>
          <div className="flex gap-4">
            {navigationLinks.map((l) => (
              <Link key={l.url} href={l.url}>
                {l.label_ID}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
