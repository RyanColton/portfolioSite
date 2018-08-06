import React from 'react';
import {Icon, Button, Modal, Header} from 'semantic-ui-react'
import styled from 'styled-components';

const ModalContent = styled(Modal.Content)`
  text-align: center !important;
  background-color: azure !important;
  display: flex!important;
  align-items: center!important;
  flex-direction: column!important;
`

const ContactModal = () => (
  <Modal
    size='small'
    dimmer='blurring'
    trigger={
    <Button
        inverted
        size='huge'
      >
        Contact
      </Button>
    }
  >
    <ModalContent className='ModalContent'>
      <h3>I would love to work with you</h3>
      <h2>Contact Me</h2>
      <Header
        as='h3'
        icon='mail'
        content='ryan.m.colton@gmail.com'
      />
      <div>
        <a
          href='https://github.com/RyanColton'>
          <Icon
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
            color='black'
            link
            name='linkedin'
            size='big'
          />
        </a>
        <a
          href='https://www.facebook.com/ryanmichael.colton'
        >
          <Icon
            color='black'
            link
            name='facebook'
            size='big'
          />
        </a>
      </div>
    </ModalContent>
  </Modal>
)

export default ContactModal
