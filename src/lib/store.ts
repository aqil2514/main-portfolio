import { fieldList } from "@/components/General/Dialog/misc";
import { create } from "zustand";

interface Store {
  field: GenType.FieldType;
  setField: (selected: GenType.FieldType) => void;
  language: GenType.Language;
  setLanguage: (selected: GenType.Language) => void;
  fieldMap: Map<GenType.FieldType, string>;
}

const fieldMap = new Map<GenType.FieldType, string>(
  fieldList.map((fl) => [fl.id, fl.label])
);

const useStore = create<Store>()((set) => ({
  field: "unselected",
  setField: (selected) => set(() => ({ field: selected })),
  language: "ID",
  setLanguage: (selected) => set(() => ({ language: selected })),
  fieldMap,
}));

export default useStore;
