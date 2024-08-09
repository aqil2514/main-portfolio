"use client";
import DialogComponent from "./Dialog";
import Profession from "./Profession";

export default function Profile() {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <h1>Profile Saya sebagai seorang</h1>
        <DialogComponent />
      </div>
      <Profession />
    </div>
  );
}
