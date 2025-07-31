import { Button, Field, FieldHelperText, Flex, Input, Stack } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg={"gray.800"} p={8} borderRadius={8} flexDirection={"column"}>

        <Stack gap={4}>

        <Field.Root required>
          <Field.Label>
            E-mail <Field.RequiredIndicator />
          </Field.Label>
          <Input name="email" type="email" _hover={{bgColor: 'gray.700'}} focusRingColor="pink.300"/>
          <FieldHelperText>Insira seu e-mail.</FieldHelperText>
        </Field.Root>
        <Field.Root required>
          <Field.Label>
            Senha
          </Field.Label>
          <Input name="password" type="password" _hover={{bgColor: 'gray.700'}} focusRingColor="pink.300"/>
          <FieldHelperText>Insira sua senha.</FieldHelperText>
        </Field.Root>        
        


          

        </Stack>
        <Button colorPalette="pink" type="submit" mt={6}  >Entrar</Button>
      </Flex>
    </Flex>
  );
}
