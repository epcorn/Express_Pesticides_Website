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
  console.log(slug);
  const card = whyChooseUsData.find(
    (item) => createSlug(item.heading) === slug,
  );

  if (!card) notFound();

  return (
    <div className="content-center h-96">
      <h3 className="text-center">Content Comming Soon...</h3>
    </div>
  );
}
