import "./globals.css";
import Navbar from "@/components/Navbar";
import BookServiceModal from "@/components/BookServiceModal"; // <-- 1. Import the new component

export const metadata = {
  title: "YourCompany",
  description: "Your company's homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <BookServiceModal /> {/* <-- 2. Add it here */}
        <main>{children}</main>
        {/* The Footer is added on individual pages in your setup, so we'll leave it out of here */}
      </body>
    </html>
  );
}