import OrderModel from "../../../models/order";
import connectMongo from "../../../utils/database";

export default async function handler(req, res) {
  const { method } = req;
  await connectMongo();
  switch (method) {
    case "GET":
      try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json(error);
      }
    case "POST":
      try {
        const order = await OrderModel.create(req.body);
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json(error);
      }
  }
}
