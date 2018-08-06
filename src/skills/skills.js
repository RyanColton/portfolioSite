import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from 'styled-components';
import { style, skillLogos } from '../utils'

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 100%;
  background-color: rgb(139, 160, 181)
`;
const SkillsTitle = styled.h1`
  padding-top: 40px !important;
`;
const SkillsDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SingleSkill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height:125px;
  width:125px;
  border-radius: 20px;
  margin: 30px
`;
const SkillImage = styled.img`
  width:100px;
`

const Skills = () => (
  <SkillsContainer>
    <SkillsTitle>
      My Skills
    </SkillsTitle>
    <SkillsDiv>
      {skillLogos.map(skill => (
        <SingleSkill>
          <Popup
            position='top center'
            style={style}
            inverted
            trigger={
              <SkillImage
                src={skill.imgUrl}
              />
            }
            content={skill.text}
          />
        </SingleSkill>
      ))}
    </SkillsDiv>
  </SkillsContainer>
);

export default Skills;
