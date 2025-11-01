// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import BookServiceModal from "../components/BookServiceModal";

export const metadata = {
  title: "YourCompany",
  description: "Your company's homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">
        <Navbar />
        <BookServiceModal />

        {/* Add top padding only on md and above so desktop content sits below fixed navbar.
            On mobile we DON'T add padding so hero remains tight under navbar (no unwanted gap). */}
        <main className="min-h-screen md:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
