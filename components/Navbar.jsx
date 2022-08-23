import Link from "next/link";
import React, { useEffect } from "react";
import * as styles from "../styles/navbar.module.less";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, selectCartQuantity } from "../store/cart/cartSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(selectCartQuantity);
  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h3
          style={{ cursor: "pointer", fontSize: "1.5rem", fontWeight: "600" }}
        >
          <Link href="/" passHref>
            Restaurant
          </Link>
        </h3>
      </div>
      <div className={styles.links}>
        <Link href="/" passHref>
          <h3 className={styles.fromLeft}>Home</h3>
        </Link>
        <Link href="/products" passHref>
          <h3 className={styles.fromLeft}>Products</h3>
        </Link>
        <Badge count={cartQuantity}>
          <Link href="/cart" passHref>
            <ShoppingCartOutlined
              className={styles.fromLeft}
              size="large"
              style={{ fontSize: "1.5rem" }}
            />
          </Link>
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;
