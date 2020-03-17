import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import ShowMovie from './containers/ShowMovie';
import MovieListContainer from './containers/SlideshowContainer';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Movie Browser</h1>
            <Navigation />
            <Route exact path="/" component={MovieListContainer} />
            <Route exact path="/show-movie" component={ShowMovie} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
