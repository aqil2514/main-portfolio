import MainContainer from "@/components/layout/Containers/Main";
import Profile from "@/components/Pages/Profile";
import ProfileProvider from "@/components/Pages/Profile/ProfileProvider";
import { getContent } from "@/lib/utils-server";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Profile | Muhamad Aqil Maulana",
};

export default function ProfilePage() {
  const content = getContent();
  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}> 
        <ProfileProvider content={content}>
          <Profile />
        </ProfileProvider>
      </Suspense>
    </MainContainer>
  );
}
