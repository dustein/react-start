import type { AppProps } from "next/app";
import { ChakraProvider, Button } from '@chakra-ui/react';
import { system } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
