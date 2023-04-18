import "../styles/main.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Zetfilx - The top streaming platform in the world</h1>
      <Component {...pageProps} />
    </>
  );
}
