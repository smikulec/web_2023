import {
  Box,
  Fade,
  IconButton,
  Link as MUILink,
  Typography,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material";
import { SimpleContainer, TextCircle } from "../../components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import arrowLeftIcon from "@iconify-icons/mdi/arrow-left";

import ReactLogo from "../../assets/logos/react_logo.svg";
import FirebaseLogo from "../../assets/logos/firebase_logo.png";
import MUILogo from "../../assets/logos/mui_logo.png";

const technologiesArray = [
  { text: "ReactJS", icon: ReactLogo, url: "https://react.dev/" },
  { text: "Material UI", icon: MUILogo, url: "https://mui.com/" },
  { text: "Firebase", icon: FirebaseLogo, url: "https://firebase.google.com/" },
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

export const PomodoroApp = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade in={true} timeout={700}>
      <Box>
        <main>
          <SimpleContainer>
            <Link to="/">
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
                Pomodoro App
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                href="https://simplepomodoroapp.netlify.app/"
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
                "The pomodoro app was born out of curiosity about how to improve focus and performance.",
                "As everyone's attention and ability to focus is different and can be improved over time, I made sure that all the Pomodoro parameters were customizable when creating a task. Additionally, I included a simple statistics dashboard so users can track their focus time in different time periods.",
              ]}
            />
            <Box sx={{ pb: 6 }}>
              <Typography variant="h4" color="secondary" sx={{ mb: 3 }}>
                Technologies
              </Typography>

              <Stack direction="row" spacing={5} sx={{ ml: 1 }}>
                {technologiesArray.map((skill, index) => (
                  <TextCircle
                    key={index}
                    icon={skill.icon}
                    text={skill.text}
                    textVariant="body1"
                    url={skill.url}
                  />
                ))}
              </Stack>
            </Box>
            <TextContainer
              title="Lessons learned & Challenges"
              textArray={[
                "While developing the app, I had the opportunity to learn how to structure data stored in the Firebase cloud and how Firebase's API works. I had to figure out how and when to store data about the pomodoro sessions, update changes in the UI in a timely manner, and show toast messages for successful and failed requests to the Firebase API.",
                "To have a clean, consistent UI, I decided to use the MUI design system and learn how to implement such a complex and widely used design system. ",
                "The app development process also taught me a lot about app design and what can work and what cannot, it helped me understand UX/UI design much more.",
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
                  href="https://github.com/smikulec/pomodoro-react-firebase"
                  target="_blank"
                  underline="hover"
                  color="primary"
                >
                  GitHub repository
                </MUILink>
              </Typography>
              <Typography paragraph sx={{ fontSize: "18px", pl: 2 }}>
                <MUILink
                  href="https://simplepomodoroapp.netlify.app/"
                  target="_blank"
                  underline="hover"
                  color="primary"
                >
                  Live Pomodoro App
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
