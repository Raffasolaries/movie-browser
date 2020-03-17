import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Carousel } from 'react-bootstrap';
import Movie from './MovieItem';

const MovieList = ({ movieList }) => (
  <Jumbotron>
    <Carousel>
      {movieList.map((movie, index) => (
        <Movie key={index} {...movie} />
      ))}
    </Carousel>
  </Jumbotron>
);

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MovieList;
