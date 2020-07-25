import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureCard from "./FeatureCard";

function FeatureCards() {
    return (
        <div className="features">
            <h2>Features</h2>
            <Row>
                <Col md={4}>
                    <FeatureCard cardNumber={1} />
                </Col>
                <Col md={4}>
                    <FeatureCard cardNumber={2} />
                </Col>
                <Col md={4}>
                    <FeatureCard cardNumber={3} />
                </Col>
            </Row>
        </div>
    );
}

export default FeatureCards;
