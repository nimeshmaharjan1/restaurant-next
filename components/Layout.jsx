import HomeNav from "./HomeNavbar";
import { Layout } from "antd";
import Image from "next/image";
import * as styles from "../styles/layout.module.less";
import Navbar from "./Navbar";
const { Content, Footer } = Layout;
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
            <h1>Hello</h1>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Content style={{ minHeight: "100vh" }}>
            <div className="container">{children}</div>
          </Content>
        </>
      )}
      <Footer style={{ textAlign: "center", marginTop: "2rem" }}>
        Restaurant ©2022 Powered By Nimesh Maharjan
      </Footer>
    </>
  );
};

export default MainLayout;
