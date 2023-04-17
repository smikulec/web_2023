import { Box, Typography, useMediaQuery } from '@mui/material';

export const TextCircle = ({ text, icon }) => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{icon && (
				<img
					src={icon}
					alt={`${text} logo`}
					width={isMobile ? 40 : 55}
					height={isMobile ? 40 : 55}
				/>
			)}
			<Typography variant='h6' sx={{ pt: 1.5 }}>
				{text}
			</Typography>
		</Box>
	);
};
