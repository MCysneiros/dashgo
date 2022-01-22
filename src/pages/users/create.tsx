import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react'
import { Input } from '../../components/Form/input'
import { Header } from '../../components/Header/index'
import { Sidebar } from '../../components/SideBar'

export default function CreateUser() {
	return (
		<Box>
			<Header />
			<Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
				<Sidebar />
				<Box flex='1' borderRadius={8} bg='gray.800' p='8'>
					<Heading size='lg' fontWeight='normal'>
						Criar Usuário
					</Heading>
					<Divider my='6' borderColor='gray.700' />
					<VStack>
						<SimpleGrid minChildWidth='204px' spacing='8' w='100%'>
							<Input name='name' label='Nome completo' />
							<Input name='email' type='email' label='E-mail' />
						</SimpleGrid>
						<SimpleGrid minChildWidth='204px' spacing='8' w='100%'>
							<Input name='password' label='Senha' type='password' />
							<Input
								name='password_confirmation'
								type='password'
								label='Confirmar senha'
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Button colorScheme='whiteAlpha'>Cancelar</Button>
							<Button colorScheme='pink'>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
