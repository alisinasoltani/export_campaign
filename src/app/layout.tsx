import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "پویش ملی صادرات",
  description: "تجربه تلخ را تجربه نكنيم و تجربه شيرين را، شيرين تر و در حداقل زمان تجربه كنيم",
  authors: [{name: "Alisina Soltani", url: "https://github.com/alisinasoltani"}, {name: "Marry Fatahi"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        {children}
      </body>
    </html>
  );
}
