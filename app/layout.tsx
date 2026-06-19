import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { cn } from "@/lib/utils";
import { UserProvider } from "./context/UserContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boorchi's Portfolio",
  description: "Full stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#0a0f1c] text-white antialiased px-4 sm:px-8 md:px-16 lg:px-[150px]">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute right-[-100px] top-[100px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute bottom-[-250px] left-[30%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />
        </div>
        <UserProvider>
          <Header />

          <main className="relative z-10">{children}</main>

          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
