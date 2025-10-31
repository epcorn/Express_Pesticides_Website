"use client";

import { useState, useEffect } from "react";
import { servicesData } from "../app/services/lib/ServiceData.js";

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

  // 🔢 Cost calculation logic (same as BookServiceModal)
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
  const subcategories =
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          Get Instant Quote
        </h2>
        <p className="text-gray-600 text-lg">
          Choose your service details below to calculate an instant price estimate.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
        {/* Service Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Service Category</label>
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
              className="w-full px-3 py-2 border rounded"
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
          {subcategories.length > 0 && (
            <div>
              <label className="block font-medium mb-1">Subcategory</label>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">-- Select --</option>
                {subcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Area or BHK Type */}
          {formData.category === "Civil Work" ? (
            <div>
              <label className="block font-medium mb-1">Area (sq.ft)</label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter total area"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          ) : (
            bhkOptions?.length > 0 && (
              <div>
                <label className="block font-medium mb-1">Property Type</label>
                <select
                  name="bhkType"
                  value={formData.bhkType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
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
            <label className="block font-medium mb-1">Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="single">Single Service</option>
              <option value="annual">Annual Contract</option>
            </select>
          </div>
        </div>

        {/* Cost Display */}
        {calculatedCost > 0 && (
          <div className="text-center mt-8">
            <div className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-full shadow-sm">
              <span className="font-medium">Estimated Price: </span>
              <span className="font-bold text-lg">
                ₹ {calculatedCost.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
