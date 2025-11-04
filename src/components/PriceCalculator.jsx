"use client";

import { useState, useEffect } from "react";
import { servicesData } from "../app/services/lib/ServiceData";

export default function PriceCalculator() {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    bhkType: "",
    serviceType: "single",
    area: "",
  });

  const [calculatedCost, setCalculatedCost] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { category, subcategory, bhkType, serviceType, area } = formData;

    if (!category || !serviceType) {
      setCalculatedCost(0);
      return;
    }

    const selectedCategory = servicesData[category];
    if (!selectedCategory) {
      setCalculatedCost(0);
      return;
    }

    if (selectedCategory.perSqFt) {
      const sqft = parseFloat(area) || 0;
      setCalculatedCost(sqft * selectedCategory.rate);
      return;
    }

    if (subcategory && selectedCategory[subcategory]) {
      const bhkPricing = selectedCategory[subcategory][bhkType];
      setCalculatedCost(bhkPricing ? bhkPricing[serviceType] || 0 : 0);
    } else if (!subcategory && selectedCategory[bhkType]) {
      const bhkPricing = selectedCategory[bhkType];
      setCalculatedCost(bhkPricing ? bhkPricing[serviceType] || 0 : 0);
    } else {
      setCalculatedCost(0);
    }
  }, [formData]);

  const categories = Object.keys(servicesData);
    formData.category &&
    typeof servicesData[formData.category] === "object" &&
    !servicesData[formData.category].perSqFt
      ? Object.keys(servicesData[formData.category]).filter(
          (key) =>
            typeof servicesData[formData.category][key] === "object" &&
            !servicesData[formData.category][key].perSqFt
        )
      : [];

  const bhkOptions =
    formData.category &&
    (formData.subcategory
      ? Object.keys(servicesData[formData.category][formData.subcategory] || {})
      : Object.keys(servicesData[formData.category] || {}).filter(
          (key) => key.includes("BHK") || key.includes("RK")
        ));

  return (
<section className="py-10 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6 mt-0">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 border-2 border-solid border-[#00bfff] shadow-[0_0_15px_#00bfff] p-2">
  Instant Quote
</h2>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Get your instant price estimate.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-5 sm:p-6 md:p-8 space-y-6">
        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Category */}
          <div>
            <label className="block font-medium mb-1 text-sm sm:text-base">
              Choose your service
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => {
                handleChange(e);
                setFormData((p) => ({
                  ...p,
                  subcategory: "",
                  bhkType: "",
                  area: "",
                }));
              }}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            >
              <option value="">-- Select --</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory */}
         

          {/* Area or BHK */}
          {formData.category === "Civil Work" ? (
            <div>
              <label className="block font-medium mb-1 text-sm sm:text-base">
                Area (sq.ft)
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter total area"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>
          ) : (
            bhkOptions?.length > 0 && (
              <div>
                <label className="block font-medium mb-1 text-sm sm:text-base">
                  Property Type
                </label>
                <select
                  name="bhkType"
                  value={formData.bhkType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                >
                  <option value="">-- Select --</option>
                  {bhkOptions.map((bhk) => (
                    <option key={bhk} value={bhk}>
                      {bhk}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}

          {/* Service Type */}
          <div>
            <label className="block font-medium mb-1 text-sm sm:text-base">
              Choose your contract 
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            >
              <option value="single">Single Service Contract</option>
              <option value="annual">Annual Service Contract</option>
            </select>
          </div>
        </div>

        {/* Estimated Price */}
        {calculatedCost > 0 && (
          <div className="text-center mt-6 sm:mt-8">
            <div className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-full shadow-sm text-sm sm:text-base">
              <span className="font-medium">Estimated Price: </span>
              <span className="font-bold text-lg sm:text-xl">
                ₹ {calculatedCost.toLocaleString("en-IN") + " + GST"} 
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
