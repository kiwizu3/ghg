import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {events} from '../../events';
import Event from './event'

function Events() {

  return (
   <div className='events'>
        <button className="btn btn-outline-light float-right" onClick={()=>{
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2ycUwqrC3O6fRhBaj1hOw_SAZqppXuw8mrlD-T6AWyMcP7g/viewform', '_blank');
      }}>Submit Agitation</button>
      
      {/* <Filter events={events}/> */}
      <br/>
      <br/>
       {events.map((event,index)=><Event key={`event-${index}`}event={event}/>
       )}
   </div>
  );
}

export default Events;
