import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from 'styled-components';
import { listings } from './data';
import Listing from './listing';

const PortfolioTitle = styled.div`
  margin-top: 40px !important;
`;
const PortfolioListings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Portfolio = () => (
  <div>
    <PortfolioTitle>
      <h1>Portfolio</h1>
    </PortfolioTitle>
    <PortfolioListings>
      {listings.map (item => <Listing {...item} />)}
    </PortfolioListings>
  </div>
);

export default Portfolio;
