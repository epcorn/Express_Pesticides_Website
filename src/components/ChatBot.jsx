"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Bot, Send } from "lucide-react";
import Link from "next/link"; // ...

/* ========== SERVICE SUMMARIES + FAQ MESSAGES (sourced from ServiceDetailPage.jsx) ========== */
const servicesData = {
  "green-shield": {
    name: "Green Shield",
    summary:
      "Certified IPM program targeting cockroaches, ants and silverfish using gel baits combined with odorless sprays for safe and effective control.",
    faqs: [
      {
        q: "What is the Green Shield Service?",
        a: "Green Shield is a certified Integrated Pest Management (IPM) program that uses gel baits and odorless sprays to control cockroaches, ants and silverfish safely and effectively.",
      },
      {
        q: "How does the treatment work?",
        a: "Trained applicators place gel baits at infestation points and follow with odorless sprays to eliminate ants and silverfish — giving long-term protection.",
      },
      {
        q: "Do you offer customized plans for businesses?",
        a: "Yes — we perform site audits, pest risk assessments and tailor sustainable IPM strategies for commercial facilities.",
      },
      {
        q: "How often should I schedule Green Shield?",
        a: "Quarterly or bi-monthly depending on property type and infestation level; regular monitoring ensures continued protection.",
      },
    ],
  },

  "rat-rid": {
    name: "Rat Rid",
    summary:
      "Comprehensive rodent management (rats, mice) combining inspection, eco-friendly baiting, trapping and proofing to stop reinfestation.",
    faqs: [
      {
        q: "What types of rodents do you treat?",
        a: "We handle common rodents such as rats and mice across homes, offices and commercial spaces using proven methods.",
      },
      {
        q: "How do you detect a rodent problem?",
        a: "Technicians inspect for droppings, gnaw marks, nests and ingress points to recommend proofing and control measures.",
      },
      {
        q: "What rodent control methods do you use?",
        a: "A mix of eco-friendly baiting, trapping and repelling sprays — placed to avoid non-target exposure and protect pets/people.",
      },
      {
        q: "How long does treatment take?",
        a: "Initial inspection and setup usually take 1–2 hours; follow-ups over 1–3 weeks may be needed depending on severity.",
      },
    ],
  },

  "termi-proof": {
    name: "Termi Proof",
    summary:
      "Advanced termite inspection & treatment program (Termiscan® style) to protect structures using approved, eco-safe methods.",
    faqs: [
      {
        q: "How do I know if my home has termites?",
        a: "Look for hollow wood, mud tubes, or discarded wings. A professional Termiscan® inspection determines presence and extent.",
      },
      {
        q: "Is termite treatment safe for my family?",
        a: "Yes — treatments use approved, eco-safe chemicals applied by trained professionals to ensure safety.",
      },
      {
        q: "How long does the treatment protect my home?",
        a: "A single treatment can protect your home for several years (commonly 3–5 years) depending on structure and maintenance.",
      },
      {
        q: "Can termites come back after treatment?",
        a: "Regular inspections and preventive maintenance reduce risk; we also provide after-treatment checks for continued reassurance.",
      },
    ],
  },

  "bug-free": {
    name: "Bug Free",
    summary:
      "Professional bed-bug and general bug elimination that targets hiding spots (cracks, corners) to stop re-infestation quickly.",
    faqs: [
      {
        q: "Will your treatment help if I still see bedbugs after cleaning?",
        a: "Yes — professional treatments target hiding spots that cleaning alone can’t reach, eliminating bugs and stopping re-infestation.",
      },
      {
        q: "How soon will I see results?",
        a: "Significant reduction within 24–48 hours; follow-ups may be recommended for complete clearance.",
      },
      {
        q: "Do I need to prepare my home?",
        a: "Light cleaning and covering food/utensils is recommended; the technician will give exact instructions before service.",
      },
    ],
  },

  flyban: {
    name: "Flyban",
    summary:
      "Targeted fly control that treats adult flies and breeding sources (drains, bins) to ensure long-lasting reduction in fly activity.",
    faqs: [
      {
        q: "How will your treatment help with persistent flies?",
        a: "We target both adult flies and breeding sources like drains and garbage to break the lifecycle and ensure lasting control.",
      },
      {
        q: "Is it safe for kitchen/food areas?",
        a: "Yes — we use odourless, food-safe, government-approved products suitable for kitchens and food-handling areas once dry.",
      },
      {
        q: "How long to see results?",
        a: "You’ll notice fewer flies within a few hours; full results typically appear within 24–48 hours depending on infestation.",
      },
    ],
  },

  mosquit: {
    name: "Mosquit",
    summary:
      "Mosquito control using fogging, larvicides and source reduction — protects outdoor and indoor areas across mosquito life stages.",
    faqs: [
      {
        q: "How do you control mosquitoes?",
        a: "We use fogging, larvicidal treatments and source reduction to eliminate mosquitoes at larval and adult stages.",
      },
      {
        q: "Is the treatment safe for family and pets?",
        a: "Yes — WHO-approved, eco-friendly products are used by trained technicians; areas are ventilated post-application.",
      },
      {
        q: "How long does protection last?",
        a: "Single treatments protect ~2–3 weeks; monthly or bi-monthly services are recommended during peak season.",
      },
    ],
  },

  woodsafe: {
    name: "Woodsafe",
    summary:
      "Preventive and curative wood treatment for wood-boring insects and powder-post beetles using specialized preservatives and surface sprays.",
    faqs: [
      {
        q: "What is Woodsafe treatment?",
        a: "Woodsafe is a treatment for wood-boring insects in furniture and wooden structures using injected preservatives and surface sprays.",
      },
      {
        q: "How is it applied?",
        a: "We drill small holes to inject preservatives followed by surface spraying to ensure deep and surface protection.",
      },
      {
        q: "Is it safe for furniture?",
        a: "Yes — chemicals are odorless, non-staining and safe for indoor use; furniture remains usable after treatment.",
      },
    ],
  },

  "anti-termite-treatment": {
    name: "Anti-Termite Treatment",
    summary:
      "Pre- and post-construction anti-termite solutions to create chemical barriers in soil and protect structures over the long term.",
    faqs: [
      {
        q: "When should I get pre-construction anti-termite treatment?",
        a: "It’s recommended during foundation stage before slab casting to create a soil chemical barrier that prevents termite entry.",
      },
      {
        q: "How long does the treatment last?",
        a: "Soil treatments can last multiple years (commonly 5–7 years) — warranties and inspection schedules vary by program.",
      },
      {
        q: "Is it safe for construction workers?",
        a: "Yes — strict safety protocols are followed and areas are cleared before workers resume.",
      },
    ],
  },
};

/* ========== Conversation Tree (updated) ========== */
const conversationTree = {
  start: {
    message:
      "Hi there! I'm the **Express Pesticides Bot**.\nHow can I help you today?",
    options: [
      { text: "1. Book a new service", nextStep: "book_service" },
      { text: "2. Explore the Pest Library", nextStep: "link_pest_library" },
      { text: "3. Go to the Contact Page", nextStep: "link_contact" },
      { text: "4. Ask about payments", nextStep: "payments" },
      { text: "5. Our Services", nextStep: "services" },
      { text: "6. Refund Policy", nextStep: "refund_policy" },
      { text: "7. Cancellation Policy", nextStep: "cancellation_policy" },
      { text: "8. FAQs", nextStep: "faqs" },
    ],
  },

  // Booking unchanged
  book_service: {
    message:
      "Great! Click the **'Book a Service'** button on the right side of your screen.\nIt will guide you through **pincode → service → payment**.",
    options: [{ text: "Got it, thanks!", nextStep: "start" }],
  },

  // Pest library & contact unchanged
  link_pest_library: {
    message: "The **Pest Library** helps you identify pests.\nTap the button below to browse.",
    link: { href: "/pestlibrary", text: "Go to Pest Library" },
    options: [{ text: "Back to menu", nextStep: "start" }],
  },
  link_contact: {
    message:
      "Find our **address**, **phone**, and a **contact form** on the Contact page.",
    link: { href: "/contactus", text: "Go to Contact Us" },
    options: [{ text: "Back to menu", nextStep: "start" }],
  },

  // Payments unchanged
  payments: {
    message:
      "We accept **all major payment methods**:\n• Credit / Debit cards\n• Netbanking\n• Wallets\nAll via **Razorpay** – 100% secure.",
    options: [
      { text: "Tell me about booking", nextStep: "book_service" },
      { text: "Back to menu", nextStep: "start" },
    ],
  },

  // ---- Services: replaced Residential/Commercial entries with actual services ----
  services: {
    message:
      "We provide the following professional services. Tap any service to see a short summary and FAQs:",
    options: Object.keys(servicesData).map((slug, i) => ({
      text: `${i + 1}. ${servicesData[slug].name}`,
      nextStep: `service_${slug}`,
    })).concat([{ text: "Back to menu", nextStep: "start" }]),
  },
  // Dynamically create service nodes below...
  // We'll manually add each service node using the servicesData content.
  // (nodes inserted further in the object)
  refund_policy: {
    message: `**Refund Policy**  
*Effective Date:* **10 November 2025**

**Eligibility**  
• Refunds only if cancellation is made **within the allowed window** (see Cancellation Policy).  
• **No refunds** after service has started or been completed.

**Processing Time**  
Approved refunds will be credited to your original payment method within **7–9 business days**.

**Contact**  
Email us at **info@expresspesticides.com** for any refund help.`,
    options: [
      { text: "Cancellation Policy", nextStep: "cancellation_policy" },
      { text: "Email for Refund Help", nextStep: "contact_email" },
      { text: "Back to menu", nextStep: "start" },
    ],
  },

  cancellation_policy: {
    message: `**Cancellation Policy**  
*Effective Date:* **10 November 2025**

**Window**  
You may cancel **up to 24 hours** before the scheduled service.  
Cancellations after this period are **not eligible for a refund**.

**How to Cancel**  
• Email **info@expresspesticides.com**  
• Or use the contact number in your **booking confirmation email**.`,
    options: [
      { text: "Refund Policy", nextStep: "refund_policy" },
      { text: "Contact Us", nextStep: "link_contact" },
      { text: "Back to menu", nextStep: "start" },
    ],
  },

  contact_email: {
    message:
      "Drop us a mail at **info@expresspesticides.com**.\nWe reply within **24 hours**.",
    options: [{ text: "Back to menu", nextStep: "start" }],
  },

  // General FAQs (keeps the top-level ones)
  faqs: {
    message: "Frequently asked questions – pick one:",
    options: [
      { text: "What pests do you treat?", nextStep: "faq_pests" },
      { text: "How long does treatment last?", nextStep: "faq_duration" },
      { text: "Is it safe for kids & pets?", nextStep: "faq_safety" },
      { text: "Back to menu", nextStep: "start" },
    ],
  },
  faq_pests: {
    message:
      "We treat **20+ pests**:\n• Cockroaches • Termites • Ants • Rodents\n• Bed Bugs • Mosquitoes • and more.\nCheck the **Pest Library** for details!",
    options: [
      { text: "Explore Pest Library", nextStep: "link_pest_library" },
      { text: "More FAQs", nextStep: "faqs" },
    ],
  },
  faq_duration: {
    message:
      "Most treatments protect for **3–6 months**.\nQuarterly maintenance is recommended for best results.",
    options: [{ text: "More FAQs", nextStep: "faqs" }],
  },
  faq_safety: {
    message:
      "Yes! We use **EPA-approved, low-toxicity** products.\nKeep kids & pets away for **2–4 hours** after treatment.",
    options: [{ text: "More FAQs", nextStep: "faqs" }],
  },
};

/* Insert the service nodes into conversationTree based on servicesData */
Object.keys(servicesData).forEach((slug) => {
  const nodeKey = `service_${slug}`;
  const service = servicesData[slug];

  // Summary node
  conversationTree[nodeKey] = {
    message: `**${service.name}**\n\n${service.summary}`,
    options: [
      { text: "View FAQs", nextStep: `service_${slug}_faqs` },
      { text: "Book this service", nextStep: "book_service" },
      { text: "Back to Services", nextStep: "services" },
      { text: "Back to menu", nextStep: "start" },
    ],
  };

  // FAQs node for this service: combine Q/A into a readable message
  const faqLines = service.faqs
    .map((f, idx) => `**Q${idx + 1}: ${f.q}**\n${f.a}`)
    .join("\n\n");

  conversationTree[`service_${slug}_faqs`] = {
    message: `**${service.name} — FAQs**\n\n${faqLines}`,
    options: [
      { text: "Back to Service", nextStep: nodeKey },
      { text: "Back to Services", nextStep: "services" },
      { text: "Back to menu", nextStep: "start" },
    ],
  };
});

/* ========== Chatbot Component (JSX) ========== */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: conversationTree.start.message },
  ]);
  const [currentStep, setCurrentStep] = useState("start");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Render markdown-style text (supports **bold** and line breaks)
  const renderMessage = (text) => {
    const lines = String(text).split("\n");
    return lines.map((line, i) => {
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = line.split(boldRegex);

      return (
        <p key={i} className="mb-1">
          {parts.map((part, idx) =>
            idx % 2 === 1 ? (
              <strong key={idx} className="font-semibold text-blue-900">
                {part}
              </strong>
            ) : (
              <span key={idx}>{part}</span>
            )
          )}
        </p>
      );
    });
  };

  // Handle option click
  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { from: "user", text: option.text }]);

    const next = conversationTree[option.nextStep];
    if (!next) return;

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: next.message }]);
      setCurrentStep(option.nextStep);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const currentNode = conversationTree[currentStep];

  return (
    <>
      {/* ==== Chat Window ==== */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 md:w-96 h-[520px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl">
            <div className="flex items-center space-x-2">
              <Bot size={22} />
              <h3 className="font-bold text-lg">Express Pesticides Bot</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <X size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl shadow-sm whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {renderMessage(msg.text)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-gray-200 flex items-center space-x-1">
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Options / Links */}
          <div className="p-4 bg-white border-t border-gray-200 space-y-3">
            {/* External Link */}
            {currentNode.link && (
              <Link
                href={currentNode.link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition"
              >
                {currentNode.link.text}
              </Link>
            )}

            {/* Option Buttons */}
            <div className="space-y-2">
              {currentNode.options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 text-blue-700 font-medium py-2.5 px-4 rounded-lg border border-blue-300 transition flex items-center justify-between"
                >
                  {opt.text}
                  <Send size={16} className="text-blue-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==== Floating Button ==== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-transform hover:scale-110"
        aria-label="Chat"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </>
  );
}
