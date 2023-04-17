import './App.scss';
import { Navigation, SimpleContainer } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Home,
	Skills,
	About,
	Experience,
	Projects,
	Contact,
	Education,
} from './views';
import {
	Box,
	createTheme,
	Fade,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material';
import { ChatApp } from './static-pages/ChatApp';
import { PomodoroApp } from './static-pages/PomodoroApp';
import { useRef } from 'react';

const Main = () => {
	const homeSectionRef = useRef(null);
	const aboutSectionRef = useRef(null);
	const experienceSectionRef = useRef(null);
	const educationSectionRef = useRef(null);
	const skillsSectionRef = useRef(null);
	const projectsSectionRef = useRef(null);
	const contactSectionRef = useRef(null);

	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	const navigationContent = [
		{
			text: 'Home',
			onClick: () => scrollToSection(homeSectionRef),
			sectionRef: homeSectionRef,
		},
		{
			text: 'About',
			onClick: () => scrollToSection(aboutSectionRef),
			sectionRef: aboutSectionRef,
		},
		{
			text: 'Experience',
			onClick: () => scrollToSection(experienceSectionRef),
			sectionRef: experienceSectionRef,
		},
		{
			text: 'Education',
			onClick: () => scrollToSection(educationSectionRef),
			sectionRef: educationSectionRef,
		},
		{
			text: 'Skills',
			onClick: () => scrollToSection(skillsSectionRef),
			sectionRef: skillsSectionRef,
		},
		{
			text: 'Portfolio',
			onClick: () => scrollToSection(projectsSectionRef),
			sectionRef: projectsSectionRef,
		},
		{
			text: 'Contact',
			onClick: () => scrollToSection(contactSectionRef),
			sectionRef: contactSectionRef,
		},
	];

	return (
		<Fade in={true} timeout={700}>
			<Box>
				<Navigation content={navigationContent} />
				<main>
					<SimpleContainer>
						<Home id='Home' ref={homeSectionRef} />
						<About id='About' ref={aboutSectionRef} />
						<Experience id='Experience' ref={experienceSectionRef} />
						<Education id='Education' ref={educationSectionRef} />
						<Skills id='Skills' ref={skillsSectionRef} />
						<Projects id='Projects' ref={projectsSectionRef} />
						<Contact id='Contact' ref={contactSectionRef} />
					</SimpleContainer>
				</main>
				<footer style={{ textAlign: 'center' }}> &copy; Sonja Mikulec</footer>
			</Box>
		</Fade>
	);
};

const App = () => {
	let theme = createTheme({
		palette: {
			primary: {
				main: '#191970',
				contrastText: '#000000',
			},
			secondary: {
				main: '#191970',
			},
			text: {
				primary: 'primary',
				secondary: 'secondary',
			},
		},
		typography: {
			fontFamily: ['DM Sans', 'sans-serif'].join(','),
		},
	});

	theme = responsiveFontSizes(theme, {
		breakpoints: ['sm', 'md', 'lg'],
		factors: [1.5, 1.25, 1],
	});

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route exact path='/' element={<Main />} />
					<Route exact path='/portfolio/chat-app' element={<ChatApp />} />
					<Route
						exact
						path='/portfolio/pomodoro-app'
						element={<PomodoroApp />}
					/>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
