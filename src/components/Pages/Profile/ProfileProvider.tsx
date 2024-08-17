"use client";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { fieldList } from "../../General/Dialog/misc";

export type ProfileFieldType =
  | "fullstack-developer"
  | "writer"
  | "video-editor"
  | "unselected";

interface ProfileProviderProps {
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
  const certifRef = useRef<null | HTMLDivElement>(null);

  const value: ProfileProviderProps = {
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
