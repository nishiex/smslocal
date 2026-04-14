import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SMSLocal - Bulk SMS Service Provider in India",
  description:
    "SMSLocal is a leading bulk SMS service provider in India, offering reliable and cost-effective messaging solutions for businesses of all sizes. With our user-friendly platform and robust API, you can easily send promotional, transactional, and OTP SMS to your customers. Sign up today and get ₹60 free credits to experience our top-notch bulk SMS services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
