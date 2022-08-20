// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ProductModel from "../../../models/product";
import connectMongo from "../../../utils/database";

export default async function handler(req, res) {
  await connectMongo();
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        const product = await ProductModel.findById(id);
        return res.status(200).json({
          success: true,
          product,
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    case "PUT":
      try {
        const { image } = req.body;
        const product = await ProductModel.findByIdAndUpdate(
          id,
          { image: image },
          {
            new: true,
          }
        );
        return res.status(201).json({
          message: "Product added successfully",
          success: true,
          product,
        });
      } catch (error) {
        return res.status(500).json(error);
      }
  }
}
