import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Events from '../events';
import Slogans from '../slogans';
import Videos from '../videos';
import './tabs.scss';


// -------------------- This component is not used anymore
function AppTabs() {

  const [posts, setPosts] = useState([])
  return (
  <>
    <Tabs className="tabs">
      <TabList>
        <Tab>Agitations (උද්ඝෝෂණ)</Tab>
        <Tab>Slogans (සටන් පාඨ)</Tab>
        <Tab>Videos</Tab>
      </TabList>
      <TabPanel>
        <Events />
      </TabPanel>
      <TabPanel>
          <Slogans />
      </TabPanel>
      <TabPanel>
          <Videos />
      </TabPanel>
    </Tabs>
  </>
  );
}

export default AppTabs;
