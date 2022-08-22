import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainLayout from "../../components/Layout";

const Product = () => {
  const [size, setSize] = useState(0);

  return <MainLayout>Product</MainLayout>;
};

export default Product;

// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(
//     `http://localhost:3000/api/products/${params.id}`
//   );
//   return {
//     props: {
//       product: res.data.product,
//     },
//   };
// };
