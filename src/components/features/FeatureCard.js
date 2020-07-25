import React from "react";
import Card from "react-bootstrap/Card";

function FeatureCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
            <Card.Body>
                <Card.Title>Card {props.cardNumber}</Card.Title>
                <Card.Text>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FeatureCard;
