import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function CustomTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Usage</Tab>
        <Tab>Settings</Tab>
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
    </Tabs>
  );
}
