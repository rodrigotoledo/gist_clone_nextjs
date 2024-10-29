
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { FlashMessageProvider} from "@/contexts/FlashMessageContext";
import FlashMessage from "@/components/FlashMessage"

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
    <html lang="en" className={`${workSansBold.variable} ${workSansRegular.variable}`}>
      <body className="bg-darkBackground antialiased">
        <FlashMessageProvider>
          <AuthProvider>
            <FlashMessage />
            {children}
          </AuthProvider>
        </FlashMessageProvider>
      </body>
    </html>
  );
}