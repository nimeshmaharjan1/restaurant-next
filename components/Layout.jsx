import Navbar from "./Navbar";
import { Layout } from "antd";
import Image from "next/image";
import * as styles from "../styles/layout.module.less";
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
          <Navbar />
          <div className={styles.bottomRight}>
            <h1>Hello</h1>
          </div>
        </div>
      ) : (
        <h1>GHANTA</h1>
      )}
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </>
  );
};

export default MainLayout;
