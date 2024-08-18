import MainContainer from "@/components/layout/Containers/Main";
import Contacts from "@/components/Pages/Contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacts | Muhamad Aqil Maulana",
  };

export default function ContactsPage(){
    return(
        <MainContainer>
            <Contacts />
        </MainContainer>
    )
}