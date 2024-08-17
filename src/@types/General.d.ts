/**
 * Interface secara umum
 */
namespace GenType {
  export interface BasicInfo {
    id: string;
    name: string;
  }

  export interface CardBasic extends BasicInfo{
    desc:{
      id:string;
      en:string;
    }
    ctaText?: string;
    ctaLink?: string;
  }

  export interface CardImage extends CardBasic{
    imageSrc: string;
    imageAlt: string;
    imageCapt: string;
  }

  /** Interface umum untuk icon */
  export interface Icon extends BasicInfo {
    /** Link yang dituju (Jika digunakan sebagai navigasi) */
    link?: string;
    /** Alternatif teks jika gambar tidak aktif */
    alt: string;
    /** Sumber icon */
    src: string;
  }

  /** Interface umum untuk list */
  export interface List<T = string> {
    /** ID atau Value */
    id: T;
    /** Yang akan ditampilkan */
    label: string;
  }
}
