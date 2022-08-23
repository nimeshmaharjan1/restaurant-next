import { Col, Divider, Drawer, Layout, Menu, Row, Typography } from "antd";
import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Title } = Typography;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Row align="middle" style={{ paddingTop: "1rem" }}>
        <Col xs={12} style={{ paddingLeft: "2rem" }}>
          <Title level={2} style={{ fontFamily: "MonteCarlo" }}>
            Restaurant
          </Title>
        </Col>
        <Col xs={12}>
          <Row align="middle" justify="end">
            <Col xs={2}>
              <MenuOutlined
                onClick={() => setIsMenuOpen(true)}
                style={{ fontSize: "2rem", color: "black", cursor: "pointer" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Drawer
        title={
          <Title
            level={2}
            style={{
              margin: "0",
              fontFamily: "montecarlo",
              fontWeight: "400",
            }}
          >
            Navigation
          </Title>
        }
        placement="right"
        closable={false}
        onClose={() => setIsMenuOpen(false)}
        visible={isMenuOpen}
        drawerStyle={{
          backgroundColor: "#e7e9eb",
          fontFamily: "MonteCarlo",
        }}
      >
        <Link href="/products" passHref>
          <Title
            level={5}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "400",
              cursor: "pointer",
            }}
          >
            Products
          </Title>
        </Link>
        <Divider></Divider>
        {/* <Link href="/product/123" passHref>
          <Title
            level={5}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "400",
              cursor: "pointer",
            }}
          >
            Menu
          </Title>
        </Link>
        <Divider></Divider>
        <Link href="/product/123" passHref>
          <Title
            level={5}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "400",
              cursor: "pointer",
            }}
          >
            About Us
          </Title>
        </Link>
        <Divider></Divider> */}
      </Drawer>
    </>
  );
};

export default Navbar;
