import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Prem Kumar",
  description: "Personal website of Prem Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased leading-8 overflow-x-hiddenddd dark:bg-darkTheme dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
