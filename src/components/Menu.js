import React, { Component } from 'react';
import styled from 'styled-components';
import menu_img from '../img/menu_img.png';

const MenuButton = styled.div`
  flex: 1;
  margin: 0.1em auto 1em auto;
  cursor: pointer;
  background: url(${menu_img}) no-repeat center;
  background-size: contain;
  height: 36px;
  width: 42px;
  border-radius: 8px;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  @media (min-width: 700px) {
    position: absolute;
    left: 2em;
    top: 2.8em;
    height: 48px;
    width: 56px;
  }
`;
const MenuContents = styled.div`
  flex-direction: column;
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
const MenuItem = styled.div`
  font-size: 1.4em;
  padding: 0.3em 0.2em 0.2em 0.2em;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  outline: 1px solid white;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  @media (min-width: 700px) {
    font-size: 1.4em;
    flex: 1;
    margin: 0 1px;
  }
`;

export default class Menu extends Component {
  render() {
    return (
      <div>
        <MenuButton
          onClick={this.props.openMenu}
          select={this.props.selectMenu}
        />
        {this.props.open ? (
          <MenuContents>
            <MenuItem name={'bio'} onClick={() => this.props.selectMenu('bio')}>
              Bio
            </MenuItem>
            <MenuItem
              name={'songs'}
              onClick={() => this.props.selectMenu('songs')}
            >
              Songs
            </MenuItem>
            <MenuItem
              name={'pictures'}
              onClick={() => this.props.selectMenu('pictures')}
            >
              Pictures
            </MenuItem>
            <MenuItem
              name={'contact'}
              onClick={() => this.props.selectMenu('contact')}
            >
              Contact
            </MenuItem>
          </MenuContents>
        ) : null}
      </div>
    );
  }
}

// <MenuItem
// name={'videos'}
// onClick={() => this.props.selectMenu('videos')}
// >
// Videos
// </MenuItem>
