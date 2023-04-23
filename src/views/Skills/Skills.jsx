import { Box, Grid, useMediaQuery } from "@mui/material";
import { Layout, TextCircle } from "../../components";
import { forwardRef } from "react";
import CSSLogo from "../../assets/logos/css_logo.svg";
import ElectronLogo from "../../assets/logos/electron_logo.svg";
import FirebaseLogo from "../../assets/logos/firebase_logo.png";
import GatsbyLogo from "../../assets/logos/gatsby_logo.png";
import GitLogo from "../../assets/logos/git_logo.png";
import HTMLLogo from "../../assets/logos/html_logo.svg";
import JavascriptLogo from "../../assets/logos/javascript_logo.svg";
import JestLogo from "../../assets/logos/jest_logo.png";
import NextJSLogo from "../../assets/logos/nextjs_logo.svg";
// import NodeJSLogo from '../../assets/logos/nodejs_logo.png';
import ReactLogo from "../../assets/logos/react_logo.svg";
import StorybookLogo from "../../assets/logos/storybook_logo.svg";
import TypescriptLogo from "../../assets/logos/typescript_logo.svg";

const skillsArray = [
  { text: "HTML", icon: HTMLLogo },
  { text: "CSS", icon: CSSLogo },
  { text: "JavaScript", icon: JavascriptLogo },
  {
    text: "Typescript",
    icon: TypescriptLogo,
    url: "https://www.typescriptlang.org/",
  },
  { text: "ReactJS", icon: ReactLogo, url: "https://react.dev/" },
  { text: "NextJS", icon: NextJSLogo, url: "https://nextjs.org/" },
  { text: "Gatsby", icon: GatsbyLogo, url: "https://www.gatsbyjs.com/" },
  { text: "Storybook", icon: StorybookLogo, url: "https://storybook.js.org/" },
  { text: "Jest", icon: JestLogo, url: "https://jestjs.io/" },
  { text: "Git", icon: GitLogo, url: "https://git-scm.com/" },
  { text: "Electron", icon: ElectronLogo, url: "https://www.electronjs.org/" },
  // { text: 'NodeJS', icon: NodeJSLogo },
  { text: "Firebase", icon: FirebaseLogo, url: "https://firebase.google.com/" },
];

export const Skills = forwardRef((props, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section ref={ref}>
      <Layout>
        <Layout.Title text="Skills"></Layout.Title>
        <Layout.Content>
          <Box /*sx={{ marginLeft: !isMobile && '-45px' }} */>
            <Grid container spacing={7}>
              {skillsArray.map((skill, index) => (
                <Grid key={index} item xs={isMobile ? 4 : 3}>
                  <TextCircle
                    text={skill.text}
                    icon={skill.icon}
                    url={skill?.url}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Layout.Content>
      </Layout>
    </section>
  );
});
