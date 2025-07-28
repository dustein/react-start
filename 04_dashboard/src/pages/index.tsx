import { Button, Flex, Input } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg={"gray.800"} p={8} borderRadius={8} flexDirection={"column"}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <Button colorPalette="pink">Botão rosa</Button>
        <Button type="submit" mt={6} colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  );
}
