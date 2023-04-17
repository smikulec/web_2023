import {
	Box,
	Container,
	Paper,
	Stack,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { Layout } from '../../components';
import { forwardRef } from 'react';
import chatAppImage from '../../assets/images/chat_app_screenshot.jpg';
import pomodoroAppImage from '../../assets/images/pomodoro_app_screenshot.jpg';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projectImage, title, text, link }) => {
	return (
		<Link
			to={`/portfolio/${link}`}
			style={{ textDecoration: 'none', color: 'inherit' }}>
			<Container
				component='div'
				sx={{
					position: 'relative',
					'&:hover .paper': { display: 'flex' },
				}}>
				<Box sx={{ position: 'relative' }}>
					<Box sx={{ maxHeight: '260px' }}>
						<img
							src={projectImage}
							alt={title}
							style={{
								display: 'block',
								maxHeight: '255px',
								maxWidth: '420px',
								width: '100%',
							}}
						/>
					</Box>
					<Paper
						className='paper'
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'primary.main',
							color: 'common.white',
							display: 'none',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							zIndex: 1,
							opacity: 0.8,
						}}>
						<Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>
							Find out more
						</Typography>
					</Paper>
				</Box>
				<Typography
					variant='h6'
					align='center'
					sx={{ py: 1, maxWidth: '380px' }}>
					{title}
				</Typography>
				<Typography paragraph sx={{ maxWidth: '380px' }}>
					{text}
				</Typography>
			</Container>
		</Link>
	);
};

export const Projects = forwardRef((props, ref) => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<section ref={ref}>
			<Layout>
				<Layout.Title text='Portfolio' />
				<Layout.Content>
					<Stack direction={isMobile ? 'column' : 'row'}>
						<ProjectCard
							projectImage={pomodoroAppImage}
							title='Pomodoro App'
							text='A simple pomodoro app to track focus and productivity. Pomodoro sessions are customizable and there is a track record of completed and ucompleted tasks.'
							link='pomodoro-app'
						/>
						<ProjectCard
							projectImage={chatAppImage}
							title='Chat App'
							text="A simple chat app just like in the ol' days. Nicknames are randomly generated and you can insert emojis and scroll through the messages."
							link='chat-app'
						/>
					</Stack>
				</Layout.Content>
			</Layout>
		</section>
	);
});
