import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      I wrap everything
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
