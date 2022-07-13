import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import 'react-tabs/style/react-tabs.css';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { slogans } from '../../slogans'
import Slogan from './slogan';

function Slogans() {

  return (
    <div>
      <button className="btn btn-outline-light float-right" onClick={() => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSeV_bsOrsntTNpAefR9o8OmhPT7FaDWrS9yzvp1EQl-aePalA/viewform', '_blank');
      }}>Submit Slogans</button>
      <br />
      <h4 className="mb-3">Sinhala</h4>
      <div className="card-columns">
        {slogans.sinhala.length !== 0 ?
          slogans.sinhala.map((slogan, index) => <Slogan key={`sinhala-slogan-${index}`} slogan={slogan} />) :
          <span>No slogans in Sinhala yet. </span>}
      </div>
      <br />
      <br />
      <h4 className="mb-3">English</h4>
      <div className="card-columns">
        {slogans.english.length !== 0 ?
          slogans.english.map((slogan, index) => <Slogan key={`english-slogan-${index}`} slogan={slogan} />) :
          <span>No slogans in English yet. </span>
        }
      </div>
      <br />    <br />
      <h4 className="mb-3">Tamil</h4>
      <div className="card-columns">
        {slogans.tamil.length !== 0 ?
          slogans.tamil.map((slogan, index) => <Slogan key={`tamil-slogan-${index}`} slogan={slogan} />) :
          <span>No slogans in Tamil yet. </span>
        }
      </div>
      <br />
    </div>
  );
}

export default Slogans;
