import { Box, Typography, Link as MUILink } from "@mui/material";
import { Layout } from "../../components";
import { forwardRef } from "react";

const SingleSection = ({
  role,
  timeline,
  company,
  description,
  companyUrl,
}) => {
  return (
    <Box sx={{ pb: 6 }}>
      <Typography variant="h4" sx={{ pb: 1 }}>
        {role}
      </Typography>
      <Typography color="secondary" sx={{ pb: 1 }}>
        @{" "}
        {companyUrl ? (
          <MUILink
            href={companyUrl}
            target="_blank"
            underline="hover"
            color="primary"
          >
            {company}
          </MUILink>
        ) : (
          company
        )}
      </Typography>
      <Typography variant="h6" sx={{ pb: 2 }}>
        {timeline}
      </Typography>
      <Typography sx={{ fontSize: "18px" }}>{description}</Typography>
    </Box>
  );
};

export const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Layout>
        <Layout.Title text="Experience" />
        <Layout.Content>
          <SingleSection
            role="Frontend Developer"
            timeline="2021 - present"
            company="Borealis Agency"
            description="I have gained expertise in developing web/desktop applications with NextJS, Typescript, and Electron, testing React components with Jest, collaborating with UX designers, improving features, fixing bugs, implementing mobile-first designs, and writing technical documentation for projects."
            companyUrl="https://borealis.agency/"
          />
          <SingleSection
            role="Medical doctor"
            timeline="2018 - 2020"
            company="Community Health Center"
            description="As a general practitioner, I've provided primary healthcare in both urban and rural areas, managing a high volume of patients in the city and developing strong patient relationships in underserved communities. This experience taught me adaptability, empathy, and collaboration for delivering quality care."
          />
          <SingleSection
            role="Medical Specialist & Regulatory Affairs Professional"
            timeline="2016 - 2018"
            company="Pliva / Teva Pharmaceuticals"
            description="I contributed to writing medical documentation, provided support for the portfolio pipeline, and assisted with inquiries from third parties. I also played a key role in reviewing compliance documentation and regulatory requirements throughout the application process."
            companyUrl="https://www.tevapharm.com/teva-worldwide/"
          />
        </Layout.Content>
      </Layout>
    </section>
  );
});
