import { Text } from '@chakra-ui/react'

export function Logo() {
	return (
		<Text
			fontSize={['2xl', '3xl']}
			fontWeight='bold'
			letterSpacing='tight'
			w='64'>
			DashGo
			<Text color='pink.500' ml='1' as='span'>
				.
			</Text>
		</Text>
	)
}
