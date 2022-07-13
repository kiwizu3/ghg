import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Teams from '../teams';
import './event.scss';

interface Props {
    event: {
        district: string,
        teams: any[]
    }

}
function Event(props: Props) {

    const { event: { district, teams } } = props;
    return (
        <div className="mt-3">
            <h5 className="border-bottom border-gray pb-2 fw-bold">{district}</h5>
            <Teams teams={teams} />
        </div>
    );
}

export default Event;
