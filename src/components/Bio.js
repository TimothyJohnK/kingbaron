import React, { Component } from 'react';
import styled from 'styled-components';

const BAND = styled.div`
  text-align: center;
  font-size: 1.1em;
`;

const Header3 = styled.h3`
  text-align: center;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-family: 'Limelight', cursive;
`;
const BioBody = styled.div`
  text-align: left;
  margin: 0.2em;
  @media (min-width: 700px) {
    margin: 0.2 1em;
  }
`;

export default class Bio extends Component {
  render() {
    return (
      <div>
        <Header3>
          <i>Jazz - standards, gypsy, trad, swing</i>
        </Header3>
        <BioBody>
          <p>
            King Baron have performed throughout Minneapolis, St. Paul, and the
            surrounding areas sharing the stage with the likes of Doc Severinsen
            and other notables. As individuals they have toured the world
            playing concert halls, festival stages, street corners, bars,
            restaurants, and wherever people gather to have a good time.
            Available for weddings, private parties, and celebrations of all
            sorts.
          </p>
        </BioBody>
        <BAND>
          <h4>
            <p>Paul Fonfara - clarinet</p>
            <p>Tim Kirchhof - guitar</p>
            <p>Eric Struve - bass</p>
          </h4>
        </BAND>
      </div>
    );
  }
}
