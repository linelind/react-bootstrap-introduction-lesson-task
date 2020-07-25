import React from "react";
import "./sass/style.scss";
import Nav from "./components/layout/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UsersTable from "./components/users/UsersTable";
import CommentForm from "./components/forms/CommentForm";
import AdminTabs from "./components/tabs/AdminTabs";
import Footer from "./components/layout/Footer";
import AdminAccordion from "./components/accordion/AdminAccordion";
import FeatureCards from "./components/features/FeatureCards";

function App() {
    return (
        <>
            <div className="wrapper">
                <Nav />
                <Container>
                    <UsersTable />
                    <FeatureCards />
                    <Row>
                        <Col md={6}>
                            <AdminAccordion />
                            <div className="d-none d-md-block">
                                <AdminTabs />
                            </div>
                        </Col>
                        <Col md={6}>
                            <CommentForm />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default App;
