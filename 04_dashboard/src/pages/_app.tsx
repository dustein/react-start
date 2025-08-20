import type { AppProps } from "next/app";
import { ChakraProvider, Button } from '@chakra-ui/react';
import { system } from '../styles/theme';
import { makeServer } from "@/services/mirage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

// aqui original do chakra havia essa linha que fiz de outra forma nao sei como para funcionar
// import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
