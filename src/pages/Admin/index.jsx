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
import OwnerAccounts from "./components/OwnerAccounts";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomerAccounts from "./components/CustomerAccounts";
import Courts from "./components/Courts";
import CourtBookings from "./components/CourtBookings";
const AdminDashboard = () => {
  const [accountTab, setAccountTab] = React.useState("1");
  const [courtTab, setCourtTab] = React.useState("1");

  const handleAccountTabChange = (event, newValue) => {
    setAccountTab(newValue)
  };
  const handleCourtTabChange = (event, newValue) => {
    setCourtTab(newValue)
  };
  return (
    <div className="mt-24">
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
            <TabContext value={accountTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleAccountTabChange}>
                  <Tab label="Tài khoản khách hàng" value="1" />
                  <Tab label="Tài khoản chủ sân" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CustomerAccounts />
              </TabPanel>
              <TabPanel value="2">
                <OwnerAccounts />
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
            <TabContext value={courtTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleCourtTabChange}>
                  <Tab label="Lịch đặt sân" value="1" />
                  <Tab label="Sân" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CourtBookings />
              </TabPanel>
              <TabPanel value="2">
                <Courts />
              </TabPanel>
            </TabContext>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

export default AdminDashboard;
