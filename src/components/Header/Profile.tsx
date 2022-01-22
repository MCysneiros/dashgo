import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
	return (
		<Flex align='center'>
			<Box mr='4' textAlign='right'>
				<Text>Matheus Cysneiros</Text>
				<Text color='gray.300' fontSize='small'>
					msocys@gmail.com
				</Text>
			</Box>
			<Avatar
				size='md'
				name='Matheus Cysneiros'
				src='https://github.com/MCysneiros.png'
			/>
		</Flex>
	)
}
