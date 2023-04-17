import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import websitePhoto from '../../assets/images/website_photo.jpg';
import { useMediaQuery } from '@mui/material';
import { forwardRef } from 'react';

export const Home = forwardRef((props, ref) => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<section ref={ref}>
			{isMobile ? (
				<Stack direction='column' sx={{ pt: 10 }}>
					<Box
						sx={{
							backgroundImage: `url(${websitePhoto})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',

							borderRadius: '50%',
							paddingTop: '71%',
							border: '10px solid white',
							boxShadow: '0 0 20px 0 rgba(0,0,0,.1)',
							width: '75%',
							alignSelf: 'center',
						}}
					/>
					<Box sx={{ p: 2 }}>
						<Typography variant='h1' color='secondary'>
							Hi there,{' '}
						</Typography>
						<Typography variant='h1' color='secondary'>
							I am Sonja
						</Typography>

						<Typography variant='h4' sx={{ pt: 3 }} fontWeight={400}>
							a medical doctor turned frontend developer with a passion for
							health tech engineering.
						</Typography>
					</Box>
				</Stack>
			) : (
				<Grid container sx={{ pt: 15 }}>
					<Grid
						item
						xs={6}
						sx={{
							display: 'flex',
							alignItems: 'center',
							pr: 3,
						}}>
						<Box>
							<Typography
								variant='h1'
								color='secondary'
								sx={{ fontWeight: 600 }}>
								Hi there,{' '}
							</Typography>
							<Typography
								variant='h1'
								color='secondary'
								sx={{ fontWeight: 600 }}>
								I am Sonja
							</Typography>

							<Typography
								variant='h5'
								sx={{ pt: 3, lineHeight: 1.5 }}
								fontWeight={400}>
								a medical doctor turned frontend developer with a passion for
								health tech engineering.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6} sx={{ pl: 2 }}>
						<Box
							sx={{
								backgroundImage: `url(${websitePhoto})`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								flexGrow: 0,
								flexShrink: 0,
								borderRadius: '50%',
								paddingTop: '100%',
								border: '10px solid white',
								boxShadow: '0 0 20px 0 rgba(0,0,0,.1)',
							}}
						/>
					</Grid>
				</Grid>
			)}
		</section>
	);
});
