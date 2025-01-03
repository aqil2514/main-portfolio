import FullStackDeveloperProfession from "./FSD";
import WriterProfession from "./WR"
import VideoEditorProfession from "./VE";
import useStore from "@/lib/store";
import ExcelSpecialistProfession from "./ES";
import WareHouseAdminProfession from "./WHA";

export default function Profession() {
  const { field } = useStore();
  if (field === "fullstack-developer") return <FullStackDeveloperProfession />;
  else if(field === "writer") return <WriterProfession />
  // else if(field === "video-editor") return <VideoEditorProfession />
  else if(field === "excel-specialist") return <ExcelSpecialistProfession />
  else if(field === "warehouse-admin") return <WareHouseAdminProfession />

  return <div>Anda belum memilih profesi yang ingin dilihat</div>;
}
