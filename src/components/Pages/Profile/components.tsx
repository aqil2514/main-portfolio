import Image from "next/image";
import styles from "./profile.module.css"; // Ganti dengan CSS Module jika digunakan
import Button from "@/components/ui/button";
import { certifHandler } from "./utils";
import { useProfileData } from "./ProfileProvider";
import { useRouter } from "next/navigation";

/**
 * Komponen `AnimatedSpan` digunakan untuk menampilkan teks dengan efek animasi
 * muncul secara bertahap. Setiap kata atau karakter akan muncul dengan delay
 * yang dapat diatur sesuai dengan properti `delay`.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen `AnimatedSpan`.
 * @param {number} props.delay - Waktu tunda (delay) dalam detik sebelum animasi dimulai untuk elemen ini.
 * @param {React.ReactNode} props.children - Konten teks atau elemen yang akan diberikan efek animasi.
 *
 * @example
 * // Menggunakan AnimatedSpan dengan delay 0.5 detik untuk menampilkan teks
 * <AnimatedSpan delay={0.5}>
 *   Hello, World!
 * </AnimatedSpan>
 */
export const AnimatedSpan: React.FC<{
  delay: number;
  children: React.ReactNode;
}> = ({ delay, children }) => (
  <span
    className={`${styles.fadeIn} inline-block cursor-default`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </span>
);

export const AnimatedIcons: React.FC<{ icons: GenType.Icon[] }> = ({
  icons,
}) => (
  <div className="grid gap-4 grid-cols-4 max-h-[300px]">
    {icons.map((i) => (
      <figure
        key={i.id}
        className={`w-20 h-20 flex flex-col justify-center items-center my-2 gap-2 ${styles.fadeIn}`}
      >
        <Image alt={i.alt} src={i.src} height={64} width={64} />
        <figcaption className="text-center">{i.name}</figcaption>
      </figure>
    ))}
  </div>
);

export const CTA_Buttons: React.FC<{ projectLink: string }> = ({
  projectLink,
}) => {
  const { certifRef } = useProfileData();
  const router = useRouter();

  return (
    <div className="flex gap-4 justify-center mt-12">
      <Button
        styleNumber={7}
        styleTemplate="yuhomyan"
        className={`!font-young-serif !font-bold ${styles.fadeIn}`}
        onClick={() => certifHandler(certifRef)}
      >
        Sertifikat
      </Button>
      <Button
        styleNumber={7}
        styleTemplate="yuhomyan"
        className={`!font-young-serif !font-bold ${styles.fadeIn}`}
        onClick={() => router.replace(projectLink)}
      >
        Proyek
      </Button>
    </div>
  );
};
