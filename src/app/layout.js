// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import BookServiceModal from "../components/BookServiceModal";
//import Chatbot from "../components/Chatbot";// was giving error

export const metadata = {
  title: "Express Pesticides", //changed
  description: "Express Pesticides homepage", //added
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">
        <Navbar />
        <BookServiceModal />
        

        {/* This is still required to push content below the fixed h-16 navbar */}
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
