"use client";
import DialogComponent from "./Dialog";
import { useProfileData } from "./ProfileProvider";

export default function Profile() {
    const data = useProfileData();
  return (
    <div>
      <div className="flex gap-4">
        <h1>Profile Saya dalam bidang</h1>
        <DialogComponent />
        </div>
    </div>
  );
}
