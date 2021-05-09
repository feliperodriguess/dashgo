import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { REGEX } from '../utils/constants'

import { Input } from '../components'

type SignInFormData = {
  email: string
  password: string
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm()

  const onSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(onSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email', {
              pattern: { value: REGEX.EMAIL, message: 'Insira um e-mail válido' },
              required: 'E-mail obrigatório',
            })}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={formState.errors.password}
            {...register('password', {
              minLength: { value: 8, message: 'Insira uma senha de pelo menos 8 dígitos' },
              required: 'Senha obrigatória',
            })}
          />
        </Stack>
        <Button
          mt={6}
          colorScheme="pink"
          type="submit"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
