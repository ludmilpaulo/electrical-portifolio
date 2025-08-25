
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneWhatsAppBar from "@/components/PhoneWhatsAppBar";
import Providers from "@/redux/Providers";

export const metadata: Metadata = {
  title: "LEO Electrical & Plumbing | Reliable Electrical Installations in South Africa",
  description: "Professional electrical and plumbing services. Solar-ready installs, COC, wiring, fault finding. Call 073 462 7545 for a free quote.",
  openGraph: {
    title: "LEO Electrical & Plumbing",
    description: "Work Smart. No Excuse.",
    type: "website"
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-50 text-slate-900"}>
        <Providers>
          <PhoneWhatsAppBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
