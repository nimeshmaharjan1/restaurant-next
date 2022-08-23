import React, { useEffect, useState } from "react";
import {
  removeItem,
  resetCart,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Col,
  Row,
  Table,
  Card,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  message,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";
const { Title } = Typography;
const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [customer, setCustomer] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [paymentMethod, setPaymentMethod] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      key: "product",
      render: (image) => (
        <Image height={150} width={200} src={image} alt="product" />
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
    {
      title: "Actions",
      dataIndex: "id",
      key: "remove",
      render: (id) => (
        <div style={{ textAlign: "center" }}>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </Button>
        </div>
      ),
    },
  ];

  const makeOrder = async () => {
    const form = {
      customer,
      address,
      phoneNumber,
      email,
      paymentMethod: 0,
      total,
    };
    try {
      axios
        .post(
          "https://6304962b27eb164c0303d4d1--tourmaline-paletas-896288.netlify.app/api/orders",
          form
        )
        .then(() => {
          message.success("Order has been created successfully", 5);
        });
      dispatch(resetCart());
      setIsModalVisible(false);
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

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
                {cartItems.length < 1 ? "Add Items" : "Add More"}
              </Link>
            }
          >
            <Title level={5}>Subtotal: ${total}</Title>
            <Title level={5}>Discount: $0</Title>
            <Title level={5}>Total: ${total}</Title>
            <Button
              type="primary"
              block
              size="large"
              onClick={() => setIsModalVisible(true)}
              disabled={cartItems.length < 1}
            >
              Cash On Delivery
            </Button>
          </Card>
        </Col>
      </Row>
      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        title="Delivery Details"
        footer={null}
        okText="Submit"
        centered
      >
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 16 }}
          onFinish={makeOrder}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please input your full name" }]}
          >
            <Input onChange={(e) => setCustomer(e.target.value)}></Input>
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input onChange={(e) => setAddress(e.target.value)}></Input>
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your phone number." },
            ]}
          >
            <Input onChange={(e) => setPhoneNumber(e.target.value)}></Input>
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please input your email." }]}
          >
            <Input onChange={(e) => setEmail(e.target.value)}></Input>
          </Form.Item>{" "}
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default Cart;
