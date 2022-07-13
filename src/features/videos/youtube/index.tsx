import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

interface Props {
  link: string
}
function Youtube(props: Props) {
  const { link } = props;
  return (
    <>
      <iframe width="100%" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </>
  );
}

export default Youtube;
