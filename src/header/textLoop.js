import React from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import styled from 'styled-components';
import { skillArray } from '../utils'

const LeadText = styled.p`
  font-family: 'Space Mono', monospace;
  color: white;
  font-size: 45px;
  margin-bottom: 40px !important;
  margin: 20px;
`;
const SkillText = styled(Typist)`
  font-family: 'Space Mono', monospace;
  color: white;
  font-size: 45px;
  margin-bottom: 100px !important;
`

const TextLoop = () => (
  <div>
    <LeadText>
      Im Ryan, a Software Engineer with a passion for
    </LeadText>
    <TypistLoop interval={2000}>
      {skillArray.map(text => (
        <SkillText
          key={text}
          startDelay={1000}
        >
          {text}
        </SkillText>
      ))}
    </TypistLoop>
  </div>
)

export default TextLoop
