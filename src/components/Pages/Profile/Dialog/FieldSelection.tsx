import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProfileFieldType, useProfileData } from "../ProfileProvider";
import { fieldList } from "./misc";

export default function FieldSelection() {
  const { setField } = useProfileData();

  return (
    <Select onValueChange={(e) => setField(e as ProfileFieldType)}>
      <SelectTrigger>
        <SelectValue placeholder="Lihat Bidang" />
      </SelectTrigger>
      <SelectContent>
        {fieldList.map((f) => (
          <SelectItem key={f.id} value={f.id}>
            {f.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
