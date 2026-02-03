import type { Metadata } from "next";
import { Noto_Sans_TC, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "煙火批發官網 | 專業煙火批發供應商",
  description:
    "專業煙火批發供應商，提供廟會煙火、盒裝煙火、沖天炮、花筒類等各式煙火批發服務。歡迎活動公司、廟會主辦、批發商洽詢。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSansTC.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
