import { Flex, Stack, Input, Button, Text, Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values)

  }

  return(
    <Flex>
      <Flex
        as="form"
        width="100%"
        p="8"
        borderRadius={0}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="2">
          <Text my={5} fontWeight="500">Entre com sua conta!</Text>
          <Text fontSize="sm" >e-mail / cpf</Text>
          <Input
            name="email"
            type="email"
            label="E-mail"
            variant="filled"
            borderRadius="0"
            size="md"
            bg="gray.50"
            fontSize={12}
            placeholder="Digite seu e-mail ou cpf"
            error={errors.email}
            {...register('email')}
          />
          <Text fontSize="sm" >senha</Text>
          <Input
            name="password"
            type="password"
            label="Senha"
            variant="filled"
            borderRadius="0"
            size="md"
            bg="gray.50"
            fontSize={12}
            placeholder="Digite sua senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          my="5"
          bg="orange.50"
          color="white"
          size="lg"
          borderRadius="0"
          fontSize="md"
          isLoading={formState.isSubmitting}
        >
          
          ENTRAR</Button
        >
        <Text fontSize="xs" color="gray.750" >Esqueceu sua senha?</Text>
        <Text my={5} align="center" color="gray.750" >OU</Text>
        <Button
          type="submit"
          mt="6"
          colorScheme="gray"
          size="lg"
          borderRadius="0"
          fontSize="md"
        >
          <Icon as={FcGoogle}
                w={8}
                h={8}
                mr={4}
          />ENTRAR COM GOOGLE
        </Button>
        <Button
          type="submit"
          mt="6"
          bg="#3b5999"
          color="white"
          size="lg"
          borderRadius="0"
          fontSize="md"
        >
          <Icon 
            as={ImFacebook}
            w={6}
            h={6}
            mr={4}
          />ENTRAR COM FACEBOOK
        </Button>
        <Text my={5} align="center" fontWeight="500" >Novo por aqui? Crie sua conta</Text>
      </Flex>
    </Flex>
  )
}