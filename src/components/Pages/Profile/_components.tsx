import Image from "next/image";
import styles from "./profile.module.css"; // Ganti dengan CSS Module jika digunakan
import Button from "@/components/ui/button";
import { certifHandler, useAnimatedIcons } from "./utils";
import { useProfileData } from "./ProfileProvider";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";

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

/**
 * Komponen `AnimatedIcons` digunakan untuk menampilkan daftar ikon dengan efek animasi
 * muncul secara bertahap. Setiap ikon ditampilkan dalam grid dengan keterangan di bawahnya.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen `AnimatedIcons`.
 * @param {GenType.Icon[]} props.icons - Daftar objek ikon yang akan ditampilkan.
 * @param {string} props.icons[].id - ID unik untuk setiap ikon.
 * @param {string} props.icons[].alt - Teks alternatif untuk gambar ikon.
 * @param {string} props.icons[].src - Sumber URL gambar ikon.
 * @param {string} props.icons[].name - Nama atau keterangan untuk ikon.
 *
 * @example
 * // Menggunakan AnimatedIcons dengan daftar ikon
 * const icons = [
 *   { id: '1', alt: 'Icon 1', src: '/icons/icon1.png', name: 'Ikon 1' },
 *   { id: '2', alt: 'Icon 2', src: '/icons/icon2.png', name: 'Ikon 2' }
 * ];
 *
 * <AnimatedIcons icons={icons} />
 */
export const AnimatedIcons: React.FC<{ icons: GenType.Icon[] }> = ({
  icons,
}) => {
  const { windowWidth } = useAnimatedIcons();

  if (windowWidth < 768) return <>
    <Carousel className="w-[55%]">
      <CarouselContent>
      {icons.map((i) => (
        <CarouselItem key={i.id} className="basis-1/3">
        <figure
          key={i.id}
          className={`relative max-w-32 max-h-32 flex flex-col justify-center items-center my-2 gap-2 ${styles.fadeIn}`}
        >
          <Image alt={i.alt} src={i.src} height={64} width={64} />
          <figcaption className="text-center">{i.name}</figcaption>
        </figure>
        </CarouselItem>
      ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  </>;

  return (
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
};

export const Certificates: React.FC<{ certificates: GenType.CardImage[] }> = ({
  certificates,
}) => {
  return (
    <div>
      <h1>Sertifikat</h1>
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[1000px] p-4 mx-auto"
      >
        <CarouselContent>
          {certificates.map((certificate) => (
            <CarouselItem
              key={certificate.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-[480px] py-4 overflow-y-scroll no-scrollbar bg-slate-800 px-2 border-double border-8 border-sky-400">
                <CardTitle className="text-center text-white font-young-serif">
                  {certificate.name}
                </CardTitle>
                <CardDescription className="text-sm text-center mt-2 font-poppins text-slate-50">
                  {certificate.imageCapt}
                </CardDescription>
                <CardContent className="font-poppins text-gray-100">
                  <figure className="flex flex-col gap-2 items-center justify-center">
                    <Image
                      alt={certificate.imageAlt}
                      src={certificate.imageSrc}
                      width={320}
                      height={160}
                    />
                  </figure>
                  <p className="font-sans text-base">{certificate.desc.id}</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link
                    href={certificate.ctaLink ? certificate.ctaLink : "#"}
                    target="_blank"
                  >
                    {certificate.ctaLink && (
                      <Button styleTemplate="yuhomyan" styleNumber={1}>
                        {certificate.ctaText}
                      </Button>
                    )}
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

/**
 * Komponen `CTA_Buttons` menampilkan dua tombol yang dapat digunakan untuk
 * menavigasi ke halaman Sertifikat dan Proyek. Tombol Sertifikat akan
 * mengarahkan pengguna ke elemen referensi sertifikat, sedangkan tombol
 * Proyek akan mengarahkan pengguna ke link proyek yang diberikan.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen `CTA_Buttons`.
 * @param {string} props.projectLink - URL yang akan digunakan untuk mengarahkan pengguna ke halaman proyek.
 *
 * @example
 * // Menggunakan CTA_Buttons dengan link proyek yang diberikan
 * <CTA_Buttons projectLink="/projects?category=fsd" />
 */
export const CTA_Buttons: React.FC<{ projectLink: string }> = ({
  projectLink,
}) => {
  const { certifRef } = useProfileData();
  const router = useRouter();
  const { toast } = useToast();
  const isNothingRef = certifRef.current === null;

  const noRefHandler = () => {
    toast({
      title: "Tidak ada sertifikat",
      description: "Bidang ini belum memiliki sertifikat apapun",
      action: (
        <Button
          styleNumber={1}
          styleTemplate="yuhomyan"
          onClick={() => router.replace(projectLink)}
        >
          Project
        </Button>
      ),
    });
  };

  return (
    <div className="flex gap-4 justify-center mt-12">
      <Button
        styleNumber={7}
        styleTemplate="yuhomyan"
        className={`!font-young-serif !font-bold ${styles.fadeIn}`}
        onClick={() =>
          isNothingRef ? noRefHandler() : certifHandler(certifRef)
        }
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
