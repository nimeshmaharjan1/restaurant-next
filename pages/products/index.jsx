import React from "react";
import MainLayout from "../../components/Layout";
import { Typography, Row, Col } from "antd";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import Link from "next/link";
const Products = ({ products }) => {
  console.log(products);
  const { Title } = Typography;
  return (
    <MainLayout>
      <h3 className="page-title">Products</h3>
      <Row gutter={[24, 24]}>
        {products &&
          products.map((product) => (
            <Link href={`/products/${product._id}`} passHref key={product._id}>
              <Col sm={24} md={12} lg={6}>
                <ProductCard product={product}></ProductCard>
              </Col>
            </Link>
          ))}
      </Row>
    </MainLayout>
  );
};

export default Products;
export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  console.log(response.data);
  return {
    props: { products: response.data.products },
  };
};
