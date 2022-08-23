import HomeNav from "./HomeNavbar";
import { Layout } from "antd";
import Image from "next/image";
import * as styles from "../styles/layout.module.less";
import Navbar from "./Navbar";
const { Content, Footer } = Layout;
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const MainLayout = ({ children, home }) => {
  return (
    <>
      {home ? (
        <div className={styles.homeContainer} style={{ minHeight: "100vh" }}>
          <Image
            layout="fill"
            src="/img/bg.jpg"
            alt="background, food, tasty, olives, wooden background, cooking, plate, kitchen, gourmet, nutrition, dish, delicious, appetizer, gastronomy, dinner, salt, pepper, table, spices, spoons, tomatoes, greens, cheese, Free Images In PxHere"
          ></Image>
          <HomeNav />
          <div className={styles.bottomRight}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <InstagramOutlined style={{ fontSize: "2rem" }} />
              <FacebookOutlined style={{ fontSize: "2rem" }} />
              <TwitterOutlined style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Content>
            <div className="container" style={{ minHeight: "100vh" }}>
              {children}
            </div>
          </Content>
        </>
      )}
      <Footer style={{ textAlign: "center" }}>
        Restaurant ©2022 Powered By Nimesh Maharjan
      </Footer>
    </>
  );
};

export default MainLayout;
