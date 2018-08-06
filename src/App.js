import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import PageHeader from './header/header';
import Experience from './experience/experience';
import Skills from './skills/skills';
import Portfolio from './portfolio/portfolio';
import PageFooter from './footer/footer';

const Container = styled.div`
  text-align: center;
  margin: -16px;
  padding: 0px;
`
class App extends Component {
  render() {
    return (
      <Container>
        <PageHeader />
        <Experience />
        <Skills />
        <Portfolio />
        <PageFooter />
      </Container>
    )
  }
};

export default App;
