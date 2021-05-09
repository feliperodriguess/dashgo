import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { REGEX } from '../../../utils/constants'
import Link from 'next/link'

import { BaseView, Input } from '../../../components'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export default function CreateUser() {
  const { register, handleSubmit, formState, getValues } = useForm()

  const onCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <BaseView>
      <Box
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={['6', '8']}
        as="form"
        onSubmit={handleSubmit(onCreateUser)}
      >
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              name="name"
              label="Nome completo"
              error={formState.errors.name}
              {...register('name', {
                required: 'Nome obrigatório',
              })}
            />
            <Input
              name="email"
              label="E-mail"
              error={formState.errors.email}
              {...register('email', {
                pattern: { value: REGEX.EMAIL, message: 'Insira um e-mail válido' },
                required: 'E-mail obrigatório',
              })}
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              name="password"
              type="password"
              label="Senha"
              error={formState.errors.password}
              {...register('password', {
                minLength: { value: 8, message: 'Insira uma senha de pelo menos 8 dígitos' },
                required: 'Senha obrigatória',
              })}
            />
            <Input
              name="passwordConfirmation"
              type="password"
              label="Confirmar senha"
              error={formState.errors.passwordConfirmation}
              {...register('passwordConfirmation', {
                required: 'Confirmação de senha obrigatória',
                validate: {
                  value: (value) => value === getValues('password') || 'As senhas devem coincidir',
                },
              })}
            />
          </SimpleGrid>
        </VStack>
        <Flex mt="8" justify="flex-end">
          <HStack>
            <Link href="/users" passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button colorScheme="pink" isLoading={formState.isSubmitting} type="submit">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </BaseView>
  )
}
