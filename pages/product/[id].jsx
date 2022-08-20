import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [size, setSize] = useState(0);

  return <h1>Product</h1>;
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
