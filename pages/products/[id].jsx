import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainLayout from "../../components/Layout";
import { Row, Col, Typography, Button, Checkbox, Alert, message } from "antd";
import * as styles from "../../styles/product.module.less";
import {
  addToCart,
  selectCartItems,
  selectCartQuantity,
} from "../../store/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
const { Title } = Typography;
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title: product.title,
        id: uuid(),
        image: product.image,
        extras,
        price,
      })
    );
    message.success("Product has been added to the cart.", 3);
    setIsAddToCartDisabled(true);
    setTimeout(() => {
      setIsAddToCartDisabled(false);
    }, 1500);
  };
  return (
    <MainLayout>
      <Row style={{ height: "calc(100vh - 160px)" }} gutter={[34, 0]}>
        <Col lg={14} xs={24} className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              width={1200}
              height={800}
              alt="product"
              src={product.image}
            ></Image>
          </div>
        </Col>
        <Col lg={10} xs={24}>
          <Row className={styles.content}>
            <Col xs={20}>
              <Title level={4}>{product.title}</Title>
            </Col>
            <Col xs={4}>
              <Title level={4}>${price}</Title>
            </Col>
          </Row>
          <p style={{ width: "90%" }}>{product.description}</p>
          <h3>Size</h3>
          <Row gutter={14}>
            <Col>
              <Button onClick={() => handleSize(0)}>Small</Button>
            </Col>
            <Col>
              <Button onClick={() => handleSize(1)}>Medium</Button>
            </Col>
            <Col>
              <Button onClick={() => handleSize(2)}>Large</Button>
            </Col>
          </Row>

          <h3 className="mt-1">Extra Options</h3>
          <Row gutter={14}>
            {product.extraOptions.map((option) => (
              <Col key={option._id}>
                <Checkbox onChange={(e) => handleChange(e, option)}>
                  {option.text}
                </Checkbox>
              </Col>
            ))}
          </Row>
          <Button
            type="primary"
            block
            size="large"
            style={{
              marginTop: "1rem",
            }}
            onClick={handleAddToCart}
            disabled={isAddToCartDisabled}
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://6304962b27eb164c0303d4d1--tourmaline-paletas-896288.netlify.app/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data.product,
    },
  };
};
