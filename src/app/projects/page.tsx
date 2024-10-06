import MainContainer from "@/components/layout/Containers/Main";
import Projects from "@/components/Pages/Projects";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects | Muhamad Aqil Maulana",
};

export default function ProjectsPage() {
  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
    </MainContainer>
  );
}
