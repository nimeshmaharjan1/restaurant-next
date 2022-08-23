import axios from "axios";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
// export const getServerSideProps = async () => {
//   const response = await axios.get("http://localhost:3000/api/products");
//   return {
//     props: { pizzaList: response.data.products },
//   };
// };
