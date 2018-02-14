import React, { Component } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5;
`;

const IMAGE = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0.2em 0;
  border-radius: 16px;
`;

export default class Pictures extends Component {
  render() {
    return (
      <GalleryContainer>
        <IMAGE src={require('../img/tim_with_title.png')} />
        <IMAGE src={require('../img/paul_shred.png')} />
        <IMAGE src={require('../img/lauren_singing.jpg')} width="100%" />
        <IMAGE src={require('../img/tim_sing.png')} />
        <IMAGE src={require('../img/cartmusic.jpg')} />
      </GalleryContainer>
    );
  }
}
