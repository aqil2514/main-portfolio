import Image from "next/image";
import Link from "next/link";

const sosmedIcon: GenType.Icon[] = [
  {
    name: "Facebook",
    id: "ic-fb",
    alt: "Facebook Icon",
    src: "/images/Icons/facebook.webp",
    link: "https://www.facebook.com/muhammadaqil2514",
  },
  {
    name: "Github",
    id: "ic-git",
    alt: "Github Icon",
    src: "/images/Icons/github.webp",
    link: "https://github.com/aqil2514/",
  },
  {
    name: "Instagram",
    id: "ic-ins",
    alt: "Instagram Icon",
    src: "/images/Icons/instagram.webp",
    link: "https://www.instagram.com/aqil.co.id/",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-4 my-4">
      {sosmedIcon.map((sosmed) => (
        <div className="relative z-10 w-16 h-16" key={sosmed.id}>
          <Link href={sosmed.link as string} target="_blank">
            <Image alt={sosmed.alt} fill src={sosmed.src} className="contrast-0 hover:contrast-100 duration-100" />
          </Link>
        </div>
      ))}
    </div>
  );
}
