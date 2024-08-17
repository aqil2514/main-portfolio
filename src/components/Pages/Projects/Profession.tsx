import useStore from "@/lib/store";
import FullStackDeveloperProjects from "./FSD";
import VideoEditorProjects from "./VE";
import WriterProjects from "./WR";

export default function Profession() {
  const { field } = useStore();
  if (field === "fullstack-developer") return <FullStackDeveloperProjects />
  else if(field === "video-editor") return <VideoEditorProjects />
  else if(field === "writer") return <WriterProjects />
  
  return <div>Anda belum memilih profesi yang ingin dilihat</div>;
}
