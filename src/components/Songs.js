import React, { Component } from 'react';
import styled from 'styled-components';

const SongListTitle = styled.div`
  text-align: center;
  font-size: 1.5em;
`;
const SongList = styled.ul`
  list-style: none;
  text-indent: -0.6em;
  column-gap: 2em;
  @media (min-width: 700px) {
    columns: 2;
  }
`;

export default class Songs extends Component {
  render() {
    return (
      <div>
        <SongListTitle>
          <i> Some of the songs we play:</i>
        </SongListTitle>
        <SongList>
          <li>After You've Gone</li>
          <li>Ain’t Misbehavin’</li>
          <li>Airmail Special</li>
          <li>All of Me</li>
          <li>Angel Eyes</li>
          <li>Autumn Leaves</li>
          <li>Beautiful Love</li>
          <li>Bei Mir Bist Du Schoen</li>
          <li>Bemsha Swing</li>
          <li>Blue Drag</li>
          <li>Blue Skies</li>
          <li>Body and Soul</li>
          <li>Brother, Can You Spare a Dime?</li>
          <li>Bye Bye Blackbird</li>
          <li>Cherokee</li>
          <li>Come Rain or Come Shine</li>
          <li>Coquette</li>
          <li>Daphne</li>
          <li>Darn that Dream</li>
          <li>Dinette</li>
          <li>Doctor Jazz</li>
          <li>Douce Ambiance</li>
          <li>Easy Living</li>
          <li>Exactly Like You</li>
          <li>Georgia</li>
          <li>Good Bait</li>
          <li>Hard Hearted Hannah, the Vamp of Savannah</li>
          <li>Honey Suckle Rose</li>
          <li>How High the Moon</li>
          <li>I Got It Bad</li>
          <li>I Thought About You</li>
          <li>I've Got the World on a String</li>
          <li>I’ve Found a New Baby</li>
          <li>If I Can’t Sell It, I’ll Keep Sittin’ On It</li>
          <li>I’m Sailing On a Sunbeam</li>
          <li>In the Mood</li>
          <li>Is You Is or Is You Ain’t My Baby?</li>
          <li>It Don't Mean a Thing</li>
          <li>It’s Only a Paper Moon</li>
          <li>Let's Cool One</li>
          <li>Louisiana Fairytale</li>
          <li>Lulu Swing</li>
          <li>Mack the Knife</li>
          <li>Minor Swing</li>
          <li>My Blue Heaven</li>
          <li>Oh Lady Be Good</li>
          <li>On the Sunny Side of the Street</li>
          <li>Saint James Infirmary</li>
          <li>Satin Doll</li>
          <li>Sheik of Araby</li>
          <li>Smile</li>
          <li>Someday My Prince Will Come</li>
          <li>Straighten Up and Fly Right</li>
          <li>Summertime</li>
          <li>Sweet Sue</li>
          <li>Swing 39</li>
          <li>Take the A-Train</li>
          <li>Tangerine</li>
          <li>Tchavolo Swing</li>
          <li>That Sugar Baby o’ Mine</li>
          <li>The Golddigger’s Song (We’re in the Money)</li>
          <li>There Ain't No Sweet Man</li>
          <li>Tico Tico</li>
          <li>Til there was You</li>
          <li>Topsy</li>
          <li>Troublant Bolero</li>
          <li>Undecided</li>
          <li>When You're Smiling</li>
          <li>You Are Too Beautiful</li>
          <li>You’re The Cream In My Coffee</li>
          <li>You Rascal You (I'll Be Glad)</li>
        </SongList>
      </div>
    );
  }
}
