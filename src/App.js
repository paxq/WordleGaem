import { Container, Row, Col } from 'react-bootstrap';

import Board from './Board';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col xs='3' />
        <Col xs='6'>
          <main>
            <header>
              <h1>Wordle Gaem</h1>
              <h2>by Paxton Weathers</h2>
              <h3>idea stolen from some other dude</h3>
            </header>
            <Board />
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
