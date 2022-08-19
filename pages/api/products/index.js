// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ProductModel from "../../../models/product";
import connectMongo from "../../../utils/database";

export default async function handler(req, res) {
  connectMongo();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await ProductModel.find();
        return res.status(200).json({
          success: true,
          products,
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    case "POST":
      try {
        const product = await ProductModel.create(req.body);
        return res.status(201).json({
          message: "Product added successfully",
          success: true,
          product,
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    case "PUT":
    case "DELETE":
  }
}
