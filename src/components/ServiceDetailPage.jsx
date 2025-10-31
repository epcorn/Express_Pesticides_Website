// components/ServiceDetailPage.jsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCheckCircle } from "react-icons/fa";
import FAQItem from "@/components/FAQItem";

/* ============================================================= */
/* IMAGE MAP – hero, signs, gallery + FALLBACKS                  */
/* ============================================================= */
const serviceImages = {
  "green-shield": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890421/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/german_cockroach_jcuo0h.webp",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890422/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/ant_rfwaxe.webp",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890423/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/silverfish_fg7qbk.webp",
    ],
    gallery: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890549/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/WhatsApp_Image_2025-10-24_at_1.02.20_PM_scuyzu.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890586/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/WhatsApp_Image_2025-10-24_at_1.02.21_PM_dd7emq.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890572/Express_Pesticides_Website/SERVICES_IMAGES/Green%20shield/WhatsApp_Image_2025-10-24_at_1.02.21_PM_1_hy7qzp.jpg",
    ],
  },
  "rat-rid": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890434/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/pexels-denitsa-kireva-2915302-9783103_gq1c6s.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890431/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/Rat_damaged_01_oljzj7.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890429/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/Rat_damage_rahdbx.jpg",
    ],
    gallery: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890671/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/WhatsApp_Image_2025-10-24_at_12.05.04_PM_owsbe0.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890668/Express_Pesticides_Website/SERVICES_IMAGES/Ratrid/WhatsApp_Image_2025-10-24_at_12.03.14_PM_gbjv4t.jpg",
    ],
  },
  "termi-proof": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890439/Express_Pesticides_Website/SERVICES_IMAGES/Termiproof/shutterstock_1078415000_web-2_idemnv.webp",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890437/Express_Pesticides_Website/SERVICES_IMAGES/Termiproof/istockphoto-1300681997-612x612_pdeqf8.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890437/Express_Pesticides_Website/SERVICES_IMAGES/Termiproof/close-termites-on-woodhome-damaged-260nw-578777110_f5hvqy.webp",
    ],
    gallery: [],
  },
  "bug-free": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890410/Express_Pesticides_Website/SERVICES_IMAGES/Bugfree/bug_Background_rrdhcw.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890409/Express_Pesticides_Website/SERVICES_IMAGES/Bugfree/Bed-bug_IMage_bzodfr.webp",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890409/Express_Pesticides_Website/SERVICES_IMAGES/Bugfree/bedbugs_on_bed_cqaozy.webp",
    ],
    gallery: [],
  },
  flyban: {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890420/Express_Pesticides_Website/SERVICES_IMAGES/Flyban/fly-447307_1280_hjjzaz.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890419/Express_Pesticides_Website/SERVICES_IMAGES/Flyban/green-flies-on-food-garbage-260nw-440779216_utbqoz.png",
    ],
    gallery: [],
  },
  mosquit: {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890428/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/MOSQUITO-FACTS_xmtcp4.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890425/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/Mosquito_sv7q5e.webp",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890426/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/Mosquito_biite_qlrrnq.jpg",
    ],
    gallery: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890628/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/WhatsApp_Image_2025-10-24_at_12.12.33_PM_rxdslr.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890635/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/WhatsApp_Image_2025-10-24_at_12.47.24_PM_lzi3ae.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890617/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/WhatsApp_Image_2025-10-24_at_12.11.19_PM_ci6ili.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890631/Express_Pesticides_Website/SERVICES_IMAGES/Mosquit/WhatsApp_Image_2025-10-24_at_12.13.43_PM_l57ial.jpg",
    ],
  },
  woodsafe: {
    hero: "", // will use fallback
    signs: [],
    gallery: [],
  },
  "anti-termite-treatment": {
    hero: "https://res.cloudinary.com/epcorn/image/upload/v1761890369/Express_Pesticides_Website/SERVICES_IMAGES/Anti-termite/Termite_for_background_zbsitg.jpg",
    signs: [
      "https://res.cloudinary.com/epcorn/image/upload/v1761890369/Express_Pesticides_Website/SERVICES_IMAGES/Anti-termite/Termite_image_yt4hwy.jpg",
      "https://res.cloudinary.com/epcorn/image/upload/v1761890368/Express_Pesticides_Website/SERVICES_IMAGES/Anti-termite/Termite_damage_qekjam.jpg",
    ],
    gallery: [],
  },
};

/* FALLBACK IMAGES */
const fallback = {
  hero: serviceImages["green-shield"].hero,
  signs: serviceImages["green-shield"].signs,
  gallery: serviceImages["green-shield"].gallery,
};

/* GET IMAGES WITH FALLBACK */
function getImages(slug) {
  const img = serviceImages[slug] || {};
  return {
    hero: img.hero || fallback.hero,
    signs: img.signs?.length ? img.signs : fallback.signs,
    gallery: img.gallery?.length ? img.gallery : fallback.gallery,
  };
}

/* ============================================================= */
/* FAQ DATA – FULLY POPULATED FOR ALL SERVICES                   */
/* ============================================================= */
const faqData = {
  "green-shield": [
    { q: "What is the Green Shield Service?", a: "Green Shield Service is a certified Integrated Pest Management (IPM) program by Express Pesticides designed to control cockroaches, ants, and silverfish using gel baits with latest bait matrix combined with odorless spray applications for safe and effective results." },
    { q: "How does the treatment work?", a: "Trained applicators apply gel baits at critical infestation points where pests hide, followed by odorless spray to eliminate ants and silverfish. This dual-action approach ensures long-term protection." },
    { q: "Do you offer customized pest control plans for businesses?", a: "Absolutely. We conduct a detailed site audit and pest risk assessment, provide expert consultation on pest-proofing and sanitation, and implement tailored, sustainable IPM strategies for your facility." },
    { q: "How often should I schedule the Green Shield Service?", a: "For best results, we recommend quarterly or bi-monthly treatments depending on your property type, infestation level, and hygiene standards required. Regular monitoring ensures continued protection." },
  ],
  "rat-rid": [
    { q: "What types of rodents do you treat?", a: "We provide management plans for all types of common rodents such as rats, mice, and bandicoots that invade homes, offices, or commercial spaces. Our methods are effective for all typical infestations." },
    { q: "How do you detect a rodent problem?", a: "Our trained technicians inspect your property for signs like fecal droppings, gnaw marks, nesting signs, or unusual sounds. We also identify ingress points and areas prone to infestation for suggestive proofing works." },
    { q: "What rodent control methods do you use?", a: "We use a combination of eco-friendly baiting, trapping, and repelling sprays. Our methods are safe for humans and pets while ensuring long-term prevention." },
    { q: "Is your treatment safe for children and pets?", a: "Yes. All the rodenticides and traps are placed strategically to avoid non-targeted exposure, and we use non-toxic alternatives wherever possible." },
    { q: "How long does a treatment take?", a: "Initial inspection and setup usually take 1–2 hours. Near elimination may require follow-up visits over a period of 1–3 weeks depending on the severity of the pest infestation." },
  ],
  "termi-proof": [
    { q: "How do I know if my home has termites?", a: "Look for signs like hollow wood, mud tubes on walls, or discarded wings near windows. If you notice any of these, it’s time for a professional Termiscan® inspection using Termitrack backed professionals." },
    { q: "Is termite treatment safe for my family?", a: "Yes, our treatment uses approved, eco-safe chemicals applied by trained professionals — ensuring safety for your family and pets." },
    { q: "How long does the treatment protect my home?", a: "A single treatment can protect your home for up to 3–5 years, depending on the structure and maintenance of your property." },
    { q: "Can termites come back after treatment?", a: "Regular inspections and preventive maintenance keep your property termite-free. Our experts also provide after-treatment checks for complete reassurance of effective treatment." },
  ],
  "bug-free": [
    { q: "I keep seeing bedbugs even after cleaning — will your treatment really help?", a: "Yes! Regular cleaning can’t always reach bug hiding spots. Our professional treatment targets cracks, corners, and hidden areas to completely eliminate bugs and stop the re-infestation." },
    { q: "How soon will I see results?", a: "You’ll notice a big reduction in bug activity within 24–48 hours. Some bugs may appear briefly as they come in contact with the treatment — that’s a sign it’s working. May be a repeat application will need to be done." },
    { q: "Do I need to prepare my home before treatment?", a: "We recommend light cleaning and covering food or utensils before the service. Our technician will guide you through all necessary steps to ensure the best results." },
  ],
  flyban: [
    { q: "I keep getting flies even after cleaning — how will your treatment help?", a: "Flies often breed in hidden areas like drains, garbage bins, and moisture spots. Our professional treatment targets both adult flies and breeding sources, ensuring long-lasting control." },
    { q: "Is your treatment safe for food areas and kitchens?", a: "Yes, completely! We use odourless, food-safe, and government-approved products that can be safely used in kitchens, restaurants, and food-handling zones once the area is dry." },
    { q: "How long does it take to see results?", a: "You’ll notice fewer flies within a few hours of treatment. Full results are seen within 24–48 hours, depending on the severity of infestation and cleanliness of the area." },
    { q: "Do I need to leave the area during treatment?", a: "It’s recommended to keep safe distance for a few minutes, about 30–60 minutes post the treatment or spray treatment. Once the area is aired out, cleaned up post treatment, you can safely return and enjoy a fly-free environment." },
  ],
  mosquit: [
    { q: "How do you control mosquitoes?", a: "We use a combination of fogging, larvicidal treatment, and source reduction to eliminate mosquitoes at every life stage — from larvae to adults." },
    { q: "Is the treatment safe for my family and pets?", a: "Yes. We use WHO-approved, safe-eco friendly chemicals that are safe when applied by our trained technicians. The treatment area is ventilated post-application." },
    { q: "How long does the treatment last?", a: "One treatment provides protection for 2–3 weeks. We recommend monthly or bi-monthly services during peak mosquito season for continuous control." },
    { q: "Do you treat outdoor areas?", a: "Yes. We treat gardens, terraces, drains, and stagnant water zones to prevent mosquito breeding and entry into your home." },
  ],
  woodsafe: [
    { q: "What is Woodsafe treatment?", a: "Woodsafe is a preventive and curative treatment for wood-boring insects like powder post beetles and termites in wooden furniture and structures." },
    { q: "How is it applied?", a: "We drill small holes and inject specialized wood preservatives deep into the wood, followed by surface spraying for complete protection." },
    { q: "Is it safe for furniture?", a: "Yes. The chemicals are odorless, non-staining, and safe for indoor use. Your furniture remains usable after treatment." },
  ],
  "anti-termite-treatment": [
    { q: "When should I get pre-construction anti-termite treatment?", a: "It is mandatory during the foundation stage before slab casting. This creates a chemical barrier in the soil that prevents termites from entering the building." },
    { q: "How long does the treatment last?", a: "The soil treatment lasts up to 5–7 years. We provide a warranty and recommend periodic inspections." },
    { q: "Is it safe for construction workers?", a: "Yes. We follow strict safety protocols, and the area is cleared before workers resume." },
  ],
};

/* ============================================================= */
/* MAIN COMPONENT                                                */
/* ============================================================= */
export default function ServiceDetailPage({
  name,
  logo,
  subtitle,
  description,
  signs,
  benefits,
  types = [],
  slug,
}) {
  const img = getImages(slug);
  const faqs = faqData[slug] || [];

  return (
    <main className="pt-32">
      {/* ==== 1. HERO (logo on top, not covering) ==== */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src={img.hero}
          alt={`${name} hero`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-xl border-4 border-white">
            <Image src={logo} alt={name} fill className="object-contain p-2" />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">{name}</h1>
          <p className="mt-2 text-lg">{subtitle}</p>
        </div>
      </section>

      {/* ==== 2. INTRODUCTION ==== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Introduction</h2>
          <p
            className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br/>") }}
          />
        </div>
      </section>

      {/* ==== 3. SIGNS OF INFESTATION – RIGHT SIDE SWIPER ==== */}
      {(img.signs.length > 0 || signs.length > 0) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Signs of Infestation
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text List */}
              <ul className="space-y-4">
                {signs.map((s, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-800">{s}</span>
                  </li>
                ))}
              </ul>

              {/* Swiper Carousel */}
              <div className="lg:pl-10">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  {img.signs.map((src, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-80">
                        <Image
                          src={src}
                          alt={`Sign ${i + 1}`}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==== 4. BENEFITS ==== */}
      {benefits.length > 0 && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Benefits of {name}
            </h2>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start">
                  <FaCheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ==== 5. TYPES ==== */}
      {types.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Types of {name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {types.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center"
                >
                  <p className="text-lg font-semibold text-gray-800">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==== 6. SERVICE GALLERY ==== */}
      {img.gallery.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Service Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {img.gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==== 7. FAQ – NOW FULLY VISIBLE ==== */}
      {faqs.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <FAQItem key={i} question={f.q} answer={f.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==== 8. CONSUMER ASSURANCE ==== */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Trust Express Pesticides?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Certified technicians • Odorless, safe chemicals • Full documentation • Food-safety compliant
          </p>
        </div>
      </section>
    </main>
  );
}