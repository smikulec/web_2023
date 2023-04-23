import { Box, Typography, useMediaQuery, Link as MUILink } from "@mui/material";

export const TextCircle = ({ text, icon, textVariant = "h6", url }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <MUILink
      href={url}
      target="_blank"
      underline="none"
      sx={{ color: "#000000" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && (
          <img
            src={icon}
            alt={`${text} logo`}
            width={isMobile ? 40 : 55}
            height={isMobile ? 40 : 55}
          />
        )}
        <Typography variant={textVariant} sx={{ pt: 1.5 }}>
          {text}
        </Typography>
      </Box>
    </MUILink>
  );
};
