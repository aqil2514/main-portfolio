import MainContainer from "@/components/layout/container";
import Projects from "@/components/Pages/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhamad Aqil Maulana",
};

export default function ProjectsPage() {
  return (
    <MainContainer>
      <Projects />
    </MainContainer>
  );
}
