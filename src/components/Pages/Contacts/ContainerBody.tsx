import Button from "@/components/ui/button";
import { useContactsData } from "./ContactsProvider";
import React from "react";

export default function ContactsBody() {
  const { via } = useContactsData();
  const isViaEmail = via === "Email";
  const actionLink = isViaEmail ? "mailto:muhamadaqil383@gmail.com": "https://wa.me/6281779174118";

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const message = form["body-message"].value; 
    const encodedMessage = encodeURIComponent(message);

    if (isViaEmail) {
      window.location.href = `${actionLink}?subject=Portofolio%20-%20Penawaran%20Kerja%20Sama&body=${encodedMessage}`;
    } else {
      window.location.href = `${actionLink}?text=${encodedMessage}`;
    }
  };

  return (
    <form method="get" onSubmit={handleSubmit}>
      {isViaEmail && <input
        type="hidden"
        name="subject"
        value={"Portofolio - Penawaran Kerja Sama"}
      />}
      <div className="flex flex-col gap-2">
        <label htmlFor="body-message">Pesan {via}:</label>
        <textarea
          name={isViaEmail ? "body" : "text"}
          id="body-message"
          placeholder="Tuliskan Pesan Anda di sini..."
          className="p-2 rounded-md font-poppins text-black h-[250px]"
        ></textarea>
      </div>
      <div className="my-4">
        <Button styleTemplate="yuhomyan" styleNumber={2}>
          Kirim via {via}
        </Button>
      </div>
    </form>
  );
}
