import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?cs=srgb&dl=pexels-fauxels-3184292.jpg&fm=jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Business Buzz</Typography>
        <Text variant="h5">
          This is a blog website where people can share there experiences
          related to the field of Business and management. You can add relevant
          content for the people for the newbies.
          <br />
          If you want to help others then feel free to post blog here.
        </Text>
        <Text variant="h5">
          Facing any issue? You can reach me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://instagram.com/_yashitt_?igshid=Yjk4NWM2ZWVkMw=="
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:gyashit43@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
