import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Team from './team';
import './teams.scss'

interface Props {
    teams:any[]
}
function Teams(props:Props) {

    const {teams} =props;
  return (
   <div className="card-columns mt-3">
      {teams.map((team,index)=><Team key={`team-${index}`}team={team} />)}
   </div>
  );
}

export default Teams;
