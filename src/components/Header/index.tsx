import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';

import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
	const { onOpen } = useSideBarDrawer();
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<Flex
			w='100%'
			as='header'
			maxWidth={1480}
			h='20'
			mx='auto'
			mt='4'
			px='6'
			align='center'>
			{!isWideVersion && (
				<IconButton
					icon={<Icon as={RiMenuLine} />}
					fontSize='24'
					onClick={onOpen}
					variant='unstyled'
					aria-label='Open navigation'
					mr='2'></IconButton>
			)}
			<Logo />
			{isWideVersion && <Search />}
			<Flex align='center' ml='auto'>
				<NotificationNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	);
}
