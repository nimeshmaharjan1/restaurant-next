import React, { useEffect } from "react";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import MainLayout from "../../components/Layout";
import { Col, Row, Table, Card, Typography, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Title } = Typography;
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  console.log(cartItems);
  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      key: "product",
      render: (image) => (
        <div style={{ textAlign: "center" }}>
          <Image height={150} width={200} src={image} alt="product" />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Extras",
      dataIndex: "extras",
      key: "Extras",
      render: (extras) => extras.map((extra) => extra.text).join(", "),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
      render: (price) => <p style={{ margin: 0 }}>${price}</p>,
    },
  ];

  return (
    <MainLayout>
      <Row className="mt-2" style={{ marginBottom: "2rem" }} gutter={[24, 10]}>
        <Col xs={24} lg={16} className="cart-table">
          <Table
            columns={columns}
            dataSource={cartItems}
            hideOnSinglePage={true}
            bordered
          ></Table>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title={<Title level={4}>Cart Total</Title>}
            extra={
              <Link href="/products" passHref>
                Add more
              </Link>
            }
          >
            <Title level={5}>Subtotal: ${total}</Title>
            <Title level={5}>Discount: $0</Title>
            <Title level={5}>Total: ${total}</Title>
            <Button type="primary" block size="large">
              Cash On Delivery
            </Button>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Cart;
