import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

interface Props {
  slogan: string,
}
function Slogan(props: Props) {
  const { slogan } = props;

  const OnClickCopyText = (e:any) => {
    const text = e.currentTarget.id;
    navigator.clipboard.writeText(text);
  }

  return (
    <Card className="bg-grey">
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
        <p className="mb-0">{slogan}</p>
        <button className="btn btn-transparent btn-sm" id={slogan} onClick={OnClickCopyText}><img src="assets/icons/copy.svg"/></button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Slogan;
