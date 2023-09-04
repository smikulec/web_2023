import { Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';

const Title = ({ text }) => {
	return (
		<Grid xs={4} item sx={{ pb: 6 }}>
			<Typography variant='h3' color='secondary' sx={{ fontWeight: 600 }}>
				{text}
			</Typography>
		</Grid>
	);
};

const Content = ({ children }) => {
	return (
		<Grid xs={8} item>
			{children}
		</Grid>
	);
};

const Layout = ({ children }) => {
	const isMobile = useMediaQuery('(max-width: 1024px)');

	if (isMobile) {
		return <Container sx={{ padding: '60px 0' }}>{children}</Container>;
	}

	return (
		<Grid container sx={{ padding: '80px 0' }}>
			{children}
		</Grid>
	);
};

Layout.Title = Title;

Layout.Content = Content;

export { Layout };
