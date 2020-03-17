import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      Movie List
    </Link>
    <Link className="btn btn-secondary" to="/show-movie">
      Show Movie
    </Link>
  </NavigationBar>
);
