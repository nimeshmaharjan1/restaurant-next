import { Provider } from "react-redux";
import Layout from "../components/Layout";
import store from "../store";
import "../styles/globals.css";
import "../styles/antd.less";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
