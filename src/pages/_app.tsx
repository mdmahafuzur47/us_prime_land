import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./_layout";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store} >
      <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
