import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabsPage() {
  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h2>Dashboard Tabs</h2>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Usage</Tab>
          <Tab>Settings</Tab>
          <Tab>Analytics</Tab>
          <Tab>Profile</Tab>
        </TabList>

        <TabPanel>
          <p>Overview content…</p>
        </TabPanel>
        <TabPanel>
          <p>Usage content…</p>
        </TabPanel>
        <TabPanel>
          <p>Settings content…</p>
        </TabPanel>
        <TabPanel>
          <p>Analytics content…</p>
        </TabPanel>
        <TabPanel>
          <p>Profile content…</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsPage;
