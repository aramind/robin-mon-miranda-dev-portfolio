import { Box, Stack } from "@mui/material";
import ExperienceMobile from "./ExperienceMobile";
import SectionTitle from "../../components/SectionTitle";

const ExpMainMobile = ({ experiences }) => {
  console.log(experiences);
  return (
    <Box width={1} height={1}>
      <SectionTitle title="Where I've worked" />
      <br />
      <Stack
        spacing={1}
        width={1}
        borderRadius={2}
        p={2}
        sx={{
          outlineStyle: "solid",
          outlineWidth: 1,
          outlineColor: (theme) => theme.palette.black.light,
          transition: "all 0.4s ease-in-out",
        }}
      >
        {experiences?.map((exp, index) => (
          <ExperienceMobile key={index} exp={exp} />
        ))}
      </Stack>
    </Box>
  );
};

export default ExpMainMobile;
