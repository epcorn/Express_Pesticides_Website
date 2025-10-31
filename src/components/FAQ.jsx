"use client";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What services are offered?",
    answer:
      "A complete range of pest management and hygiene solutions is provided, which includes management of cockroaches, ants, rodents, termites, bed bugs, along with sanitization and disinfection services. All treatments use safe-eco and branded chemicals for maximum safety and effectiveness.",
  },
  {
    question: "Are the pest control treatments safe for children, pets, and the environment?",
    answer:
      "Yes. All services follow Integrated Pest Management (IPM) practices using odorless, eco-friendly, and approved formulations. Treatments are designed to be safe, sustainable, and non-disruptive to daily activities.",
  },
  {
    question: "How is service quality and reliability ensured?",
    answer:
      "Services are performed by trained and certified professionals following documented standard operating procedures (SOPs). Quality is maintained through digital reporting, routine audits, and continuous monitoring to ensure consistent and transparent delivery.",
  },
  {
    question: "Are customized pest management plans available for different industries?",
    answer:
      "Yes. Tailor-made pest management programs are designed for residential, commercial, industrial, retail, food processing, medical and hospitality sectors. Each plan begins with a site audit and pest risk assessment to ensure the most effective and suitable solution.",
  },
  {
    question: "Is there any warranty or guarantee provided for services?",
    answer:
      "Certain treatments, such as termite management, include a multi-year guarantee program offering long-term protection. Preventive pest management services also come with scheduled follow-ups and updated visits to ensure lasting results.",
  },
  {
    question: "How can a pest control service be scheduled?",
    answer:
      "A service can be booked easily via phone, email, or the website inquiry form. After an optional site inspection, a customized quotation is shared, and the service is scheduled at a time convenient for the client.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-black mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Here are answers to the most common questions about our pest control services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
