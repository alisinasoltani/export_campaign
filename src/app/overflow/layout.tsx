import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "پرسش و پاسخ",
  description: "چالش‌های تجارت جهانی را به فرصت تبدیل کنید: بپرسید، هم‌افزا شوید، و در کنار جامعه‌ای از متخصصان رشد کنید",
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
        {/* add a navbar for overflow. maybe the main navbar? */}
        {children}
      </body>
    </html>
  );
}
