"use client";
import Link from "next/link";
import { NavigationLinks, navigationLinks } from "./navigation";
import { usePathname } from "next/navigation";

const ACTIVE_STYLE =
  "after:block after:w-full after:h-[2px] after:bg-white cursor-default";
const HOVER_STYLE =
  "after:duration-200 transition-all after:block after:w-full after:scale-x-0 after:hover:scale-x-100 after:h-[2px] after:bg-white";

const NavigationLink = ({
  isOnPage,
  l,
}: {
  isOnPage: boolean;
  l: NavigationLinks;
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
    >
      {l.label_ID}
    </Link>
  );
};

export default function NavigationBar() {
  const pathName = usePathname();
  return (
    <div className="w-full h-8 text-white fixed top-0 left-0 px-4 pt-4 pb-8 z-50 bg-blue-900">
      <div className="flex justify-between">
        <h1>Muhamad Aqil Maulana</h1>
        <div className="flex gap-4">
          {navigationLinks.map((l) => {
            const isOnPage = pathName === l.url;

            return <NavigationLink key={l.url} isOnPage={isOnPage} l={l} />;
          })}
        </div>
      </div>
    </div>
  );
}
