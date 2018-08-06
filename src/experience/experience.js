import React from 'react';
import styled from 'styled-components';
import SingleExperience from './singleExperience';
import { experienceData } from './data';

const ExperienceTitle = styled.div`
  margin-top: 40px !important;
`;
const Experiences = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px; 
`;

const Experience = () => (
  <div>
    <ExperienceTitle>
      <h1>Work Experience</h1>
    </ExperienceTitle>
    <Experiences>
      {experienceData.map(item => <SingleExperience {...item} />)}
    </Experiences>
  </div>
)

export default Experience;
