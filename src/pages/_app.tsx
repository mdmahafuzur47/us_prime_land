import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./_layout";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
