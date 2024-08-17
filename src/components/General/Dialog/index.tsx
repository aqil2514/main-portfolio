import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FieldSelection from "./FieldSelection";
import useStore from "@/lib/store";

export default function DialogComponent() {
  const {field, fieldMap} = useStore();

  const triggerText =
    field === "unselected" ? "Pilih bidang" : fieldMap.get(field);

  return (
    <Dialog>
      <DialogTrigger className="font-young-serif">{triggerText}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pilih Bidang yang Ingin Anda Lihat</DialogTitle>
          <DialogDescription>
            Saat ini anda sedang melihat bidang {fieldMap.get(field)}
          </DialogDescription>
        </DialogHeader>
        <FieldSelection />
      </DialogContent>
    </Dialog>
  );
}
