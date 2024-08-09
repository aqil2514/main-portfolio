import FullStackDeveloperProfession from "./FSD";
import { useProfileData } from "./ProfileProvider";

export default function Profession() {
  const { field } = useProfileData();
  if (field === "fullstack-developer") return <FullStackDeveloperProfession />;

  return <div>Anda belum memilih profesi yang ingin dilihat</div>;
}
