import { Box, Link, Stack, Typography } from '@mui/material';
import { Layout } from '../../components';
import { forwardRef } from 'react';
import linkedInLogo from '../../assets/logos/linkedin_logo.png';
import gmailLogo from '../../assets/logos/gmail_logo.png';
import githubLogo from '../../assets/logos/github_logo.svg';

export const Contact = forwardRef((props, ref) => {
	return (
		<section ref={ref}>
			<Layout>
				<Layout.Title text='Contact me' />
				<Layout.Content>
					<Box>
						<Typography paragraph sx={{ fontSize: '18px' }}>
							If you're looking for a person with a diverse skill set spanning
							across disciplines, a passion for healthcare, and a strong work
							ethic, I would be excited to hear from you.
						</Typography>
						<Typography paragraph sx={{ fontSize: '18px' }}>
							Let's work together to drive innovation and positive change in the
							health tech industry!
						</Typography>
					</Box>
					<Stack
						direction='row'
						spacing={3}
						sx={{ alignItems: 'center', ml: 3, pt: 2 }}>
						<Link
							href='https://www.linkedin.com/in/sonja-mikulec/'
							target='_blank'
							underline='none'
							sx={{ pr: 2 }}>
							<img
								src={linkedInLogo}
								alt='linkedin logo'
								width={32}
								height={32}
							/>
							{/* Linkedin */}
						</Link>
						<Link
							href='mailto:sonja.mikulec@gmail.com'
							target='_blank'
							underline='none'
							sx={{ pr: 2 }}>
							<img src={gmailLogo} alt='linkedin logo' width={40} height={32} />
							{/* Email */}
						</Link>
						<Link
							href='https://github.com/smikulec'
							target='_blank'
							underline='none'
							sx={{ pr: 2 }}>
							<img
								src={githubLogo}
								alt='linkedin logo'
								width={32}
								height={32}
							/>
							{/* Github */}
						</Link>
					</Stack>
				</Layout.Content>
			</Layout>
		</section>
	);
});
