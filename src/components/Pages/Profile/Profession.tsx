import FullStackDeveloperProfession from "./FSD";
import WriterProfession from "./WR"
import { useProfileData } from "./ProfileProvider";

export default function Profession() {
  const { field } = useProfileData();
  if (field === "fullstack-developer") return <FullStackDeveloperProfession />;
  else if(field === "writer") return <WriterProfession />

  return <div>Anda belum memilih profesi yang ingin dilihat</div>;
}
