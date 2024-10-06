import Link from "next/link";
import "./Button_CTA.css";

export default function Button_CTA() {
  return (
    <Link href={"/profile"} replace>
    <button className="animated-button block mx-auto">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Tentang Saya
    </button>
    </Link>
  );
}
