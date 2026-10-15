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

export const expressInvoiceHtml = ({ formData }) => {
  const date = new Date(formData?.dateOfService).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const orderPlaced = new Date(formData?.createdAt).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

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
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .logo-img {
      height: 95px;
      object-fit: contain;
    }

    .addrs {
      margin: 0;

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
    <div class="addrs-container">
      <p class="addrs">
        <strong>Regd. Office: </strong><span> S - 5 Khira Industrial Estate,<br /> B.M. Bhargav Road, Santacruz (W),<br /> Mumbai - 400 054</span>
      </p>
      <p class="addrs" style="">
        <strong>Tel: </strong><span> 9138 6600 / 2661 5745 / 6691 4400</span>
      </p>
      <p class="addrs"><strong>Email: epcorn@yahoo.in ● Visit us: www.expresspesticides.com</strong></p>
    </div>
    <img class="logo-img" src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png" alt="Express Pesticides Logo"/>
  </div>

  <p style="text-align:center;">
    <strong>Service Type: <strong/><span> ${formData?.serviceType}<span/>
  </p>
  <div style="display:grid;grid-template-columns:1fr 1fr; border:1px solid black;">
    <div style="border:1px solid #000;padding:10px;">
      <strong>Name: </strong><span> ${formData?.name || ""}</span><br />
      <strong>Email: </strong><span> ${formData?.email || ""}</span><br />
      <strong>Phone: </strong><span> ${formData?.phone || ""}</span><br />
      <strong>Order placed on: </strong><span> ${orderPlaced || ""}</span><br />
      <strong>Order id:</strong> <span>${formData.orderId}</span><br />
      <strong>Payment id:</strong> <span>${formData.paymentId}</span>
    </div>
    <div style="border:1px solid #000; padding:10px;">
      <strong>Service Date: </strong><span> ${date || ""}</span><br />
      <strong>Preffered Day: </strong><span> ${formData?.preferredDay || ""}</span><br />
      <strong>Service time: </strong><span> ${formData?.preferredTime || ""}</span><br />
      <strong>Phone: </strong><span> ${formData?.phone || ""}</span><br />
      <div>
      <strong>Address:</strong> ${formData.sameAsShipping ? "Same as Service Address" : "Diffrent from Service Address"}</div>
      <div><strong>Address:</strong> ${[
        formData?.serviceAddress1,
        formData?.serviceAddress2,
        formData?.serviceAddress3,
      ]
        .filter(Boolean)
        .join(", ")}</div>
      <div><strong>City/Loc:</strong> ${formData?.serviceCity || ""}, ${formData?.serviceLocation || ""}</div>
      <div><strong>Pincode:</strong> ${formData?.servicePincode || ""}</div>
    </div>
  </div>
  <div style="border:1px solid #000; margin-top:5px; display:grid;grid-template-columns:3fr 1fr; ">
    <p style="border:1px solid #000;padding:10px;margin:0;">Particaulars</p>
    <p style="border:1px solid #000;padding:10px;margin:0;">Amount</p>
    <div style="border:1px solid #000;padding:10px;margin:0;">
      <!-- Full Span Row Split: Billing Profile -->
      <div style="grid-column: span 2;">
        <div style="margin-top:60px;">Billing Address</div>
        <div><strong>Address:</strong> ${[
          formData?.billingAddress1,
          formData?.billingAddress2,
          formData?.billingAddress3,
        ]
          .filter(Boolean)
          .join(", ")}</div>
        <div><strong>City / Location / Pin:</strong> ${formData?.billingCity || ""} ${formData?.billingLocation || ""} -
          ${formData?.billingPincode || ""}</div>
      </div>
      <div style="margin-top:90px;">
        <p><b>Bill Amount: </b></p>
        <p><b>GST 18%: </b></p>
      </div>
    </div>
    <div style="border:1px solid #000; padding:10px; text-align:right;display:flex;flex-direction:column; ">
      <p style="margin-top:auto">${formData.serviceAmount}</p>
      <p>${formData.gstAmt}</p>
    </div>
    <div style="border:1px solid #000;padding:10px;margin:0;"><b>Total Paid:</b></div>
    <div style="border:1px solid #000;padding:10px;margin:0; text-align:right"><b>₹ ${formData?.amountPaid}</b></div>
  </div>
  </div>
  </div>
  <div style="margin-top:5px; border:2px solid #000;font-weight:800;font-size:1rem; text-align:right;">
    <p>For Express pesticides PVT. LTD.</p>
    <p style="margin-top:6.2rem; font-size:0.8rem;display:flex;justify-content:space-between;padding:0 10px;"><span>Date:</span><span>Authorised Signatory</span></p>
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
