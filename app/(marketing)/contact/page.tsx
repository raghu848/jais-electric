import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a quote from Jais Electric. Call (647) 913-4501 or send a message using our contact form.",
};

export default function Contact() {
  return <ContactPage />;
}




