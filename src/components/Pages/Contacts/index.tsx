"use client";
import { applyTransition, styles } from "@/utils/utils-animation";
import ContactsProvider from "./ContactsProvider";
import Container from "./Container";
import { useEffect, useRef } from "react";

export default function Contacts() {
  const contactsRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (contactsRef.current) return applyTransition(contactsRef.current);
  }, []);
  return (
    <ContactsProvider>
      <div style={styles} ref={contactsRef}>
        <h1 className="font-young-serif text-center text-2xl">Kontak Kami</h1>
        <Container />
      </div>
    </ContactsProvider>
  );
}
