// app/services/[slug]/page.js

import ServiceDetailPage from "@/components/ServiceDetailPage";
import Footer from "@/components/Footer";
import {servicesData} from "@/data/servicesData";



export default function Page({ params }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  return (
    <>
      <ServiceDetailPage {...service} slug={slug} />
      <Footer />
    </>
  );
}