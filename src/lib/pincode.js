
import postalData from "@/data/india-pincodes.json";

export function lookupPincode(value) {
  const code = String(value).trim();

  if (!/^\d{6}$/.test(code)) {
    return null;
  }

  return postalData.filter(
    (item) => String(item.pincode) === code
  );
}
