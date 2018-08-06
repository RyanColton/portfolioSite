import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import ContactModal from './contactModal';
import TextLoop from './textLoop';

const HeaderContainer = styled.div`
  width:100%;
  background-image: url(http://3.bp.blogspot.com/-RPiGpWF62Ak/VWywdNHb0-I/AAAAAAAAAI8/PT_9us5cxDk/s1600/antigua%2Bguatemala%2Bruins.png);
  height: 760px;
  background-repeat: no-repeat;
  background-size:  cover;
`;
const PortfolioTitleContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.19);
  -webkit-box-shadow: 0px 0px 300px 139px rgba(255,255,255,0.19);
  -moz-box-shadow: 0px 0px 300px 139px rgba(255,255,255,0.19);
  box-shadow: 0px 0px 300px 139px rgba(255,255,255,0.19);
`;
const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledIcon = styled(Icon)`
  margin-top: 100px !important;
  margin-bottom: 70px !important;
`


const PageHeader = () => (
  <HeaderContainer>
    <PortfolioTitleContainer>
      <HeaderTitle>
        <StyledIcon
          name='code'
          size='massive'
          inverted
        />
        <TextLoop />
        <ContactModal />
      </HeaderTitle>
    </PortfolioTitleContainer>
  </HeaderContainer>
);

export default PageHeader;
