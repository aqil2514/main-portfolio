"use client";
import Link from "next/link";
import { NavigationLinks, navigationLinks } from "./navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menggunakan ikon untuk hamburger menu

const ACTIVE_STYLE =
  "after:block after:w-full after:h-[2px] after:bg-white cursor-default";
const HOVER_STYLE =
  "after:duration-200 transition-all after:block after:w-full after:scale-x-0 after:hover:scale-x-100 after:h-[2px] after:bg-white";

const NavigationLink = ({
  isOnPage,
  l,
  onClick,
}: {
  isOnPage: boolean;
  l: NavigationLinks;
  onClick?: () => void;
}) => {
  if (isOnPage) {
    return (
      <p key={l.url} className={ACTIVE_STYLE}>
        {l.label_ID}
      </p>
    );
  }

  return (
    <Link
      key={l.url}
      href={l.url}
      className={isOnPage ? ACTIVE_STYLE : HOVER_STYLE}
      onClick={onClick}
    >
      {l.label_ID}
    </Link>
  );
};

export default function NavigationBar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full text-white fixed top-0 left-0 z-50 bg-blue-900">
      <div className="flex justify-between items-center px-4 pt-4 pb-4">
        <Link href="/">
          <h1>Muhamad Aqil Maulana</h1>
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        <div className="hidden md:flex gap-4">
          {navigationLinks.map((l) => {
            const isOnPage = pathName === l.url;

            return <NavigationLink key={l.url} isOnPage={isOnPage} l={l} />;
          })}
        </div>
      </div>

      {/* Menu untuk layar kecil */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {navigationLinks.map((l) => {
            const isOnPage = pathName === l.url;

            return (
              <NavigationLink
                key={l.url}
                isOnPage={isOnPage}
                l={l}
                onClick={toggleMenu} // Menutup menu setelah link diklik
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
