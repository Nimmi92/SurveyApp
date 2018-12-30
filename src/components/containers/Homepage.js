import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
 min-height: 50em;
 margin: 0 auto;
 width: 80%;
`

const HomePage = () => {
  return (
    <Container>
     HomePage <br/>
     <Link to="/other"> Go to other page </Link>
    </Container>
  );
};

export default HomePage;