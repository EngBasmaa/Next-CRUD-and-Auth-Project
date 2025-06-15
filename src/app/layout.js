import "./globals.css";
import { Oswald } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const oswald = Oswald({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

export const metadata = {
  title: "create Next app",
  description: "created by Next js"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={oswald.className}
        style={{ backgroundColor: "var(--muted)" }}
      >
        <Header />

        <div>
          {children}
        </div>
        <div className="layout-wrapper">
          <Footer />
        </div>
      </body>
    </html>
  );
}
