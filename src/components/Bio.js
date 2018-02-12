import React, { Component } from 'react';
import styled from 'styled-components';

const TEXT = styled.div`
  text-align: center;
`;
const BAND = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

export default class Bio extends Component {
  render() {
    return (
      <div>
        <TEXT>
          <p>
            After a hardscrabble childhood on the streets of Musictown a young
            King Baron made his way North full of hokum and how-do-you-do to
            show the world that even when knocked down a King is never bowed.
            Determined to make a difference in a world that seem to be getting
            greater again all the time at the expense of everyone in it King
            Baron decided to play those tunes that none of the other bands play.
            Quality tunes that would make even the most down and out feel like
            doing a tranky doo or shimmy into shim sham. King Baron loved that
            rhythm sweet and hot. Though those up-tempos numbers will always
            have a piece of his heart he is not only a passionate fellow but a
            thoughtful fellow as well. He knows that the contemplative tones of
            many a songs can strum the heart strings and carress the brain of
            even the most carefree Tom, Dick, or Sally. King Baron plays the
            songs you've been wanting to hear and may have never heard.
          </p>
          <p>
            As a group King Baron have performed throughout Minneapolis, St.
            Paul, and the surrounding areas sharing the stage with such notables
            as: Doc Severinsen. As individuals they have toured the world
            playing an even broader range of styles. King Baron garners an
            enthusiastic response wherever they play.
          </p>
        </TEXT>
        <br />
        <BAND>
          <p>Lauren Asheim - vocals</p>
          <p>Paul Fonfara - clarinet</p>
          <p>Josh Granowski - bass</p>
          <p>Tim Kirchhof - guitar</p>
        </BAND>
      </div>
    );
  }
}
