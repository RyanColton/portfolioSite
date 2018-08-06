import React from 'react';
import { string, bool, shape, arrayOf } from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const PortfolioListing = styled.div`
  width:80%;
  display: flex;
  height: 300px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const PortfolioText = styled.p`
  color: grey;
`
const PortfolioImage = styled.img`
  width: 500px;
  margin: 20px;
`;

const Listing = ({title, text, links, image}) => (
  <PortfolioListing>
    {image.position === 'left' &&
      <PortfolioImage src={image.src} />
    }
    <div>
      <h2>{title}</h2>
      <PortfolioText>
        {text}
      </PortfolioText>
      <div>
        {
          links.map(link => (
            <a href={link.link}>
              <Icon
                name={link.name}
                size="large"
                link
              />
            </a>
          ))
        }
      </div>
    </div>
    {image.position === 'right' &&
      <PortfolioImage src={image.src} />
    }
  </PortfolioListing>
);

Listing.propTypes = {
  title: string,
  text: string,
  links: arrayOf(shape({
    name: string,
    link: string,
  })),
  image: shape({
    position: string,
    src: string,
  })
}

export default Listing
