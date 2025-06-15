import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Figtree({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mimir",
  description: "Learning in the modern way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
