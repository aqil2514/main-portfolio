import { useContactsData } from "./ContactsProvider";

export default function ContactsHeader() {
  const { setVia, via } = useContactsData();

  return (
    <div className="flex justify-center gap-4 mb-4">

      <button
        onClick={() => setVia("Email")}
        className={`px-4 font-poppins py-2 rounded duration-500 transform ${
          via === "Email"
            ? "bg-sky-500 text-white scale-105 shadow-lg"
            : "bg-white text-slate-800 scale-100 shadow-sm"
        } hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500`}
      >
        Via Email
      </button>
      <button
        onClick={() => setVia("Whatsapp")}
        className={`px-4 font-poppins py-2 rounded duration-500 transform ${
          via === "Whatsapp"
            ? "bg-sky-500 text-white scale-105 shadow-lg"
            : "bg-white text-slate-800 scale-100 shadow-sm"
        } hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500`}
      >
        Via WhatsApp
      </button>
    </div>
  );
}
