import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fieldList } from "./misc";
import useStore from "@/lib/store";

export default function FieldSelection() {
  const { setField } = useStore();

  return (
    <Select onValueChange={(e) => setField(e as GenType.FieldType)}>
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
