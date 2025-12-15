import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bomb City Studios | Amarillo Web Design",
  description: "Request a quote or ask a question. We build simple websites for Amarillo businesses and offer friendly, fast communication.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
