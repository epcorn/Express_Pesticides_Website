import "./globals.css";
import Navbar from "../components/Navbar";
import BookServiceModal from "../components/BookServiceModal";
import Chatbot from "@/components/ChatBot";

export const metadata = {
  title: "Express Pesticides",
  description: "Your company's homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">
        <Navbar />
        <BookServiceModal />
        <Chatbot /> {/* 2. Add the Chatbot component here */}

        {/* 3. Removed 'pt-16' from main */}
        {/* This allows your hero section to go all the way to the top. */}
        {/* You will add 'pt-32' to your other pages (like about, contact) */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}