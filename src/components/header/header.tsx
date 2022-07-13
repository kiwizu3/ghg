import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './header.scss';

function Header() {

    return (

        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <div className="logo-container">
                            <img src="assets/images/logo.svg" className="logo" />
                            <h4 className="text-uppercase mt-3">Rise as one nation</h4>
                            <p className="text-uppercase mb-0">Against the corruption of</p>
                            <h2 className="text-uppercase fw-bold">Sri Lanka</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Header;
