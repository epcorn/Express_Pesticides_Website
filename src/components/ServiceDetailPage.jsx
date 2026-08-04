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
import { faqData, servicePestImages } from "@/data/servicesData";


/* FALLBACK IMAGES */
const fallback = {
  hero: servicePestImages["green-shield"].hero,
  signs: servicePestImages["green-shield"].signs,
  gallery: servicePestImages["green-shield"].gallery,
};

/* GET IMAGES WITH FALLBACK */
function getImages(slug) {
  const img = servicePestImages[slug] || {};
  return {
    hero: img?.hero || "",
    signs: img?.signs?.length ? img.signs : "",
    gallery: img?.gallery?.length ? img.gallery : "",
    // hero: img.hero || fallback.hero,
    // signs: img.signs?.length ? img.signs : fallback.signs,
    // gallery: img.gallery?.length ? img.gallery : fallback.gallery,
  };
}

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
    <main className="">
      {/* ==== 1. HERO (logo on top, not covering) ==== */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src={img?.hero}
          alt={`${name} hero`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Added relative positioning to the badge wrapper so fill works correctly */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="relative w-24 h-24 overflow-hidden rounded-full  shadow-xl">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-cover scale-110"
            />
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
      {(img?.signs?.length > 0 || signs?.length > 0) && (
        <section className="py-16 bg-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Signs of Infestation
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text List */}
              <ul className="space-y-4">
                {signs?.map((s, i) => (
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
                  {img?.signs?.length > 0 && img?.signs?.map((src, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-96">
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
      {benefits?.length > 0 && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Benefits of {name}
            </h2>
            <ul className="space-y-4">
              {benefits?.map((b, i) => (
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
      {types?.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Types of {name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {types?.map((t, i) => (
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
                  className="group relative aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-100 scale-125"
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