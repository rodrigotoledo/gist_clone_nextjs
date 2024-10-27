import localFont from "next/font/local";

import "./globals.css";
import { AxiosProvider } from "@/contexts/AxiosContext";

const workSansBold = localFont({
  src: "./fonts/WorkSans-Bold.ttf",
  variable: "--font-work-sans-bold",
});
const workSansRegular = localFont({
  src: "./fonts/WorkSans-Regular.ttf",
  variable: "--font-work-sans-regular",
});

export const metadata = {
  title: "Gist NextJS Clone",
  description: "Clone of Gist Using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <AxiosProvider>
      <html lang="en">
        <body
          className={`${workSansBold.variable} ${workSansRegular.variable} bg-darkBackground antialiased`}
        >
          {children}
        </body>
      </html>
    </AxiosProvider>
  );
}
