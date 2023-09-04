import { Box, Grid, useMediaQuery } from '@mui/material';
import { Layout, TextCircle } from '../../components';
import { forwardRef } from 'react';
import CSSLogo from '../../assets/logos/css_logo.svg';
import ElectronLogo from '../../assets/logos/electron_logo.svg';
import FirebaseLogo from '../../assets/logos/firebase_logo.png';
import GatsbyLogo from '../../assets/logos/gatsby_logo.png';
import GitLogo from '../../assets/logos/git_logo.png';
import HTMLLogo from '../../assets/logos/html_logo.svg';
import JavascriptLogo from '../../assets/logos/javascript_logo.svg';
import JestLogo from '../../assets/logos/jest_logo.png';
import NextJSLogo from '../../assets/logos/nextjs_logo.svg';
// import NodeJSLogo from '../../assets/logos/nodejs_logo.png';
import ReactLogo from '../../assets/logos/react_logo.svg';
import StorybookLogo from '../../assets/logos/storybook_logo.svg';
import TypescriptLogo from '../../assets/logos/typescript_logo.svg';

const skillsArray = [
	{ text: 'HTML', icon: HTMLLogo },
	{ text: 'CSS', icon: CSSLogo },
	{ text: 'JavaScript', icon: JavascriptLogo },
	{ text: 'ReactJS', icon: ReactLogo },
	{ text: 'NextJS', icon: NextJSLogo },
	{ text: 'Gatsby', icon: GatsbyLogo },
	{ text: 'Typescript', icon: TypescriptLogo },
	{ text: 'Storybook', icon: StorybookLogo },
	{ text: 'Jest', icon: JestLogo },
	{ text: 'Git', icon: GitLogo },
	{ text: 'Electron', icon: ElectronLogo },
	// { text: 'NodeJS', icon: NodeJSLogo },
	{ text: 'Firebase', icon: FirebaseLogo },
];

export const Skills = forwardRef((props, ref) => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<section ref={ref}>
			<Layout>
				<Layout.Title text='Skills'></Layout.Title>
				<Layout.Content>
					<Box>
						<Grid container spacing={7}>
							{skillsArray.map((skill, index) => (
								<Grid key={index} item xs={isMobile ? 4 : 3}>
									<TextCircle text={skill.text} icon={skill.icon} />
								</Grid>
							))}
						</Grid>
					</Box>
				</Layout.Content>
			</Layout>
		</section>
	);
});
