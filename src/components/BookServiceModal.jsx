"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Script from "next/script"; 

export default function BookServiceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isPincodeValid, setIsPincodeValid] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState("idle"); 
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitMessage, setSubmitMessage] = useState(""); 

  const [formData, setFormData] = useState({
    serviceType: "single", 
    service: "",
    duration: "",
    frequency: "",
    name: "",
    email: "",
    phone: "",
    address1: "", 
    address2: "", 
    address3: "", 
    location: "",
    city: "",
  });

  // --- Mock Data ---
  const mockPincodes = ["400054", "110001", "560001"];
  const services = {
    single: ["One-Time Pest Control", "Termite Inspection", "Bed Bug Treatment"],
    contract: ["Annual Pest Management (AMC)", "Rodent Control Contract", "Disinfection Services"],
  };
  const durations = ["1 Month", "3 Months", "6 Months", "1 Year"];
  const frequencies = [
    "Daily", "Alternate Days", "Twice a Week", "Thrice a Week", "Weekly", "Fortnightly",
    "Thrice a Month", "Monthly", "Alternate Monthly", "Quarterly", 
    "3 Services (Once in 4 Months)", "2 Services (Once in 6 Months)"
  ];
  // --- End Mock Data ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  useEffect(() => {
    if (formData.service) {
      let baseCost = 1000;
      if (formData.serviceType === "contract-based") baseCost *= 6;
      if (formData.frequency.includes("Daily")) baseCost *= 3;
      setCalculatedCost(baseCost);
    } else {
      setCalculatedCost(0);
    }
  }, [formData.service, formData.serviceType, formData.frequency, formData.duration]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!formData.name || !formData.email || !formData.phone || !formData.address1) {
       setSubmitMessage("Please fill in all personal and address details.");
       setIsSubmitting(false);
       return;
    }
    
    if (calculatedCost <= 0) {
      setSubmitMessage("Please select a service to see the cost.");
      setIsSubmitting(false);
      return;
    }

    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: calculatedCost }),
      });
      if (!orderRes.ok) throw new Error("Failed to create order");
      const orderData = await orderRes.json();
      
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: orderData.amount,
        currency: "INR",
        name: "Express Pesticides",
        description: `Payment for ${formData.service}`,
        order_id: orderData.id,
        
        handler: async function (response) {
          setSubmitMessage("Verifying payment...");
          try {
            //
            // --- THIS IS THE CORRECTED PART ---
            //
            // We now send all the form data to the backend API
            // so it can build and send the invoice.
            //
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                formData: formData, // <-- This sends all order details
                cost: calculatedCost, // <-- This sends the cost
              }),
            });
            //
            // --- END OF CORRECTION ---
            //

            if (verifyRes.ok) {
              setSubmitMessage("Payment successful! Your service is booked.");
              setFormData({ 
                serviceType: "single", service: "", duration: "", frequency: "", name: "", 
                email: "", phone: "", address1: "", address2: "", address3: "", location: "", city: "" 
              });
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
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#3B82F6",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on('payment.failed', function (response) {
          setSubmitMessage(`Payment failed: ${response.error.description}`);
          setIsSubmitting(false);
      });

    } catch (error) {
      setSubmitMessage(`Error: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script 
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 bg-blue-600 text-white font-bold py-3 px-5 rounded-l-lg shadow-lg transform transition-transform hover:bg-blue-700 hover:-translate-x-1"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Book a Service
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Book Your Service</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              {!isPincodeValid ? (
                <div className="space-y-4">
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Enter your Pincode to check serviceability:</label>
                  <input
                    type="tel"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter 6-digit Pincode"
                  />
                  <button
                    onClick={handlePincodeCheck}
                    disabled={pincodeStatus === "loading"}
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    {pincodeStatus === "loading" ? "Checking..." : "Check Availability"}
                  </button>
                  {pincodeStatus === "invalid" && (
                    <p className="text-red-600 text-sm text-center">Sorry, we do not service this pincode yet.</p>
                  )}
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 font-medium">
                      Pincode: {pincode} (Serviceable)
                      <button type="button" onClick={resetPincode} className="text-blue-600 hover:underline ml-2 font-normal text-sm">(Change)</button>
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Type <span className="text-red-500">*</span></label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                      <option value="single">Single Service</option>
                      <option value="contract-based">Contract-Based</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select a Service <span className="text-red-500">*</span></label>
                    <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                      <option value="">-- Select --</option>
                      {formData.serviceType === "single"
                        ? services.single.map(s => <option key={s} value={s}>{s}</option>)
                        : services.contract.map(s => <option key={s} value={s}>{s}</option>)
                      }
                    </select>
                  </div>

                  {formData.serviceType === 'contract-based' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 bg-gray-50 rounded-md border">
                       <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration <span className="text-red-500">*</span></label>
                        <select name="duration" value={formData.duration} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                          <option value="">-- Select --</option>
                          {durations.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Frequency <span className="text-red-500">*</span></label>
                        <select name="frequency" value={formData.frequency} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                          <option value="">-- Select --</option>
                          {frequencies.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address 1 (Building/Apt Name) <span className="text-red-500">*</span></label>
                    <input type="text" name="address1" value={formData.address1} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address 2 (Flat/Office No.) <span className="text-red-500">*</span></label>
                      <input type="text" name="address2" value={formData.address2} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address 3 (Road/Street) <span className="text-red-500">*</span></label>
                      <input type="text" name="address3" value={formData.address3} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                  </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location / Landmark <span className="text-red-500">*</span></label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                  </div>
                  
                  <div className="pt-5 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-medium text-gray-600">Total Estimated Cost:</span>
                      <span className="text-2xl font-bold text-blue-600">₹ {calculatedCost.toLocaleString('en-IN')}</span>
                    </div>
                    <button
                      type="submit"
                      disabled={!formData.service || isSubmitting}
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : "Proceed to Payment"}
                    </button>
                    {submitMessage && (
                      <p className={`mt-4 text-center text-sm ${submitMessage.includes('failed') || submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                        {submitMessage}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
