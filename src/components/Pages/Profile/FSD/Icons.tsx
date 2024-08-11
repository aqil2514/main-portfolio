import Image from "next/image";
import { icons } from "./misc";
import styles from "../profile.module.css"; // Ganti dengan CSS Module jika digunakan


export default function Icons() {
  return (
    <div className="flex gap-4 flex-wrap max-h-[400px]">
      {icons.map((i) => (
        <figure key={i.id} className={`w-20 h-20 flex flex-col justify-center items-center my-2 gap-2 ${styles.fadeIn}`}>
          <Image alt={i.alt} src={i.src} height={64} width={64} />
          <figcaption>{i.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
