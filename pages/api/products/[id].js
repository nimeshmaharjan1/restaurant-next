// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ProductModel from "../../../models/product";
import connectMongo from "../../../utils/database";

export default async function handler(req, res) {
  connectMongo();
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
    case "DELETE":
  }
}
