export const mockPincodes = [
  "400001",
  "400002",
  "400003",
  "400004",
  "400005",
  "400006",
  "400007",
  "400008",
  "400009",
  "400010",
  "400011",
  "400012",
  "400013",
  "400014",
  "400015",
  "400016",
  "400017",
  "400018",
  "400019",
  "400020",
  "400021",
  "400022",
  "400023",
  "400024",
  "400025",
  "400026",
  "400027",
  "400028",
  "400029",
  "400030",
  "400031",
  "400032",
  "400033",
  "400034",
  "400035",
  "400036",
  "400037",
  "400038",
  "400039",
  "400040",
  "400042",
  "400043",
  "400046",
  "400047",
  "400049",
  "400050",
  "400051",
  "400052",
  "400053",
  "400054",
  "400055",
  "400056",
  "400057",
  "400058",
  "400059",
  "400060",
  "400061",
  "400062",
  "400063",
  "400064",
  "400065",
  "400066",
  "400067",
  "400068",
  "400069",
  "400070",
  "400072",
  "400074",
  "400075",
  "400076",
  "400077",
  "400078",
  "400079",
  "400080",
  "400081",
  "400082",
  "400083",
  "400084",
  "400085",
  "400086",
  "400087",
  "400088",
  "400089",
  "400090",
  "400091",
  "400092",
  "400093",
  "400094",
  "400095",
  "400096",
  "400097",
  "400098",
  "400099",
  "400101",
  "400102",
  "400103",
  "400104",
  // Virar, Vasai, Nalasopara (401xxx)
  "401101",
  "401102",
  "401103",
  "401104",
  "401201",
  "401202",
  "401203",
  "401204",
  "401205",
  "401206",
  "401207",
  "401208",
  "401209",
  "401301",
  "401302",
  "401303",
  "401304",
  "401305",
  "401401",
  "401402",
  "401403",
  "401404",
  "401405",
  "401501",
  "401502",
  "401503",
  "401504",
  "401601",
  "401602",
  "401603",
  "401604",
  "401605",
  "401606",
  "401607",
  "401608",
  "401609",
  "401610",
  "401701",
  "401702",
  "401703",
  "401704",
  "401705",
  "401708",
];

export const holidays = ["08-15", "01-26"];

export const expressInvoiceHtml = ({ formData, calculatedCost = 10 }) => {
  return `
 <html>

<head>
  <style>
    /* Global Resets for 1-Page Constraint */
    @page {
      size: A4;
      margin: 0;
    }
    
    body {
      font-family: Arial, sans-serif;
      padding: 20px 30px;
      color: #333;
      line-height: 1.4;
      font-size: 12px;
      max-width: 800px;
      margin: 0 auto;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid #3B82F6;
      padding-bottom: 12px;
      margin-bottom: 15px;
    }

    .company-title-area {
      display: flex;
      flex-direction: column;
    }

    .company-name {
      font-size: 22px;
      font-weight: bold;
      color: #1E3A8A;
      line-height: 1.1;
    }
    
    .invoice-meta {
      text-align: right;
      font-size: 11px;
    }
    
    .invoice-title {
      font-size: 16px;
      font-weight: bold;
      color: #3B82F6;
      margin: 0 0 2px 0;
    }

    .invoice-meta p {
      margin: 2px 0;
    }

    .logo-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
    }

    .logo-img {
      height: 55px;
      object-fit: contain;
    }

    /* 2-Column Space Saving Grid Layout */
    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .card {
      border: 1px solid #E5E7EB;
      padding: 10px 12px;
      border-radius: 6px;
      background-color: #F9FAFB;
    }

    .section-title {
      font-size: 13px;
      font-weight: bold;
      margin-bottom: 6px;
      color: #1E3A8A;
      border-bottom: 1px solid #E5E7EB;
      padding-bottom: 2px;
    }

    .card div {
      margin-bottom: 3px;
    }

    /* Bottom Financial Section */
    .footer-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      border-top: 1px dashed #D1D5DB;
      padding-top: 12px;
    }

    .total {
      font-size: 16px;
      font-weight: bold;
      color: #10B981;
      background-color: #ECFDF5;
      border: 1px solid #A7F3D0;
      padding: 8px 16px;
      border-radius: 4px;
    }
    
    .terms-text {
      font-size: 10px;
      color: #6B7280;
      max-width: 60%;
    }

  </style>
</head>

<body>
  <!-- Brand Logo Placement -->
  <div class="logo-container">
    <img class="logo-img" src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png" alt="Express Pesticides Logo"/>
  </div>

  <!-- Document Header -->
  <div class="header">
    <div class="company-title-area">
      <div class="company-name">Express Pesticides Pvt. Ltd.</div>
      <div style="font-size: 10px; color: #6B7280;">Epcorn Pest Management Division</div>
    </div>
    <div class="invoice-meta">
      <h1 class="invoice-title">Booking Invoice / Receipt</h1>
      <p><strong>Date:</strong> ${new Date(formData?.createdAt).toLocaleString("en-IN", { day: "2-digit", month: "long", year: "numeric", hourCycle: "h24" })}</p>
    </div>
  </div>

  <!-- Balanced 2-Column Section Layout -->
  <div class="details-grid">
    
    <!-- Column 1: Customer Info -->
    <div class="card">
      <div class="section-title">Customer Details</div>
      <div><strong>Name:</strong> ${formData?.name || ""}</div>
      <div><strong>Email:</strong> ${formData?.email || ""}</div>
      <div><strong>Phone:</strong> ${formData?.phone || ""}</div>
      <div><strong>Pref. Day:</strong> ${formData?.preferredDay || ""}</div>
      <div><strong>Pref. Time:</strong> ${formData?.preferredTime || ""}</div>
    </div>
    
    <!-- Column 2: Order Reference Tracking -->
    <div class="card">
      <div class="section-title">Payment Reference</div>
      <div><strong>Order ID:</strong> ${formData?.orderId || ""}</div>
      <div><strong>Payment ID:</strong> ${formData?.paymentId || ""}</div>
    </div>

    <!-- Column 1: Core Service Metadata -->
    <div class="card">
      <div class="section-title">Service Ordered</div>
      <div><strong>Service:</strong> ${formData?.category || ""}</div>
      <div><strong>Category:</strong> ${formData?.subcategory || ""}</div>
      <div><strong>Type:</strong> ${formData?.serviceType || ""}</div>
      <div><strong>Area Scope:</strong> ${formData?.area || ""} / ${formData?.bhkType || ""}</div>
      <div><strong>Schedule Date:</strong> ${formData?.dateOfService || formData?.firstServiceDate || ""}</div>
    </div>

    <!-- Column 2: Operational Target Address -->
    <div class="card">
      <div class="section-title">Service Address</div>
      <div><strong>Address:</strong> ${formData.sameAsShipping ? "Same as Service Address" : "Diffrent from Service Address"}</div>
      <div><strong>Address:</strong> ${[formData?.serviceAddress1, formData?.serviceAddress2, formData?.serviceAddress3].filter(Boolean).join(", ")}</div>
      <div><strong>City/Loc:</strong> ${formData?.serviceCity || ""}, ${formData?.serviceLocation || ""}</div>
      <div><strong>Pincode:</strong> ${formData?.servicePincode || ""}</div>
    </div>

    <!-- Full Span Row Split: Billing Profile -->
    <div class="card" style="grid-column: span 2;">
      <div class="section-title">Billing Address</div>
      <div><strong>Address:</strong> ${[formData?.billingAddress1, formData?.billingAddress2, formData?.billingAddress3].filter(Boolean).join(", ")}</div>
      <div><strong>City / Location / Pin:</strong> ${formData?.billingCity || ""} ${formData?.billingLocation || ""} - ${formData?.billingPincode || ""}</div>
    </div>
  </div>

  <!-- Pricing Aggregations Block -->
  <div class="footer-section">
    <div class="terms-text">
      * This is an electronically generated invoice acknowledgement. Tax calculations include GST at standard rates.
    </div>
    <div class="total">
      Total Paid: ₹ ${(1.18 * calculatedCost || 0).toFixed(2)}
    </div>
  </div>
</body>

</html>
`;
};

export const printInvoiceDirectly = ({ formData }) => {
  const htmlContent = expressInvoiceHtml({
    formData,
  });

  // Create an invisible iframe
  const iframe = document.createElement("iframe");
  iframe.style.position = "absolute";
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  iframe.style.border = "none";

  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(htmlContent);
  doc.close();

  // Wait for content to render, then open print dialog
  iframe.contentWindow.focus();
  setTimeout(() => {
    iframe.contentWindow.print();
    // Remove the hidden iframe after printing
    document.body.removeChild(iframe);
  }, 500);
};
