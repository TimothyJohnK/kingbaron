import React, { Component } from 'react';
import styled from 'styled-components';

const Player = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 40px 40x 40px auto;
`;
const MainSongTitle = styled.div`
  grid-row-start: 1;
  text-align: center;
  font-size: 1.3em;
  padding-bottom: .8em;
`;
const Audio = styled.div`
  grid-row-start: 2;
  grid-row-end: 2;
  cursor: pointer;
`;
const SongList = styled.div`
  grid-row-start: 4;
  list-style-type: none;
  cursor: pointer;
`;
const PlayerButtons = styled.div`
  font-size: 2em;
  padding: 0 1em 0.3em;
  grid-row-start: 3;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;
const PrevButton = styled.span`
  flex: 1;`;
const NextButton = styled.span` 
  flex: 1;
  text-align: right`;

const ListItem = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${props => (props.track % 2 === 0 ? 'rgba(255,255,255,.5)' : '')};
  padding: .2em;
  `;
const SongNumber = styled.span`
  text-align: left;
  `;
const SongTitle = styled.span`
  padding: 0 .5em 0 1em;
  flex: 1;
  text-align: left;
  `;
const SongLength = styled.span`
  text-align: right;
  `;

const songRepo = [
  {
    title: 'Ginkgo',
    songLength: '1:43',
    path: require('../recordings/Ginkgo.mp3')
  },
  {
    title: 'Bulgar From Odessa',
    songLength: '1:04',
    path: require('../recordings/Bulgar from Odessa.mp3')
  }
 
];

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  songBuilder() {
    return songRepo.map((song, index) => (
      <ListItem track={index} onClick={this.selectSong.bind(this, index)}>
        <SongNumber>{index + 1}</SongNumber>
        <SongTitle>{song.title}</SongTitle>
        <SongLength>{song.songLength}</SongLength>
      </ListItem>
    ));
  }

  selectSong(key) {
    this.setState({ count: key });
    this.waveformReload();
  }

  playerClick(type) {
    if (type === 'next_song' && this.state.count < songRepo.length - 1) {
      this.setState({ count: this.state.count + 1 });
    } else if (type === 'prev_song' && this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
    this.waveformReload();
  }

  waveformReload() {
    this.refs.waveform.pause();
    this.refs.waveform.load();
    this.refs.waveform.play();
  }

  render() {
    return (
      <Player>
        <MainSongTitle>
          {songRepo[this.state.count].title}
        </MainSongTitle>
        <Audio>
          <audio
            className="waveform"
            preload="auto"
            controls
            ref="waveform"
          >
            <source
              src={songRepo[this.state.count].path}
              type="audio/mp3"
            />
          </audio>
        </Audio>
        <PlayerButtons>
          <PrevButton onClick={this.playerClick.bind(this, 'prev_song')}>
                      &lsaquo;&lsaquo;
          </PrevButton>
          <NextButton onClick={this.playerClick.bind(this, 'next_song')}>
                      &rsaquo;&rsaquo;
          </NextButton>
        </PlayerButtons>
        <SongList>
          {this.songBuilder()}
        </SongList>
      </Player>
    );
  }
}