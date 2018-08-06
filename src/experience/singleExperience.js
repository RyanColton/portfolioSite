import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const ExperinceContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-start;
  margin-bottom: 15px
`;
const CompanyImageContainer = styled.div`
  width: 150px;
  height: 150px;
`;
const CompanyImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 325px;
  margin-left: 50px
`
const Title = styled.p`
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 25px;
`;
const Company = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
`;
const TimeWorked = styled.p`
  font-size: 15px;
  color: grey;
`;

const SingleExperience = ({ title, company, location, date, image }) => (
  <ExperinceContainer>
    <CompanyImageContainer>
      <CompanyImage src={image} />
    </CompanyImageContainer>
    <InfoContainer>
      <Title>{title}</Title>
      <Company>{company} - {location}</Company>
      <TimeWorked>{date}</TimeWorked>
    </InfoContainer>
  </ExperinceContainer>
)

export default SingleExperience;
