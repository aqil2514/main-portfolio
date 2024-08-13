"use client";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { fieldList } from "./Dialog/misc";

export type ProfileFieldType =
  | "fullstack-developer"
  | "writer"
  | "video-editor"
  | "unselected";

interface ProfileProviderProps {
  field: ProfileFieldType;
  setField: React.Dispatch<SetStateAction<ProfileFieldType>>;
  fieldMap: Map<ProfileFieldType, string>;
  content: ContentLaguage.Pages;
  certifRef: React.MutableRefObject<HTMLDivElement | null>
}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);

export default function ProfileProvider({
  children,
  content
}: {
  children: React.ReactNode;
  content: ContentLaguage.Pages;
}) {
  const [field, setField] = useState<ProfileFieldType>("unselected");
  const fieldMap = new Map<ProfileFieldType, string>(
    fieldList.map((fl) => [fl.id, fl.label])
  );
  const certifRef = useRef<null | HTMLDivElement>(null);

  const value: ProfileProviderProps = {
    field,
    setField,
    fieldMap,
    content,
    certifRef
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfileData() {
  return useContext(ProfileContext);
}
