import React, { Component } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  font-size: 2em;
  text-align: center;
`;

const Email = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    color: rgb(180, 0, 0);
  }
`;

export default class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <div>Booking:</div>
        <Email href="mailto: palabrajot@hotmail.com">
          click here to email King Baron
        </Email>
      </ContactWrapper>
    );
  }
}
