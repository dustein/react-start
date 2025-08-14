import { InputComponent } from "@/components/Form/InputComponent";
import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Box, Button, Flex, Heading, HStack, Separator, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

const CreateUserFormSchema = yup.object({
  name: yup.string().required("O nome é obrigatório!"),
  email: yup.string().required("O e-mail é obrigatório!").email("Formato inválido..."),
  password: yup.string().required("A senha é obrigatória!").min(6, "Mínimo de 6 caracteres"),
  password_confirmation: yup.string().oneOf([yup.ref('password')], "As senhas precisam ser iguais..."),
}).required();

export default function UserList() {

  const { register, handleSubmit, formState, formState:{ errors }} = useForm({ resolver: yupResolver(CreateUserFormSchema)})

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise( resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box>
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />

        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>

          <Heading size="lg" fontWeight="normal" pb="4">Criar Usuário</Heading>
          <Separator variant="solid" mb="4" size="sm" colorPalette="gray" />
          <VStack gap="6">
            <SimpleGrid minChildWidth="240px" w="100%" gap="8">
              <InputComponent label="Nome completo" {...register("name")} error={errors.name?.message}></InputComponent>
              <InputComponent type="email" label="e-mail" {...register("email")} error={errors.email?.message}></InputComponent>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" w="100%" gap="8">
              <InputComponent type="password" label="Senha" {...register("password")} error={errors.password?.message}></InputComponent>
              <InputComponent type="password" label="Confirme a Senha" {...register("password_confirmation")} error={errors.password_confirmation?.message}></InputComponent>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack gap="4">
              <Link href="/users" passHref><Button colorPalette="gray">Cancelar</Button></Link>
              <Button type="submit" colorPalette="pink" loading={formState.isSubmitting}>Salvar</Button>
            </HStack>

          </Flex>
        </Box>

      </Flex>
      
    </Box>
  )
}
