import { useEffect, useState } from "react";

export const certifHandler = (certifRef:React.MutableRefObject<HTMLDivElement | null>) => {
    if (certifRef.current) {
      const target = certifRef.current;
      const scrollY = target.offsetTop - 50;

      window.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
      return;
    }

    return;
  };

  /**
 * Hook `useAnimatedButton` digunakan untuk mengatur visibilitas tombol
 * berdasarkan durasi animasi dari teks `greetingsWords`. Hook ini mengembalikan
 * status tombol yang menentukan apakah tombol harus ditampilkan atau tidak.
 *
 * @param {string} greetingsWords - Teks yang digunakan untuk menghitung durasi animasi.
 * Durasi animasi dihitung berdasarkan jumlah kata dalam `greetingsWords`, dengan setiap kata memiliki delay 0.1 detik.
 *
 * @returns {Object} - Mengembalikan objek dengan status `showButtons`.
 * @returns {boolean} showButtons - Menunjukkan apakah tombol harus ditampilkan setelah animasi selesai.
 *
 * @example
 * // Menggunakan hook useAnimatedButton dalam komponen
 * const { showButtons } = useAnimatedButton("Halo dunia ini adalah teks contoh");
 *
 * return (
 *   <div>
 *     {showButtons && <button>Tombol</button>}
 *   </div>
 * );
 */
export const useAnimatedButton = (greetingsWords: string) => {
  // State untuk mengatur visibilitas tombol
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Set timer sesuai dengan durasi animasi
    const animationDuration = greetingsWords.split(" ").length * 0.1 + 0.1;
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, animationDuration * 1000);

    return () => clearTimeout(timer); // Cleanup timer pada unmount
  }, [greetingsWords]);

  return { showButtons };
};
