import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function AdminTabs() {
    return (
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
            <Tab eventKey="one" title="Lorem">
                Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.
            </Tab>
            <Tab eventKey="two" title="Ipsem">
                Vestibulum vel nisl sodales, elementum purus nec, bibendum elit. Nullam suscipit volutpat aliquet. Donec congue dapibus est non dignissim.
            </Tab>
            <Tab eventKey="three" title="Dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dolor eros.
            </Tab>
            <Tab eventKey="four" title="Porta">
                Nam ullamcorper urna quis euismod sollicitudin.
            </Tab>
        </Tabs>
    );
}

export default AdminTabs;
