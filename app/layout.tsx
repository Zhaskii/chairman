import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajeshkazishrestha.com"),
  title:
    "Dr. Rajesh Kazi Shrestha | Industrialist · Trade Diplomat · Nation Builder",
  description:
    "Official personal portfolio of Dr. Rajesh Kazi Shrestha — Founder & Chairman of Arksh Group, Former State Minister of Industry, Honorary Consul of Vietnam to Nepal, and recipient of 19+ national and international honors.",
  keywords: [
    "Dr. Rajesh Kazi Shrestha",
    "Rajesh Kazi Shrestha portfolio",
    "Rajesh Kazi Shrestha Nepal",
    "Industrialist Nepal",
    "Trade Diplomat Nepal",
    "Honorary Consul Vietnam Nepal",
    "Founder Arksh Group",
    "Nepal Chamber of Commerce President",
    "ICC Nepal Chairman",
    "Nation Builder Nepal",
    "Nepalese entrepreneur",
    "Nepal business leader",
  ],
  authors: [{ name: "Dr. Rajesh Kazi Shrestha" }],
  creator: "Dr. Rajesh Kazi Shrestha",
  openGraph: {
    title: "Dr. Rajesh Kazi Shrestha | Personal Portfolio",
    description:
      "Industrialist, trade diplomat, and nation builder with 47+ years of transformative leadership — Founder of Arksh Group & Honorary Consul of the Socialist Republic of Vietnam to Nepal.",
    url: "https://rajeshkazishrestha.com",
    siteName: "Dr. Rajesh Kazi Shrestha",
    images: [
      {
        url: "/images/rajesh-kajishrestha2.jpg",
        width: 1000,
        height: 1500,
        alt: "Dr. Rajesh Kazi Shrestha — Industrialist & Trade Diplomat",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rajesh Kazi Shrestha | Personal Portfolio",
    description:
      "Industrialist, Trade Diplomat & Nation Builder. Founder of Arksh Group. Honorary Consul of Vietnam to Nepal.",
    images: ["/images/rajesh-kajishrestha2.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0154A5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-[#f0f6ff] text-slate-800">
        {children}
      </body>
    </html>
  );
}
