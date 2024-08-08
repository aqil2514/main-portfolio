"use client";
import React, {
  createContext,
  SetStateAction,
  useContext,
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
}

const ProfileContext = createContext<ProfileProviderProps>(
  {} as ProfileProviderProps
);

export default function ProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [field, setField] = useState<ProfileFieldType>("unselected");
  const fieldMap = new Map<ProfileFieldType, string>(
    fieldList.map((fl) => [fl.id, fl.label])
  );

  const value: ProfileProviderProps = {
    field,
    setField,
    fieldMap,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfileData() {
  return useContext(ProfileContext);
}
