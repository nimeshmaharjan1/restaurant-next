import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import "../styles/antd.less";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";
import { useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.onRouteChangeStart = (url) => {
    NProgress.start();
    setIsLoading(true);
  };
  Router.onRouteChangeComplete = () => {
    setIsLoading(false);
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    setIsLoading(false);
    NProgress.done();
  };
  return (
    <Provider store={store}>
      <Loader loading={isLoading}></Loader>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
