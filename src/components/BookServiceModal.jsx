"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Script from "next/script";
import { servicesData } from "../app/services/lib/ServiceData.js";
import { holidays, mockPincodes } from "@/data/bookservicemodelData.js";
import postalcodes from "postalcodes-india"

export default function BookServiceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isPincodeValid, setIsPincodeValid] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState("idle");
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    bhkType: "",
    serviceType: "single",
    name: "",
    email: "",
    phone: "",
    dateOfService: "",
    firstServiceDate: "",
    preferredTime: "",
    preferredDay: "",
    area: "",
    // Service Address (Ship To)
    serviceAddress1: "",
    serviceAddress2: "",
    serviceAddress3: "",
    serviceLocation: "",
    servicePincode: "",
    serviceCity: "",
    // Billing Address (Bill To)
    sameAsShipping,
    billName: "",
    billPhone: "",
    billEmail: "",
    billingAddress1: "",
    billingAddress2: "",
    billingAddress3: "",
    billingLocation: "",
    billingPincode: "",
    billingCity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "dateOfService" || name === "firstServiceDate") {
      const now = new Date();
      let tommorrow = new Date();
      const checkMonday = new Date(value)

      tommorrow.setDate(now.getDate() + 1);
      tommorrow = tommorrow.toISOString().split("T")[0]

      // if(holidays)
      if (holidays.includes(value.slice(5)))
        return alert("OOps! Its holiday. Choose another date.")


      if (value === tommorrow && now.getHours() >= 14) {
        setFormData((prev) => ({
          ...prev,
          dateOfService: "",
          firstServiceDate: "",
        }));
        alert("Please select another day. after 2pm you cannot get appointment for next day");
        return;
      }
      //monday if off
      if (checkMonday.getDay() === 1) {
        alert("Monday off, ready to go on Tuesday! Please select another day for your appointment.")
        setFormData((prev) => ({
          ...prev,
          dateOfService: "",
          firstServiceDate: "",
        }));
        return;
      }
    }
    //conditions for pincodes
    if (name === "servicePincode" && value.length === 6) {
      //if pincode not available in Our DB
      const res = postalcodes.find(value)
      const info = Array.isArray(res) ? res[0] : res;

      if (!mockPincodes.includes(value)) {
        alert("Area is not servicable");
        setFormData((prev) => ({
          ...prev, servicePincode: "", serviceLocation: '', serviceCity: ""
        }))
        return;
      }
      // check for (pincode) and (servicepincode)
      if (pincode !== value) {
        const goAhead = confirm(`you checked for ${pincode} and you have entered ${value}. \nwanna proceed`);
        if (!goAhead) return;
        if (info) {
        }
        else {
          setFormData((prev) => ({ ...prev, servicePincode: value }))
          console.warn("Pincode details not found ")
        }
      }
      const city = info.subDistrict.split(" ")[0] === info.district ? info.place.split(" ")[0] : info.subDistrict.split(/[ \(]/)[0]
      setFormData((prev) => ({
        ...prev, serviceLocation: city, serviceCity: info.district,
      }))
      // else {
      //   alert(`you checked for ${pincode} and you have entered ${value}`)
      // }
    }
  };

  const handlePincodeCheck = () => {
    setPincodeStatus("loading");
    setTimeout(() => {
      if (mockPincodes.includes(pincode)) {
        setIsPincodeValid(true);
        setPincodeStatus("idle");
      } else {
        setIsPincodeValid(false);
        setPincodeStatus("invalid");
      }
    }, 1000);
  };

  const resetPincode = () => {
    setIsPincodeValid(false);
    setPincode("");
    setPincodeStatus("idle");
  };

  // 🔢 Calculate cost dynamically
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

  // Sync billing address if sameAsShipping is checked
  useEffect(() => {
    if (sameAsShipping) {
      setFormData((prev) => ({
        ...prev,
        billName: prev.name,
        billPhone: prev.phone,
        billEmail: prev.email,
        billingAddress1: prev.serviceAddress1,
        billingAddress2: prev.serviceAddress2,
        billingAddress3: prev.serviceAddress3,
        billingLocation: prev.serviceLocation,
        billingPincode: prev.servicePincode,
        billingCity: prev.serviceCity,
      }));
    }
  }, [sameAsShipping, formData.serviceAddress1, formData.servicePincode, formData.phone, formData.serviceAddress2, formData.serviceAddress3, formData.serviceLocation, formData.serviceCity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(false);
    setSubmitMessage("");

    if (calculatedCost <= 0) {
      setSubmitMessage("Please select valid service options.");
      setIsSubmitting(false);
      return;
    }
    handlePayment();
  };

  const handlePayment = async () => {
    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1.18 * calculatedCost }),
      });

      if (!orderRes.ok) throw new Error("Failed to create order");
      const orderData = await orderRes.json();


      //payment modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_TEST,
        amount: orderData.amount,
        currency: "INR",
        name: "Express Pesticides",
        image: "https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png",
        description: `Payment for ${formData.category}`,
        order_id: orderData.id,
        notes: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceAddress: `${formData.serviceAddress1}-${formData.serviceAddress2}-${formData.serviceAddress3}, ${formData.serviceLocation}, ${formData.serviceCity} - ${formData.servicePincode}`,
          billingAddress: `${formData.billingAddress1}-${formData.billingAddress2}-${formData.billingAddress3}, ${formData.billingLocation}, ${formData.billingCity} - ${formData.billingPincode}`,
          serviceType: formData.serviceType,
          servicedate: formData.dateOfService || formData.firstServiceDate
        },
        method: {
          netbanking: true, upi: true, card: true, wallet: false, emi: false, paylater: false
        },
        handler: async function (response) {
          setSubmitMessage("Verifying payment...");
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                formData,
                cost: 1.18 * calculatedCost,
              }),
            });

            if (verifyRes.ok) {
              setSubmitMessage("Payment successful! Your service is booked.");
              setTimeout(() => {
                setIsOpen(false);
                setSubmitMessage("");
              }, 3000);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (err) {
            setSubmitMessage(`Payment verification failed: ${err.message}`);
          }
          setIsSubmitting(false);
        },
        modal: {
          ondismiss: function () {
            setSubmitMessage("Error: Payment was cancelled")
            setIsSubmitting(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#3B82F6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on("payment.failed", function (response) {
        setSubmitMessage(`Payment failed: ${response.error.description}`);
        setIsSubmitting(false);
      });
    } catch (error) {
      setSubmitMessage(`Error: ${error.message}`);
      setIsSubmitting(false);
    }
  }

  const categories = Object.keys(servicesData);
  const bhkOptions =
    formData.category &&
    (formData.subcategory
      ? Object.keys(servicesData[formData.category][formData.subcategory] || {})
      : Object.keys(servicesData[formData.category] || {}).filter(
        (key) => key.includes("BHK") || key.includes("RK")
      ));

  const preferredTimeSlots = [
    "9–11 AM",
    "11–12 AM",
    "12–1 PM",
    "1–3 PM",
    "3–5 PM",
    "5–7 PM",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else
      document.body.style.overflow = "auto"
  }, [isOpen])


  //testing purpose
  const anotherSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formData) console.log(formData)
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 bg-blue-600 text-white font-bold py-5 px-3 lg:px-5 rounded-l-lg shadow-lg hover:bg-blue-700 cursor-pointer transition-all"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Book a Service
      </button >
      

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm dark:text-black">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hidden">
            <div className="sticky top-0 bg-white  flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold">Book Your Service</h2>
              <button onClick={() => setIsOpen(false)} className="border rounded-full p-1 text-red-600 hover:bg-red-200 hover:text-white cursor-pointer transition-all">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {!isPincodeValid ? (
                <>
                  <label className="font-medium">Enter Pincode:</label>
                  <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter 6-digit pincode"
                  />
                  <button
                    onClick={handlePincodeCheck}
                    className="w-full bg-blue-600 text-white py-2 rounded mt-2"
                    disabled={pincodeStatus === "loading"}
                  >
                    {pincodeStatus === "loading"
                      ? "Checking..."
                      : "Check Availability"}
                  </button>
                  {pincodeStatus === "invalid" && (
                    <p className="text-red-600 text-sm text-center mt-2">
                      Sorry, we do not service this pincode yet.
                    </p>
                  )}
                </>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-green-50 border border-green-300 p-2 rounded">
                    <p>
                      Pincode: {pincode} (Serviceable){" "}
                      <button
                        type="button"
                        onClick={resetPincode}
                        className="text-blue-600 underline text-sm ml-2"
                      >
                        Change
                      </button>
                    </p>
                  </div>

                  {/* CATEGORY SELECTION */}
                  <div>
                    <label className="block font-medium mb-1">
                      Service Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                    >
                      <option value="">-- Select Category --</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* BHK or AREA */}
                  {formData.category === "Civil Work" ? (
                    <div>
                      <label className="block font-medium mb-1">
                        Area (in sq.ft)
                      </label>
                      <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Enter total area"
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                  ) : (
                    bhkOptions?.length > 0 && (
                      <div>
                        <label className="block font-medium mb-1">
                          Property Type
                        </label>
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

                  {/* SERVICE TYPE */}
                  <div>
                    <label className="block font-medium mb-1">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                    >
                      <option value="single">Single Contract Service</option>
                      <option value="annual">Annual Contract Service</option>
                    </select>
                    {formData.serviceType === "annual" && (
                      <p className="text-sm text-green-700 mt-1">
                        ✅ Annual Contract includes <strong>3 free service visits</strong> throughout the contract period.
                      </p>
                    )}
                  </div>

                  {/* DATE & TIME */}
                  {formData.serviceType === "single" ? (
                    <div>
                      <label className="block font-medium mb-1">
                        Date of Service
                      </label>
                      <input
                        type="date"
                        name="dateOfService"
                        value={formData.dateOfService}
                        min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block font-medium mb-1">
                          First Service Start Date
                        </label>
                        <input
                          type="date"
                          min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]}
                          name="firstServiceDate"
                          value={formData.firstServiceDate}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-medium mb-1">
                          Preferred Day
                        </label>
                        <select
                          name="preferredDay"
                          value={formData.preferredDay}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded"
                          required
                        >
                          <option value="">-- Select Day --</option>
                          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                            (d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </>
                  )}

                  {/* PREFERRED TIME */}
                  <div>
                    <label className="block font-medium mb-1">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    >
                      <option value="">-- Select Time Slot --</option>
                      {preferredTimeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CONTACT DETAILS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                  </div>

                  {/* SERVICE ADDRESS */}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-lg mb-2 text-blue-700">
                      Ship To (Service Address)
                    </h3>
                    <input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />
                    <input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />
                    <input
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />
                    <input
                      name="serviceAddress1"
                      placeholder="Address Line 1 (Building/Office Name)"
                      value={formData.serviceAddress1}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />
                    <input
                      name="serviceAddress2"
                      placeholder="Address Line 2 (Flat/Office No)"
                      value={formData.serviceAddress2}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                    />
                    <input
                      name="serviceAddress3"
                      placeholder="Address Line 3 (Road/Lane Name)"
                      value={formData.serviceAddress3}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                    />
                    <input
                      type="text"
                      name="servicePincode"
                      placeholder="Pincode"
                      value={formData.servicePincode}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />
                    <input
                      name="serviceLocation"
                      placeholder="Location"
                      value={formData.serviceLocation}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />
                    {/* <input
                      name="serviceLandmark"
                      placeholder="Landmark"
                      value={formData.serviceLandmark}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    /> */}
                    <input
                      name="serviceCity"
                      placeholder="City"
                      value={formData.serviceCity}
                      onChange={handleChange}
                      className="border px-3 py-2 rounded w-full mb-2"
                      required
                    />

                  </div>

                  {/* BILLING ADDRESS */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg text-blue-700">
                        Bill To (Billing Address)
                      </h3>
                      <label className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          checked={sameAsShipping}
                          onChange={(e) => setSameAsShipping(e.target.checked)}
                        />
                        <span>Same as Service Address</span>
                      </label>
                    </div>

                    {!sameAsShipping && (
                      <>
                        <input
                          name="billName"
                          placeholder="Full Name"
                          value={formData.billName}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />
                        <input
                          name="billPhone"
                          placeholder="Phone Number"
                          value={formData.billPhone}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />
                        <input
                          name="billEmail"
                          placeholder="Email Address"
                          value={formData.billEmail}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />
                        <input
                          name="billingAddress1"
                          placeholder="Address Line 1 (Building/Office Name)"
                          value={formData.billingAddress1}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />
                        <input
                          name="billingAddress2"
                          placeholder="Address Line 2 (Flat/Office No)"
                          value={formData.billingAddress2}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                        />
                        <input
                          name="billingAddress3"
                          placeholder="Address Line 3 (Road/Lane Name)"
                          value={formData.billingAddress3}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                        />
                        <input
                          name="billingPincode"
                          placeholder="Pincode"
                          value={formData.billingPincode}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />
                        <input
                          name="billingLocation"
                          placeholder="Location"
                          value={formData.billingLocation}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />
                        {/* <input
                          name="billingLandmark"
                          placeholder="Landmark"
                          value={formData.billingLandmark}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        /> */}
                        <input
                          name="billingCity"
                          placeholder="City"
                          value={formData.billingCity}
                          onChange={handleChange}
                          className="border px-3 py-2 rounded w-full mb-2"
                          required
                        />

                      </>
                    )}
                  </div>

                  {/* COST DISPLAY */}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        Total Estimated Cost:
                      </span>
                      <span className="font-bold text-blue-600 text-lg">
                        ₹{" "}
                        {(1.18 * calculatedCost).toLocaleString("en-IN") +
                          " (Incl. 9% CGST & 9% SGST)"}
                      </span>
                    </div>
                    {submitMessage && (
                      <p
                        className={`mt-3 text-center ${submitMessage.includes("failed") ||
                          submitMessage.includes("Error")
                          ? "text-red-600"
                          : "text-green-600"
                          }`}
                      >
                        {submitMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
                    >
                      {isSubmitting ? "Processing..." : "Proceed to Payment"}
                    </button>

                    <div className="mt-6 text-center text-sm text-gray-600">
                      <p>
                        By booking, you agree to our{" "}
                        <a
                          href="/cancellation-policy"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Cancellation Policy
                        </a>
                        ,{" "}
                        <a
                          href="/refund-policy"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Refund Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Data Policy
                        </a>
                        .
                      </p>
                    </div>


                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}
