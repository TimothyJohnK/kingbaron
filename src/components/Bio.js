import React, { Component } from 'react';
import styled from 'styled-components';

const BAND = styled.div`
  text-align: center;
  font-size: 1.1em;
`;

const Header3 = styled.h3`
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
          <i>
            "Jazz standards and gypsy jazz played with a verve and inventive
            prowess."
          </i>
        </Header3>
        <BioBody>
          <p>
            King Baron plays those tunes that none of the other bands play.
            Happy tunes that would make even the most down and out feel like
            doing a tranky doo or shimmy into shim sham. King Baron loves that
            rhythm sweet and hot as well as the contemplative and wistful tones
            of a beautiful ballad. King Baron plays the songs you've been
            wanting to hear. King Baron performs primarily as a trio. We add
            members as needed to get the right sound for the gig. So it's not
            rare to hear us with drums or vocals. We love to play weddings,
            private parties, and celebrations of all sorts.
          </p>
          <p>
            As a group King Baron have performed throughout Minneapolis, St.
            Paul, and the surrounding areas sharing the stage with the likes of
            Doc Severinsen and other notables. As individuals they have toured
            the world playing an even broader range of styles. King Baron
            garners an enthusiastic response wherever they play.
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
