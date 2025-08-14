import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputComponent } from "@/components/Form/InputComponent";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const SignInFormSchema = yup.object({
  email: yup.string().required("O e-mail é obrigatório!").email("Formato inválido..."),
  password: yup.string().required("A senha é obrigatória!"),
}).required();

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState, formState:{ errors } } = useForm<SignInFormData>({ resolver: yupResolver(SignInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    
    // simular o botao carregando com o formState
    await new Promise( resolve => setTimeout(resolve, 2000))
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg={"gray.800"} p={8} borderRadius={8} flexDirection={"column"} onSubmit={handleSubmit(handleSignIn)}>

        <Stack gap={4}>

          <InputComponent label="e-mail" helpertext="Insira seu e-mail." error={errors.email?.message} {...register("email")} />
          
          <InputComponent label="Senha" helpertext="Insira sua senha." error={errors.password?.message} {...register("password")} />

        </Stack>

        <Button colorPalette="pink" type="submit" mt={6}  loading={formState.isSubmitting}>Entrar</Button>
        
      </Flex>
    </Flex>
  );
}
