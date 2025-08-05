import { InputComponent } from "@/components/Form/Input";
import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Box, Button, Flex, Heading, HStack, Separator, SimpleGrid, VStack } from "@chakra-ui/react";

export default function UserList() {
  return (
    <Box>
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">

          <Heading size="lg" fontWeight="normal" pb="4">Criar Usuário</Heading>
          <Separator variant="solid" mb="4" size="sm" colorPalette="gray" />
          <VStack gap="6">
            <SimpleGrid minChildWidth="240px" w="100%" gap="8">
              <InputComponent name="nome" label="Nome completo"></InputComponent>
              <InputComponent name="email" type="email" label="e-mail"></InputComponent>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" w="100%" gap="8">
              <InputComponent name="password" type="password" label="Senha"></InputComponent>
              <InputComponent name="password_confirmation" type="password" label="Confirme a Senha"></InputComponent>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack gap="4">
              <Button colorPalette="gray">Cancelar</Button>
              <Button colorPalette="pink">Salvar</Button>
            </HStack>

          </Flex>
        </Box>

      </Flex>
      
    </Box>
  )
}
