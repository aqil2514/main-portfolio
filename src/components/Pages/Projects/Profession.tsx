import useStore from "@/lib/store";
import FullStackDeveloperProjects from "./FSD";

export default function Profession() {
  const { field } = useStore();
  if (field === "fullstack-developer") return <FullStackDeveloperProjects />
  return <div>Anda belum memilih profesi yang ingin dilihat</div>;
}
