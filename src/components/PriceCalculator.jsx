"use client";

import { useState } from "react";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import Button from "./Button";

const services = ["Pest Control", "Rodent Control", "Termite Treatment"];
const areas = ["Home", "Office", "Warehouse"];
const types = ["Basic", "Advanced", "Premium"];

export default function PriceCalculator() {
  const [service, setService] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [pincode, setPincode] = useState("");
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    if (service && area && type && pincode) {
      const base = 500;
      const calculated =
        base *
        (services.indexOf(service) + 1) *
        (areas.indexOf(area) + 1) *
        (types.indexOf(type) + 1);
      setPrice(calculated);
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          Check Our Pricing
        </h2>
        <p className="text-gray-600 text-lg">
          Select your service, area, and type to get an instant quote.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 grid gap-6 md:grid-cols-2">
        <SelectInput
          label="Service"
          options={services}
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
        <SelectInput
          label="Area"
          options={areas}
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <SelectInput
          label="Type"
          options={types}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextInput
          label="Pincode"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <div className="md:col-span-2 flex justify-center">
          <Button onClick={calculatePrice}>Get Price</Button>
        </div>
      </div>

{price && (
  <div className="mt-8 flex justify-center">
    <div className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full shadow-sm flex items-center space-x-2">
      <span className="font-medium">Estimated Price:</span>
      <span className="font-bold text-lg">₹{price}</span>
    </div>
  </div>
)}

    </section>
  );
}
