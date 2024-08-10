import { useProfileData } from "../ProfileProvider";

export default function Greetings() {
  const { content } = useProfileData();
  const greetingsWords = content.profile["full-stack-developer"].greetings;

  return (
    <div>
      <p>{greetingsWords}</p>
    </div>
  );
}
