import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Holiday from '../holiday'
import Work from '../work';
import Personal from '../personal';
import Header from '../header';



const Home = () => {
    return(
        <>
        <Header />
        <Container className="home-wrapper ">
            
            <Row className="p-0 text-center justify-content-between">
                <Col md={4} ><Personal /></Col>
                <Col md={4} ><Work /></Col>
                <Col md={4} ><Holiday /></Col>
            </Row>
        </Container>

        </>
    )

}

export default Home;