import {
	Box,
	Fade,
	IconButton,
	Typography,
	Link as MUILink,
	Grid,
	useMediaQuery,
} from '@mui/material';
import { SimpleContainer, TextCircle } from '../../components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import arrowLeftIcon from '@iconify-icons/mdi/arrow-left';

import HTMLLogo from '../../assets/logos/html_logo.svg';
import CSSLogo from '../../assets/logos/css_logo.svg';
import NodeJSLogo from '../../assets/logos/nodejs_logo.png';
import JavascriptLogo from '../../assets/logos/javascript_logo.svg';
import WebpackLogo from '../../assets/logos/webpack_logo.png';
import SaSSLogo from '../../assets/logos/sass_logo.png';

const technologiesArray = [
	{ text: 'HTML', icon: HTMLLogo },
	{ text: 'CSS', icon: CSSLogo },
	{ text: 'JavaScript', icon: JavascriptLogo },
	{ text: 'NodeJS', icon: NodeJSLogo },
	{ text: 'Webpack', icon: WebpackLogo },
	{ text: 'SaSS', icon: SaSSLogo },
];

const TextContainer = ({ title, textArray }) => {
	return (
		<Box sx={{ pb: 4 }}>
			<Typography variant='h4' color='secondary' sx={{ mb: 2 }}>
				{title}
			</Typography>
			{textArray.map((text, index) => (
				<Typography key={index} paragraph sx={{ fontSize: '18px' }}>
					{text}
				</Typography>
			))}
		</Box>
	);
};

export const ChatApp = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<Fade in={true} timeout={700}>
			<Box>
				<main>
					<SimpleContainer>
						<Link to='/'>
							<IconButton sx={{ mt: 3, fontSize: '45px' }}>
								<Icon icon={arrowLeftIcon} style={{ color: '#191970' }} />
							</IconButton>
						</Link>
						<Typography
							variant='h2'
							sx={{ mt: 3, mb: 5, fontWeight: 600 }}
							color='secondary'>
							Chat App
						</Typography>
						<TextContainer
							title='About'
							textArray={[
								'This chat app was a final project in a frontend developer program.',
							]}
						/>
						<Box sx={{ pb: 4 }}>
							<Typography variant='h4' color='secondary' sx={{ mb: 3 }}>
								Technologies
							</Typography>
							<Grid container spacing={3}>
								{technologiesArray.map((skill, index) => (
									<Grid key={index} item xs={isMobile ? 4 : 2}>
										<TextCircle /* text={skill.text} */ icon={skill.icon} />
									</Grid>
								))}
							</Grid>
						</Box>
						<TextContainer
							title='Lessons learned & Challenges'
							textArray={[
								'I created this chat app from scratch using HTML, SaSS, pure JavaScript, Node.js, and Webpack, without any libraries. This included structuring the code base into reusable and composed modules, which was a great learning experience. Through bundling the app with Webpack,  I learned how to configure certain settings and gained a better understanding of the bundler.',
								'One challenge was to hide the secret key for Scaledrone realtime messaging service to prevent access by bots, which I ultimately addressed using Netlify serverless functions. While it may have been over-engineered, I found this solution to be highly effective.',
							]}
						/>
						<Box sx={{ pb: 4 }}>
							<Typography variant='h4' color='secondary' sx={{ mb: 2 }}>
								Links
							</Typography>
							<Typography paragraph sx={{ fontSize: '18px' }}>
								Find the project code and the live app at the following links:
							</Typography>
							<Typography paragraph sx={{ fontSize: '18px', pl: 2 }}>
								<MUILink
									href='https://github.com/smikulec/Algebra-CHAT-APP'
									target='_blank'
									underline='hover'
									color='primary'>
									Github repository
								</MUILink>
							</Typography>
							<Typography paragraph sx={{ fontSize: '18px', pl: 2 }}>
								<MUILink
									href='https://smikulec-chat-app.netlify.app/'
									target='_blank'
									underline='hover'
									color='primary'>
									Live Chat App
								</MUILink>
							</Typography>
						</Box>
					</SimpleContainer>
				</main>
				<footer style={{ textAlign: 'center', paddingTop: '50px' }}>
					{' '}
					&copy; Sonja Mikulec
				</footer>
			</Box>
		</Fade>
	);
};
