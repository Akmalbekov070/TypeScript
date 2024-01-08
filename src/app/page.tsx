import { Avatar, Box, Button, Card, Flex, Text } from '@radix-ui/themes';

export default function Home() {
	let a: number | string = 'salom';
	console.log(a);

	return (
		// <Card size='1' style={{ width: 350 }}>
		// 	<Flex gap='3' align='center'>
		// 		<Avatar size='3' radius='full' fallback='T' color='indigo' />
		// 		<Box>
		// 			<Text as='div' size='2' weight='bold'>
		// 				Teodros Girmay
		// 			</Text>
		// 			<Text as='div' size='2' color='gray'>
		// 				Engineering
		// 			</Text>
		// 		</Box>
		// 	</Flex>
		// </Card>
		<Button variant='classic'>Get started</Button>
	);
}
