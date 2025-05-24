import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Website",
  description: "Website description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
