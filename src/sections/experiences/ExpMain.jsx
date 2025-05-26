import SectionTitle from "../../components/SectionTitle";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import Experience from "./Experience";
import { useState } from "react";
import useIsInMobile from "../../hooks/useIsInMobile";
import ExperienceMobile from "./ExperienceMobile";

const prepExpTabs = (experiences) => {
  const expTabs = experiences?.map((exp, index) => ({
    label: exp?.company,
    component: <Experience exp={exp} />,
  }));
  return expTabs;
};

const ExpMain = ({ experiences }) => {
  const isInMobile = useIsInMobile();

  const [selectedExp, setSelectedExp] = useState(0);

  const handleChange = (e, newValue) => {
    setSelectedExp(newValue);
  };

  const preparedExpTabs = prepExpTabs(experiences);

  console.log(preparedExpTabs);
  return (
    <Box width={1} height={1}>
      <SectionTitle title="Where I've worked" />
      <br />
      {isInMobile ? (
        <Stack spacing={2}>
          {experiences?.map((exp, index) => (
            <ExperienceMobile key={index} exp={exp} />
          ))}
        </Stack>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 1,
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: (theme) => theme.palette.black.light,
          }}
          px={4}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedExp}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: (theme) => theme.palette.black.light,
              minHeight: "500px",
              minWidth: 180,
              overflowY: "auto",
            }}
            scrollButtons="auto"
            aria-label="work experience tabs"
          >
            {preparedExpTabs &&
              preparedExpTabs?.map((exp, index) => (
                <Tab
                  key={index}
                  label={exp?.label}
                  sx={{
                    color: (theme) => theme.palette.white.main,
                    alignItems: "flex-start",
                    textAlign: "left",
                    "&.Mui-selected": {
                      color: (theme) => theme.palette.primary.main,
                      fontWeight: "bold",
                      backgroundColor: (theme) => theme.palette.black.light,
                    },
                  }}
                />
              ))}
          </Tabs>
          <Box sx={{ ml: 4, flex: 1 }} pt={1} pb={2}>
            {preparedExpTabs?.[selectedExp]?.component}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExpMain;
