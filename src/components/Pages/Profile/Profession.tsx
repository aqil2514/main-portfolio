import FullStackDeveloperProfession from "./FSD";
import WriterProfession from "./WR"
import VideoEditorProfession from "./VE";
import useStore from "@/lib/store";

export default function Profession() {
  const { field } = useStore();
  if (field === "fullstack-developer") return <FullStackDeveloperProfession />;
  else if(field === "writer") return <WriterProfession />
  else if(field === "video-editor") return <VideoEditorProfession />

  return <div>Anda belum memilih profesi yang ingin dilihat</div>;
}
