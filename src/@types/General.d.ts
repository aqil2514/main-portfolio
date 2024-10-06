/**
 * Namespace untuk tipe-tipe umum
 */
namespace GenType {
  
  /**
   * Interface dasar yang berisi informasi umum.
   */
  export interface BasicInfo {
    /** ID unik dari entitas */
    id: string;
    /** Nama entitas */
    name: string;
  }

  /**
   * Interface untuk kartu informasi dasar.
   * Berisi deskripsi dan opsi call-to-action (CTA).
   */
  export interface CardBasic extends BasicInfo {
    /** Deskripsi kartu dalam berbagai bahasa */
    desc: {
      /** ID deskripsi */
      id: string;
      /** Deskripsi dalam bahasa Inggris */
      en: string;
    };
    /** Teks tombol CTA (jika ada) */
    ctaText?: string;
    /** Link yang dituju oleh tombol CTA (jika ada) */
    ctaLink?: string;
    /** Teks repository (jika ada) */
    repoText?: string;
    /** Link ke repository (jika ada) */
    repoLink?: string;
    /** Kelompok kategori yang dimiliki kartu (jika ada) */
    group?: string[];
    /** Link Download jika ada */
    downloadLink?: string;
    /** Teks download jika ada */
    downloadText?: string;
  }

  /**
   * Interface untuk kartu dengan gambar.
   * Memperluas dari `CardBasic`.
   */
  export interface CardImage extends CardBasic {
    /** Sumber gambar yang ditampilkan pada kartu */
    imageSrc: string;
    /** Alt text untuk gambar, jika gambar tidak ditampilkan */
    imageAlt: string;
    /** Caption gambar */
    imageCapt: string;
    /** Video demo (opsional) */
    demoVideo?: string;
  }

  /**
   * Tipe yang mewakili bidang pekerjaan.
   */
  export type FieldType =
    | "fullstack-developer"
    | "writer"
    | "video-editor"
    | "excel-specialist"
    | "unselected";

  /**
   * Interface umum untuk ikon.
   * Menyimpan informasi dasar tentang ikon seperti sumber dan alt text.
   */
  export interface Icon extends BasicInfo {
    /** Link tujuan jika ikon digunakan sebagai tautan navigasi (opsional) */
    link?: string;
    /** Alternatif teks jika gambar tidak aktif */
    alt: string;
    /** Sumber ikon, bisa berupa URL atau path file */
    src: string;
  }

  /**
   * Tipe yang mewakili pilihan bahasa yang didukung.
   */
  export type Language = "ID" | "EN";

  /**
   * Interface umum untuk daftar elemen.
   * @template T - Tipe dari ID atau value yang digunakan dalam list.
   */
  export interface List<T = string> {
    /** ID atau value dari item list */
    id: T;
    /** Label yang ditampilkan untuk item list */
    label: string;
  }
}
