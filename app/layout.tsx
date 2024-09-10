import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: {
		template: "%s | Daily Vote",
		default: "nikodiam",
	},
	authors: {
		name: "nikodiam",
	},

	description:
		"Based in Toronto, I am a 2024 CS graduate currently learning fullstack web development and Data Analytics.",
	openGraph: {
		title: "nikodiam",
		description:
			"Based in Toronto, I am a 2024 CS graduate currently learning fullstack web development and SwiftUI.",
		url: "http://localhost:3000",
		siteName: "nikodiam",
		images: "/og.png",
		type: "website",
	},
	keywords: ["nikodiam", "nikodiam99", "Nikolaos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>


      </body>
    </html>
  );
}
