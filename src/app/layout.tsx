import type { Metadata } from "next";
import "./globals.css";
// import { SessionProvider } from 'next-auth/react';
// import { auth } from '@/auth';


export const metadata: Metadata = {
  title: "پویش ملی صادرات",
  description: "تجربه تلخ را تجربه نكنيم و تجربه شيرين را، شيرين تر و در حداقل زمان تجربه كنيم",
  authors: [{name: "Alisina Soltani", url: "https://github.com/alisinasoltani"}, {name: "Marry Fatahi"}]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();
  return (
    // <SessionProvider session={session}>
      <html lang="fa">
        <body>
          {children}
        </body>
      </html>
    // </SessionProvider>
  );
}
