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

const esc = (v) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

const fmtDate = (v, withTime = false) => {
  if (!v) return "";
  const d = new Date(v);
  if (isNaN(d)) return "";
  return d.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    ...(withTime ? { hour: "numeric", minute: "numeric" } : {}),
    timeZone: "Asia/Kolkata",
  });
};

const money = (n) =>
  Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export function expressInvoiceHtml({ formData }) {
  const f = formData || {};
  const isAnnual = f.serviceType === "annual";

  const serviceDate = fmtDate(isAnnual ? f.firstServiceDate : f.dateOfService);
  const orderPlaced = fmtDate(f.createdAt || new Date(), true);

  const join = (...parts) => parts.filter(Boolean).map(esc).join(", ");

  const serviceAddress = join(
    f.serviceAddress1,
    f.serviceAddress2,
    f.serviceAddress3,
  );
  const billingAddress = join(
    f.billingAddress1,
    f.billingAddress2,
    f.billingAddress3,
  );

  const hasDiscount = Number(f.discountAmount) > 0;

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  body { font-family: Arial, sans-serif; padding: 20px 30px; color: #333; line-height: 1.4; font-size: 12px; }
  .top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
  .top p { margin: 0 0 4px 0; }
  .logo { height: 80px; object-fit: contain; }
  h2 { text-align: center; color: #1E3A8A; margin: 8px 0; font-size: 16px; }
  table { width: 100%; border-collapse: collapse; }
  td, th { border: 1px solid #000; padding: 8px 10px; vertical-align: top; text-align: left; }
  .half { width: 50%; }
  .right { text-align: right; }
  .items td { height: 110px; }
  .sig { margin-top: 8px; border: 2px solid #000; padding: 8px 10px; text-align: right; font-weight: bold; }
  .sig .row { display: flex; justify-content: space-between; margin-top: 70px; font-size: 11px; }
  .terms { margin-top: 8px; font-size: 10px; color: #6B7280; }
</style>
</head>
<body>
  <div class="top">
    <div>
      <p><strong>Regd. Office:</strong> S - 5 Khira Industrial Estate, B.M. Bhargav Road,<br/>Santacruz (W), Mumbai - 400 054</p>
      <p><strong>Tel:</strong> 9138 6600 / 2661 5745 / 6691 4400</p>
      <p><strong>Email:</strong> epcorn@yahoo.in &nbsp;●&nbsp; <strong>Web:</strong> www.expresspesticides.com</p>
    </div>
    <img class="logo" src="https://res.cloudinary.com/epcorn/image/upload/v1762003702/Express_Pesticides_Website/HOMEPAGE_IMAGES/Express_pestcide_logo_transparent_ra6ld9.png" alt="Express Pesticides" />
  </div>

  <h2>TAX INVOICE &mdash; ${esc(f.category)} (${isAnnual ? "Annual Contract" : "Single Service"})</h2>

  <table>
    <tr>
      <td class="half">
        <strong>Name:</strong> ${esc(f.name)}<br/>
        <strong>Email:</strong> ${esc(f.email)}<br/>
        <strong>Phone:</strong> ${esc(f.phone)}<br/>
        <strong>Booked on:</strong> ${esc(orderPlaced)}<br/>
        <strong>Order ID:</strong> ${esc(f.orderId)}<br/>
        <strong>Payment ID:</strong> ${esc(f.paymentId)}
      </td>
      <td class="half">
        <strong>${isAnnual ? "First Service Date" : "Service Date"}:</strong> ${esc(serviceDate)}<br/>
        ${isAnnual ? `<strong>Preferred Day:</strong> ${esc(f.preferredDay)}<br/>` : ""}
        <strong>Time Slot:</strong> ${esc(f.preferredTime)}<br/>
        ${f.bhkType ? `<strong>Property:</strong> ${esc(f.bhkType)}<br/>` : ""}
        ${f.area ? `<strong>Area:</strong> ${esc(f.area)} sq.ft<br/>` : ""}
        <strong>Service Address:</strong> ${serviceAddress}<br/>
        <strong>City / Location:</strong> ${esc(f.serviceCity)}, ${esc(f.serviceLocation)} &ndash; ${esc(f.servicePincode)}
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <strong>Billing Address:</strong>
        ${esc(f.billName || f.name)}, ${billingAddress}${billingAddress ? ", " : ""}${esc(f.billingCity)} ${esc(f.billingLocation)} &ndash; ${esc(f.billingPincode)}
      </td>
    </tr>
  </table>

  <table style="margin-top:8px" class="items">
    <tr>
      <th style="width:75%">Particulars</th>
      <th class="right">Amount (₹)</th>
    </tr>
    <tr>
      <td>
        ${esc(f.category)}${f.subcategory ? ` &ndash; ${esc(f.subcategory)}` : ""}
        ${f.bhkType ? `(${esc(f.bhkType)})` : ""}<br/>
        ${isAnnual ? "Annual Contract Service (includes 3 free visits)" : "Single Contract Service"}
      </td>
      <td class="right">${money(f.serviceAmount)}</td>
    </tr>
    ${
      hasDiscount
        ? `<tr><td>Discount${f.couponCode ? ` (${esc(f.couponCode)})` : ""}</td><td class="right">- ${money(f.discountAmount)}</td></tr>`
        : ""
    }
    <tr style="height:auto"><td style="height:auto">GST 18%</td><td class="right" style="height:auto">${money(f.gstAmt)}</td></tr>
    <tr style="height:auto"><td style="height:auto"><b>Total Paid</b></td><td class="right" style="height:auto"><b>₹ ${money(f.amountPaid)}/-</b></td></tr>
  </table>

  <div class="sig">
    <div>For Express Pesticides PVT. LTD.</div>
    <div class="row"><span>Date: ${esc(fmtDate(new Date()))}</span><span>Authorised Signatory</span></div>
  </div>

  <p class="terms">This is a computer-generated invoice.</p>
</body>
</html>`;
}

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
