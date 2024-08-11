import { Hanken_Grotesk } from "next/font/google";
import "./global.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Results Summary Component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${hanken.className} bg-body-color desktop:bg-[#ebf1ff]/[0.75] desktop:grid desktop:h-full desktop:place-content-center min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
