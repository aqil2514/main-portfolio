import MainContainer from "@/components/layout/container";
import Profile from "@/components/Pages/Profile";
import ProfileProvider from "@/components/Pages/Profile/ProfileProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Muhamad Aqil Maulana",
};

export default function ProfilePage() {
  return (
    <MainContainer>
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    </MainContainer>
  );
}
