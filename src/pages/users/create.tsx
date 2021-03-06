import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '../../components/Form/input';
import { Header } from '../../components/Header/index';
import { Sidebar } from '../../components/SideBar';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
	email: string;
	password: string;
	name: string;
	password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Nome obrigatório'),
	email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
	password: yup
		.string()
		.required('Senha obrigatória')
		.min(6, 'Senha deve ter no mínimo 6 caracteres'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'Senhas não conferem'),
});

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema),
	});

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
		await new Promise(resolve => setTimeout(resolve, 2000));
	};

	return (
		<Box>
			<Header />
			<Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
				<Sidebar />
				<Box
					as='form'
					flex='1'
					borderRadius={8}
					bg='gray.800'
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}>
					<Heading size='lg' fontWeight='normal'>
						Criar Usuário
					</Heading>
					<Divider my='6' borderColor='gray.700' />
					<VStack>
						<SimpleGrid minChildWidth='204px' spacing={['6', '8']} w='100%'>
							<Input
								name='name'
								label='Nome completo'
								{...register('name')}
								error={formState.errors.name}
							/>
							<Input
								name='email'
								type='email'
								label='E-mail'
								{...register('email')}
								error={formState.errors.email}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth='204px' spacing={['6', '8']} w='100%'>
							<Input
								name='password'
								label='Senha'
								type='password'
								{...register('password')}
								error={formState.errors.password}
							/>
							<Input
								name='password_confirmation'
								type='password'
								label='Confirmar senha'
								{...register('password_confirmation')}
								error={formState.errors.password_confirmation}
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Link href='/users' passHref>
								<Button as='a' colorScheme='whiteAlpha'>
									Cancelar
								</Button>
							</Link>
							<Button
								type='submit'
								colorScheme='pink'
								isLoading={formState.isSubmitting}>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
