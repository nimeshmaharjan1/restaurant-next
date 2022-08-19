import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);
export default mongoose.models.products ||
  mongoose.model("products", ProductSchema);
