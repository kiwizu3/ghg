import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, CardBody, CardColumns, CardText, CardTitle, Col, Row } from 'reactstrap';
import { videos } from '../../videos'
import Youtube from './youtube';

interface Props {

}
function Videos(props: Props) {
  return (
    <>
      <CardColumns>
        <Card className="bg-transparent">
          {videos.youtube.map((link, index) => <Youtube key={index} link={link} />)}
        </Card>
      </CardColumns>
    </>
  );
}

export default Videos;
