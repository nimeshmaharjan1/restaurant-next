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
              color: "#F2F4F3",
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
          backgroundColor: "#49111C",
          color: "#F2F4F3",
          fontFamily: "MonteCarlo",
        }}
      >
        <Link href="/product/123" passHref>
          <Title
            level={5}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "400",
              cursor: "pointer",
              color: "#F2F4F3",
            }}
          >
            Order
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
              color: "#F2F4F3",
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
              color: "#F2F4F3",
            }}
          >
            About Us
          </Title>
        </Link>
        <Divider></Divider>
      </Drawer>
    </>
  );
};

export default Navbar;
