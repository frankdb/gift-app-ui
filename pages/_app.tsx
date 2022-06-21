import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import giftAppTheme from "../styles/gift-app-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={giftAppTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
