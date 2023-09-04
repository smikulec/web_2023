import { Box, Typography } from '@mui/material';
import { Layout } from '../../components';
import { forwardRef } from 'react';

const SingleSection = ({ role, timeline, company, description }) => {
	return (
		<Box sx={{ pb: 6, '&:last-child': { pb: 0 } }}>
			<Typography variant='h4' sx={{ pb: 1 }}>
				{role}
			</Typography>
			<Typography color='secondary' sx={{ pb: 1 }}>
				@ {company}
			</Typography>
			<Typography variant='h6' sx={{ pb: 2 }}>
				{timeline}
			</Typography>
			<Typography sx={{ fontSize: '18px' }}>{description}</Typography>
		</Box>
	);
};

export const Education = forwardRef((props, ref) => {
	return (
		<section ref={ref}>
			<Layout>
				<Layout.Title text='Education' />
				<Layout.Content>
					<SingleSection
						role='Frontend Developer professional certificate'
						timeline='2020 - 2021'
						company='Algebra University College'
						description='I completed an intensive frontend development course where I gained practical experience in HTML, CSS, JavaScript, Git, and various frontend frameworks. The program provided me with the skills to create modern and responsive web applications and to collaborate effectively with cross-functional teams.'
					/>
					<SingleSection
						role='Medical doctor'
						timeline='2010 - 2016'
						company='School of Medicine University of Zagreb'
						description='I gained comprehensive knowledge and practical experience in various medical disciplines. My education has equipped me with the skills necessary to apply critical thinking, analytical reasoning, and problem-solving in my professional work.'
					/>
				</Layout.Content>
			</Layout>
		</section>
	);
});
