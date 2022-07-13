import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ordinal } from '../../../../libs/strings'
import 'react-tabs/style/react-tabs.css';
import './team.scss'
interface Props {
    team: {
        name:string,
        day: string,
        date: string,
        time: string,
        staringAt: string,
        endingAt: string,
        description:string
    }
}
function Team(props: Props) {

    const { team: { day, date, time, staringAt, endingAt, description,name } } = props
    const month = date.substring(date.indexOf(' ') + 1);
    const monthFormatted = month.slice(0, 3)
    return (
        <div className="card border-0">
            <div className="p-3 bg-grey">

                <div className="d-flex justify-content-between align-items-top">
                    <h5>{name?name:"event"}</h5>
                    <div className="text-right">
                        <h3 className="mb-0">{day}</h3>
                        <h6 className="text-uppercase">{monthFormatted}</h6>
                    </div>
                    {/* <p><span>{day}<sup>{ordinal(day)}</sup></span></p> */}
                </div>
                <div className="d-flex align-items-center">
                    <img src="assets/icons/time.svg" />
                    <h6 className="mb-0 ms-2">{time}</h6>
                </div>
                <div className="d-flex align-items-center my-3">
                    <img src="assets/icons/place.svg" />
                    <h6 className="mb-0 ms-2">{staringAt}</h6>
                </div>
                <p className="text-center">{description}</p>
                <button className="btn btn-dark w-100">Learn more</button>
            </div>
        </div>
    );
}

export default Team;
