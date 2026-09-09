import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import { futuraHeavy, alexBrush } from "./fonts/font";

export const metadata = {
  title: "Monameenakshi Real Estate | Fresno Realtor",
  description:
    "Monameenakshi Real Estate - Your trusted local Fresno Realtor for buying, selling, and investing in property.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${futuraHeavy.className} ${alexBrush.variable} bg-[#E9EFF3]`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
