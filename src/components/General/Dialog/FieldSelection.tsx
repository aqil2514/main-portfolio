import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fieldList } from "./misc";
import useStore from "@/lib/store";
import { usePathname, useRouter } from "next/navigation";

export default function FieldSelection() {
  const { setField } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  const changeValueHandler = (e: string) => {
    const path = pathname.split("/")[1]
    setField(e as GenType.FieldType);
    router.replace(`/${path}?field=${e}`)
  };

  return (
    <Select onValueChange={(e) => changeValueHandler(e)}>
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
