import type { AppProps } from "next/app";
import { ChakraProvider, Button } from '@chakra-ui/react';
import { system } from '../styles/theme';
import { makeServer } from "@/services/mirage";

// aqui original do chakra havia essa linha que fiz de outra forma nao sei como para funcionar
// import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
