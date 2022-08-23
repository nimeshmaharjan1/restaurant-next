import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import Image from "next/image";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{ cursor: "pointer" }}
      cover={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          alt="example"
          src={product.image}
        />
      }
      actions={<button>Add to Cart</button>}
    >
      <Meta title={product.title} description={`$${product.prices[0]}`} />
    </Card>
  );
};

export default ProductCard;
