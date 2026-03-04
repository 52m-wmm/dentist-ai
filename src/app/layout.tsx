import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { syncUser } from "@/lib/actions/users"; // 这是 "use server" 的 action，layout 是 server，可以直接 await

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentistAI-your Ai dental assistant",
  description: "Get instant dental advice from dentist AI via a call.24hrs service.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ 关键：在 Server Component 里同步用户，不走 useEffect，不会把 server-only 拉进 client
  await syncUser();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#000000",
              colorText: "#000000",
              colorBackground: "#ffffff",
              colorTextSecondary: "#000000",
              colorInputBackground: "#ffffff",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}