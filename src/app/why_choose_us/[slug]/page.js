// /app/why_choose_us/[slug]/page.jsx
import WhyChooseUsClient from "@/components/WhyChooseUsClient";
import { whyChooseUsData } from "@/data/why-choose-us";
import { notFound } from "next/navigation";


export const createSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w_]/g, "");

export async function generateStaticParams() {
  return whyChooseUsData.map((card) => ({
    slug: createSlug(card.heading),
  }));
}

export default async function WhyChooseUsDetailPage({ params }) {
  const { slug } = await params;

  const card = whyChooseUsData.find(
    (item) => createSlug(item.heading) === slug,
  );

  if (!card) notFound();

  return <WhyChooseUsClient card={card} />;
}
