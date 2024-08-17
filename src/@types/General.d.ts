/**
 * Interface secara umum
 */
namespace GenType {
  export interface BasicInfo {
    id: string;
    name: string;
  }

  export interface CardBasic extends BasicInfo {
    desc: {
      id: string;
      en: string;
    };
    ctaText?: string;
    ctaLink?: string;
    repoText?: string;
    repoLink?: string;
    group?: string[];
  }

  export interface CardImage extends CardBasic {
    imageSrc: string;
    imageAlt: string;
    imageCapt: string;
  }

  export type FieldType =
    | "fullstack-developer"
    | "writer"
    | "video-editor"
    | "unselected";

  /** Interface umum untuk icon */
  export interface Icon extends BasicInfo {
    /** Link yang dituju (Jika digunakan sebagai navigasi) */
    link?: string;
    /** Alternatif teks jika gambar tidak aktif */
    alt: string;
    /** Sumber icon */
    src: string;
  }

  export type Language = "ID" | "EN";

  /** Interface umum untuk list */
  export interface List<T = string> {
    /** ID atau Value */
    id: T;
    /** Yang akan ditampilkan */
    label: string;
  }
}
