export interface NavigationLinks {
  url: string;
  label_ID: string;
  label_EN: string;
}
export const navigationLinks: NavigationLinks[] = [
  {
    url: "/",
    label_EN: "Home",
    label_ID: "Beranda",
  },
  {
    url: "/profile",
    label_EN: "Profile",
    label_ID: "Profil",
  },
  {
    url: "/projects",
    label_EN: "Projects",
    label_ID: "Proyek",
  },
  {
    url: "/contacts",
    label_EN: "Contacts",
    label_ID: "Kontak",
  },
];
