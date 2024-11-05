import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import OwnerAccountManagement from "./components/OwnerAccountManagement";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomerAccountManagement from "./components/CustomerAccountManagement";
import CourtManagement from "./components/CourtManagement";
const AdminDashboard = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Card variant="outlined" className="my-8 mx-4">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Quản lý tài khoản hệ thống</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Tài khoản khách hàng" value="1" />
                  <Tab label="Tài khoản chủ sân" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CustomerAccountManagement />
              </TabPanel>
              <TabPanel value="2">
                <OwnerAccountManagement />
              </TabPanel>
            </TabContext>
          </AccordionDetails>
        </Accordion>
      </Card>
      <Card variant="outlined" className="my-8 mx-4">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Quản lý sân và lịch đặt sân</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Lịch đặt sân" value="1" />
                  <Tab label="Sân" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CustomerAccountManagement />
              </TabPanel>
              <TabPanel value="2">
                <CourtManagement />
              </TabPanel>
            </TabContext>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

export default AdminDashboard;
