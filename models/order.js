import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    paymentMethod: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);
export default mongoose.models.products ||
  mongoose.model("orders", OrderSchema);
