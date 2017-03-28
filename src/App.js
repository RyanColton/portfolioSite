import React, { Component } from 'react';
import {Icon, Button, Popup, Divider, Modal, Header} from 'semantic-ui-react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import Canje from './canjeco.png'
import ET from './e=t.png'
import './App.css';

class App extends Component {
  render() {
    const style = {
        borderRadius: 0,
        opacity: 0.9,
        padding: '1em',
      }
    const skillLogos = {
      javaScript: 'http://logo-load.com/uploads/posts/2016-09/javascript-logo.png',
      html: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png',
      css:'https://maxcdn.icons8.com/Share/icon/Logos//css31600.png',
      react: 'http://builtwithreact.io/img/share-logo.jpg',
      redux: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
      angular: 'https://angular.io/resources/images/logos/angular2/angular.png',
      node:'http://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      postgresSQL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/465px-Postgresql_elephant.svg.png',
      webpack: 'https://hsto.org/files/57d/b1c/e97/57db1ce976144a8caedecc3239ba2d99.png',
      gulp: 'https://cdn.worldvectorlogo.com/logos/gulp.svg',
      sass: 'http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png',
      semantic: 'https://semantic-ui.com/images/logo.png',
      immutable: 'https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/pfxsayjjyvwk3amjidxo.png',
      git: 'https://git-scm.com/images/logos/logomark-orange@2x.png',
      jquery: 'https://avatars0.githubusercontent.com/u/70142?v=3&s=400'
    }
    const cursorValues = {
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 100,
          }
    return (
      <div className='PortfolioPageContainer'>
        <div className='ImageHeaderSection'>
          <div className='PortfolioTitleContainer'>
          <div className='ImageSectionTitle'>
            <Icon className='ImageSectionIcon' name='code' size='massive' inverted/>
            <p className='ImageSectionTitleText'>Im Ryan, a Web Developer with a passion for</p>
            <TypistLoop interval={2000}>
                {[
                  'Javascript',
                  'HTML + CSS',
                  'Node JS',
                  'React + Redux',
                  'Angular JS',
                  'PostgresSQL'
                ].map(text => <Typist className="ImageSectionBodyText" key={text} startDelay={1000}>{text}</Typist>)}
              </TypistLoop>
              <Modal size='small' dimmer='blurring' trigger={<Button inverted size='huge'>Contact</Button>}>
                <Modal.Content className='ModalContent'>
                  <h3>I would love to work with you</h3>
                  <h2>Contact Me</h2>
                  <Header as='h3' icon='mail' content='ryan.m.colton@gmail.com' />
                  <div>
                    <a href='https://github.com/RyanColton'><Icon color='black' link name='github' size='big'/></a>
                    <a href="https://www.linkedin.com/in/ryan-michael-colton-812357133/">  <Icon color='black' link name='linkedin' size='big'/></a>
                    <a href='https://www.facebook.com/ryanmichael.colton'><Icon color='black' link name='facebook' size='big'/></a>

                  </div>


                </Modal.Content>
              </Modal>

          </div>
          </div>
        </div>
        <div className='SkillsSection'>
          <h1 className='SkillsTitle'>My Skills</h1>
          <div className='SkillsSkillsContainer'>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillImage' src={skillLogos.javaScript}/>}
                content='javaScript/ES6'
              />
            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillHTML' src={skillLogos.html}/>}
                content='HTML 5'
              />
            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillCSS' src={skillLogos.css}/>}
                content='CSS 3'
              />
            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.react}/>}
                content='React'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.redux}/>}
                content='Redux'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillAngular' src={skillLogos.angular}/>}
                content='Angular 1.x'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.node}/>}
                content='Node JS'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.postgresSQL}/>}
                content='PostgresSQL'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillAngular' src={skillLogos.webpack}/>}
                content='Webpack'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillGulp' src={skillLogos.gulp}/>}
                content='Gulp'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.sass}/>}
                content='SASS'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.semantic}/>}
                content='Semantic UI'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillReact' src={skillLogos.immutable}/>}
                content='Immutable JS'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillAngular' src={skillLogos.git}/>}
                content='GIT'
              />

            </div>
            <div className='IndividualSkillContainer'>
              <Popup
                position='top center'
                style={style}
                inverted
                trigger={<img className='IndividualSkillAngular' src={skillLogos.jquery}/>}
                content='jQuery'
              />

            </div>
          </div>
        </div>
        <div className='Portfolio'>
          <div className='PortfolioTitleContainer'>
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className='PortfolioListings'>
          <div className='PortfolioListing'>

            <div className='PortfolioListingInfo'>
              <h2>Employed Equals True</h2>
              <p className='PortfolioListingText'>A developer focused job site build to aid developers find the right job based on their skill set.</p>
              <div className='PortfolioListingLinks'>
                <a href='https://github.com/TeamDevFinder/dev-finder'>
                  <Icon name='github' size='large' link/>
                </a>
                <a href='http://employedequalstrue.com'>
                  <Icon name='home' size='large' link/>
                </a>
              </div>
            </div>
            <img src={ET} className='PortfolioListingImage' />
          </div>
          <div className='PortfolioListing'>
            <img src={Canje} className='PortfolioListingImage' />
            <div className='PortfolioListingInfo'>
              <h2>Canje</h2>
              <p className='PortfolioListingText'>Born from a desire to have a place to trade duplicate wedding gifts, canje.co is a bartering marketplace where you can connect with others to trade the items you no longer want or need.</p>
              <div className='PortfolioListingLinks'>
                <a href='https://github.com/RyanColton/canjeApp'>
                  <Icon name='github' size='large' link/>
                </a>
                <a href='http://canje.co'>
                  <Icon name='home' size='large' link/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className='FooterContainer'>

          <Icon  className="FooterIcon"inverted name='code' size='huge' />
          <h1 >Ryan Colton</h1>
          <Divider />
          <Header as='h3' icon='mail' content='ryan.m.colton@gmail.com' />
          <div>
            <a href='https://github.com/RyanColton'><Icon circular color='black' link name='github' size='big'/></a>
            <a href="https://www.linkedin.com/in/ryan-michael-colton-812357133/">  <Icon circular color='black' link name='linkedin' size='big'/></a>
            <a href='https://www.facebook.com/ryanmichael.colton'><Icon  circular color='black' link name='facebook' size='big'/></a>

          </div>

          <h3 className='FooterCopyright'>Built by Ryan Colton <Icon name='copyright' /> 2017.</h3>
        </footer>


      </div>
    );
  }
}

export default App;
