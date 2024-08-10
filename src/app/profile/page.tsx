import MainContainer from "@/components/layout/container";
import Profile from "@/components/Pages/Profile";
import ProfileProvider from "@/components/Pages/Profile/ProfileProvider";
import { getContent } from "@/lib/utils-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Muhamad Aqil Maulana",
};

export default function ProfilePage() {
  const content = getContent();
  return (
    <MainContainer>
      <ProfileProvider content={content}>
        <Profile />
      </ProfileProvider>
    </MainContainer>
  );
}
