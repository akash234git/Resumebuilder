import React from 'react';
import {
  Card, CardImg, CardBody,Row,Col,Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./card.css";

const Cards = (props) => {
  return (
    <div className="cards-class">
        <h1 className="text">Resume Templates</h1>
        <p className="text">Select from our resume templates</p>
        <Container>
        <Row>
            <Col md={3}> 
      <Card>
         <div className="hover-img">
        <CardImg className="height-img" id="zoom-in"top width="100%" src="/assets/images/temp1.png" alt="Card image cap" />
        
        <CardBody>
                    <Link className="link-class" to="/details">Select Template</Link>
        </CardBody>
        </div>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src="/assets/images/temp2.jpg" alt="Card image cap" />
        <CardBody>
        <Link className="link-class" to="/details">Select Template</Link>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src="/assets/images/temp3.jpg" alt="Card image cap" />
        <CardBody>
        <Link className="link-class" to="/details">Select Template</Link>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src="/assets/images/temp4.jpg" alt="Card image cap" />
        <CardBody>
        <Link className="link-class" to="/details">Select Template</Link>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>

    </div>
  );
};

export default Cards;