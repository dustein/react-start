import { Button, Flex, Stack } from "@chakra-ui/react"
import { InputComponent } from "@/components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg={"gray.800"} p={8} borderRadius={8} flexDirection={"column"}>

        <Stack gap={4}>

          <InputComponent name="email" label="e-mail" helpertext="Insira seu e-mail." required={true} />
          <InputComponent name="password" label="Senha" helpertext="Insira sua senha." />

        </Stack>

        <Button colorPalette="pink" type="submit" mt={6}  >Entrar</Button>
        
      </Flex>
    </Flex>
  );
}
