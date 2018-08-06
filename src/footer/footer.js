import React from 'react';
import { Icon, Divider, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: rgb(139, 160, 181)
`;
const FooterCopyright = styled.h3`
  margin-bottom: 20px !important
`

const PageFooter = () => (
  <FooterContainer>
    <Icon
      className="FooterIcon"
      inverted
      name='code'
      size='huge'
    />
    <h1>Ryan Colton</h1>
    <Divider />
    <Header
      as='h3'
      icon='mail'
      content='ryan.m.colton@gmail.com'
    />
    <div>
      <a href='https://github.com/RyanColton'>
        <Icon
          circular
          color='black'
          link
          name='github'
          size='big'
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ryan-michael-colton-812357133/"
      >
        <Icon
          circular
          color='black'
          link
          name='linkedin'
          size='big'
        />
      </a>
      <a href='https://www.facebook.com/ryanmichael.colton'>
        <Icon
          circular
          color='black'
          link
          name='facebook'
          size='big'
        />
      </a>
    </div>
    <FooterCopyright>
      Built by Ryan Colton <Icon name='copyright' /> 2018.
    </FooterCopyright>
  </FooterContainer>
);

export default PageFooter;
