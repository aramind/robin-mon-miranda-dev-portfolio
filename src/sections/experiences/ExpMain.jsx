import SectionTitle from "../../components/SectionTitle";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Experience from "./Experience";
import { useState } from "react";
import ExpPanel from "./ExpPanel";

const prepExpTabs = (experiences) => {
  const expTabs = experiences?.map((exp, index) => ({
    label: exp?.company,
    component: <Experience exp={exp} />,
  }));
  return expTabs;
};

const ExpMain = ({ experiences }) => {
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
      <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }} px={4}>
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

            // ".MuiTabs-indicator": {
            //   width: "0px",
            // },
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
        <Box sx={{ ml: 4, flex: 1 }}>
          {preparedExpTabs?.[selectedExp]?.component}
        </Box>
      </Box>
      {/* Render the selected experience */}
    </Box>
  );
};

export default ExpMain;
