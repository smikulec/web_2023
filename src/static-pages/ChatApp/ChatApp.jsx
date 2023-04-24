import {
  Box,
  Fade,
  IconButton,
  Typography,
  Link as MUILink,
  Grid,
  useMediaQuery,
  Stack,
  Button,
} from "@mui/material";
import { SimpleContainer, TextCircle } from "../../components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import arrowLeftIcon from "@iconify-icons/mdi/arrow-left";

import HTMLLogo from "../../assets/logos/html_logo.svg";
import CSSLogo from "../../assets/logos/css_logo.svg";
import NodeJSLogo from "../../assets/logos/nodejs_logo.png";
import JavascriptLogo from "../../assets/logos/javascript_logo.svg";
import WebpackLogo from "../../assets/logos/webpack_logo.png";
import SaSSLogo from "../../assets/logos/sass_logo.png";

const technologiesArray = [
  { text: "HTML", icon: HTMLLogo },
  { text: "CSS", icon: CSSLogo },
  { text: "JavaScript", icon: JavascriptLogo },
  { text: "NodeJS", icon: NodeJSLogo, url: "https://nodejs.org/en/about" },
  { text: "Webpack", icon: WebpackLogo, url: "https://webpack.js.org/" },
  { text: "SaSS", icon: SaSSLogo, url: "https://sass-lang.com/" },
];

const TextContainer = ({ title, textArray }) => {
  return (
    <Box sx={{ pb: 4 }}>
      <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {textArray.map((text, index) => (
        <Typography key={index} paragraph sx={{ fontSize: "18px" }}>
          {text}
        </Typography>
      ))}
    </Box>
  );
};

export const ChatApp = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade in={true} timeout={700}>
      <Box>
        <main>
          <SimpleContainer>
            <Link to="/#Projects">
              <IconButton sx={{ mt: 3, fontSize: "45px" }}>
                <Icon icon={arrowLeftIcon} style={{ color: "#191970" }} />
              </IconButton>
            </Link>
            <Stack
              direction={isMobile ? "column" : "row"}
              alignItems={isMobile ? "flex-start" : "center"}
              sx={{ mb: 5 }}
            >
              <Typography
                variant="h2"
                sx={{ mt: 3, fontWeight: 600 }}
                color="secondary"
              >
                Chat App
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                href="https://smikulec-chat-app.netlify.app/"
                target="_blank"
                sx={{
                  ml: { xs: 0, md: 6 },
                  mt: { xs: 2, md: 4 },
                }}
              >
                Check it out here
              </Button>
            </Stack>
            <TextContainer
              title="About"
              textArray={[
                "This chat app was a final project in a frontend developer program.",
              ]}
            />
            <Box sx={{ pb: 6 }}>
              <Typography variant="h4" color="secondary" sx={{ mb: 3 }}>
                Technologies
              </Typography>
              <Grid container spacing={3}>
                {technologiesArray.map((skill, index) => (
                  <Grid key={index} item xs={isMobile ? 4 : 2}>
                    <TextCircle
                      text={skill.text}
                      icon={skill.icon}
                      textVariant="body1"
                      url={skill?.url}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <TextContainer
              title="Lessons learned & Challenges"
              textArray={[
                "I created this chat app from scratch using HTML, SaSS, pure JavaScript, Node.js, and Webpack, without any libraries. This included structuring the code base into reusable and composed modules, which was a great learning experience. Through bundling the app with Webpack,  I learned how to configure certain settings and gained a better understanding of the bundler.",
                "One challenge was to hide the secret key for Scaledrone realtime messaging service to prevent access by bots, which I ultimately addressed using Netlify serverless functions.",
              ]}
            />
            <Box sx={{ pb: 4 }}>
              <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
                Links
              </Typography>
              <Typography paragraph sx={{ fontSize: "18px" }}>
                Find the project code and the live app at the following links:
              </Typography>
              <Typography paragraph sx={{ fontSize: "18px", pl: 2 }}>
                <MUILink
                  href="https://github.com/smikulec/Algebra-CHAT-APP"
                  target="_blank"
                  underline="hover"
                  color="primary"
                >
                  GitHub repository
                </MUILink>
              </Typography>
              <Typography paragraph sx={{ fontSize: "18px", pl: 2 }}>
                <MUILink
                  href="https://smikulec-chat-app.netlify.app/"
                  target="_blank"
                  underline="hover"
                  color="primary"
                >
                  Live Chat App
                </MUILink>
              </Typography>
            </Box>
          </SimpleContainer>
        </main>
        <footer style={{ textAlign: "center", paddingTop: "50px" }}>
          {" "}
          &copy; Sonja Mikulec
        </footer>
      </Box>
    </Fade>
  );
};
