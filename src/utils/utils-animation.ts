/**
 * Fungsi `applyTransition` digunakan untuk menerapkan efek transisi pada elemen 
 * HTML div dengan mengubah opacity dan transformasi elemen tersebut.
 *
 * @function
 * @param {HTMLDivElement} element - Elemen div HTML yang akan diterapkan efek transisi.
 *
 * @example
 * // Menggunakan applyTransition untuk menerapkan transisi pada elemen div
 * const myDiv = document.getElementById('myDiv') as HTMLDivElement;
 * applyTransition(myDiv);
 */
export const applyTransition = (element: HTMLDivElement) => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  };
  
  /**
   * Objek `styles` adalah kumpulan properti CSS yang digunakan untuk mengatur 
   * gaya awal dari sebuah elemen sebelum transisi dilakukan. Properti ini mengatur 
   * opacity, transformasi posisi vertikal, dan durasi transisi.
   *
   * @constant
   * @type {React.CSSProperties}
   *
   * @property {string | number} opacity - Mengatur tingkat transparansi elemen (0 = transparan, 1 = tidak transparan).
   * @property {string} transform - Mengatur posisi vertikal elemen sebelum transisi (bergeser 100% ke bawah).
   * @property {string} transition - Mengatur durasi transisi (500 milidetik).
   *
   * @example
   * // Menggunakan styles sebagai gaya awal untuk elemen div
   * const myDivStyles = { ...styles, color: 'red' };
   */
  export const styles: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(100%)",
    transition: "500ms",
  };
  