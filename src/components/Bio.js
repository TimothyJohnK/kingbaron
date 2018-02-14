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
            "Traditional jazz, American music, and early 20th century tunes
            played with verve and inventive prowess."
          </i>
        </Header3>
        <BioBody>
          <p>
            After a hardscrabble childhood on the streets of Musictown a young
            King Baron, full of hokum and how-do-you-do, found their way to
            Minneapolis. King Baron plays those tunes that none of the other
            bands play. Quality tunes that would make even the most down and out
            feel like doing a tranky doo or shimmy into shim sham. King Baron
            loves that rhythm sweet and hot. They also know the contemplative
            and wistful tones that will strum the heart strings and tickle the
            fancy of even the most carefree Tom, Dick, or Sally. King Baron
            plays the songs you've been wanting to hear and may have never
            heard.
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
            <p>Lauren Asheim - vocals</p>
            <p>Paul Fonfara - clarinet</p>
            <p>Josh Granowski - bass</p>
            <p>Tim Kirchhof - guitar</p>
          </h4>
        </BAND>
      </div>
    );
  }
}
