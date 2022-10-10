import React, { ReactElement } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// *** Main component ***
const Home = (): ReactElement => (
  <Row data-testid='homePageContainer'>
    <Col>
      <Card bg='secondary' text='white'>
        <Card.Body>
          <h1>Coming soon!</h1>
        </Card.Body>
      </Card>
      <p>
        This is the homepage for the Society of Math Spies. The system is
        currently being upgraded. Check back later.
      </p>
    </Col>
  </Row>
);

export default Home;

/*


Info
  Name
  Agent number

Skills
  Favorite number
  Favorite shape

Next assignment

Solved cases;
  






*/
