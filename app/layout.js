import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookStore",
  description: "A simple app to manage books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="min-h-screen bg-gradient-to-br from-blue-800 to-violet-600">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
