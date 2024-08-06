/**
 * Interface secara umum
 */
namespace GenType {
  /** Interface umum untuk icon */
  export interface Icon {
    /** Untuk memastikan unik */
    id: string;
    /** Link yang dituju (Jika digunakan sebagai navigasi) */
    link?: string;
    /** Alternatif teks jika gambar tidak aktif */
    alt: string;
    /** Nama iconnya */
    name: string;
    /** Sumber icon */
    src:string;
  }
}
