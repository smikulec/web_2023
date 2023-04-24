import { Box, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { Layout } from "../../components";
import { forwardRef } from "react";
import chatAppImage from "../../assets/images/chat_01.png";
import pomodoroAppImage from "../../assets/images/pomodoro_02.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectImage, title, text, link }) => {
  return (
    <Link
      to={`/portfolio/${link}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          "&:hover": { boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" },
          "&:first-child": {
            mb: { xs: 1, md: 0 },
          },
          "&:last-child": {
            mt: { xs: 1, md: 0 },
          },
          height: { md: "100%" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ maxHeight: "260px" }}>
            <img
              src={projectImage}
              alt={title}
              style={{
                display: "block",
                width: "100%",
                maxHeight: "255px",
                //  maxWidth: "420px",
                borderRadius: "4px 4px 0 0",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ padding: "20px 40px" }}>
          <Typography
            variant="h6"
            align="center"
            sx={{ py: 1, maxWidth: "380px", fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Typography paragraph sx={{ maxWidth: "380px", paddingTop: 1 }}>
            {text}
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
};

export const Projects = forwardRef((props, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section ref={ref}>
      <Layout>
        <Layout.Title text="Portfolio" />
        <Layout.Content>
          <Stack direction={isMobile ? "column" : "row"} spacing={4}>
            <ProjectCard
              projectImage={pomodoroAppImage}
              title="Pomodoro App"
              text="A simple pomodoro app to track focus and productivity. Pomodoro sessions are customizable and there's a track record of completed and uncompleted tasks."
              link="pomodoro-app"
            />
            <ProjectCard
              projectImage={chatAppImage}
              title="Chat App"
              text="A simple chat app just like in the ol' days. Nicknames are randomly generated and you can insert emojis and scroll through the messages."
              link="chat-app"
            />
          </Stack>
        </Layout.Content>
      </Layout>
    </section>
  );
});
