import { Typography } from '@mui/material';

import { Layout } from '../../components';
import { forwardRef } from 'react';

export const About = forwardRef((props, ref) => {
	return (
		<section ref={ref}>
			<Layout>
				<Layout.Title text='About me' />
				<Layout.Content>
					<Typography variant='h6' weight={600} sx={{ fontStyle: 'italic' }}>
						I have taken a non-traditional path to pursue my passion for
						creating impactful solutions through technology.
					</Typography>
					<Typography sx={{ fontSize: '18px', pt: 2 }} paragraph>
						{/* My journey to becoming a frontend developer was not a typical one.
						After spending years in medicine and the pharmaceutical industry, I
						realized that I had a passion for technology that I wanted to
						explore further. I took a leap of faith and enrolled in a coding
						bootcamp, where I spent months honing my skills and building my
						portfolio. Since then, I've gained valuable experience working as a
						frontend developer in a digital agency. But what truly motivates me
						is the opportunity to combine my medical background with my coding
						skills to create innovative solutions in the health tech industry. I
						am passionate about making a positive impact in people's lives and
						am excited about the potential that health tech has to offer. */}
						My experience working as a frontend developer in a digital agency
						has been invaluable, but what truly motivates me is the opportunity
						to combine my medical background with my coding skills to create
						innovative solutions in the health tech industry.
						{/* I am passionate
						about making a positive impact in people's lives and am excited
						about the potential that health tech has to offer. */}
					</Typography>
					<Typography sx={{ fontSize: '18px' }} paragraph>
						I'm enthusiastic about the potential of health tech to improve
						people's lives and make a positive impact.
					</Typography>
				</Layout.Content>
			</Layout>
		</section>
	);
});
