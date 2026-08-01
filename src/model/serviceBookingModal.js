import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    paymentId: { type: String, required: true },
    amountPaid: { type: Number, required: true },
    paymentStatus: { type: String, default: "Success" },

    category: { type: String, default: null },
    subcategory: { type: String, default: null },
    bhkType: { type: String, default: null },
    serviceType: { type: String, default: null },
    name: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    dateOfService: { type: Date, default: null },
    firstServiceDate: { type: Date, default: null },
    preferredTime: { type: String, default: null },
    preferredDay: { type: String, default: null },
    area: { type: String, default: null },

    serviceAddress1: { type: String, default: null },
    serviceAddress2: { type: String, default: null },
    serviceAddress3: { type: String, default: null },
    serviceLocation: { type: String, default: null },
    servicePincode: { type: Number, default: null },
    serviceCity: { type: String, default: null },

    sameAsShipping: { type: Boolean, default: true },
    billName: { type: String, default: null },
    billPhone: { type: String, default: null },
    billEmail: { type: String, default: null },
    billingAddress1: { type: String, default: null },
    billingAddress2: { type: String, default: null },
    billingAddress3: { type: String, default: null },
    billingLocation: { type: String, default: null },
    billingPincode: { type: Number, default: null },
    billingCity: { type: String, default: null },
  },
  { timestamps: true },
);

const ServiceBooking =
  mongoose.models.ServiceBooking ||
  mongoose.model("ServiceBooking", serviceSchema);

export default ServiceBooking;
