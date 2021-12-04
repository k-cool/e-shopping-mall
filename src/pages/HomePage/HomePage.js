import React from 'react';
import Directory from '../../components/Directory/Directory';
import { HomepageContainer } from './HomePage.styled';

const Homepage = props => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
