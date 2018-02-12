import React, { Component } from 'react';
import styled from 'styled-components';
import bkg from './img/jazz_club_bkg.png';
import menu from './img/menu_img.png';

const Wrapper = styled.div`
  height: 100vh;
  background: url(${bkg}) no-repeat center fixed;
  background-size: cover;
  background-color: black;
  margin: 0;
`;

const Header = styled.div`
  font-family: 'Limelight', cursive;
  background-color: rgba(112, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 700px) {
  }
`;

const Title = styled.h1`
  flex: 1;
  margin: 0em;
  padding: 16px 0;
  font-size: 3em;
  text-align: center;
  text-shadow: 1px 1px 10px rgb(167, 6, 39);
  @media (min-width: 700px) {
    padding: 24px 0;
    font-size: 5em;
  }
`;

const MenuButton = styled.div`
  flex: 1;
  margin: 0.1em auto 1em auto;
  cursor: pointer;
  background: url(${menu}) no-repeat center;
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

const MainContent = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1em;
  @media (min-width: 700px) {
    max-width: 600px;
    margin: 1em auto;
    border-radius: 16px;
  }
`;

class Menu extends Component {
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
              name={'videos'}
              onClick={() => this.props.selectMenu('videos')}
            >
              Videos
            </MenuItem>
          </MenuContents>
        ) : null}
      </div>
    );
  }
}

const View = ({ pageName }) => {
  const renderContent = () => {
    if (pageName === 'bio') {
      return <Bio />;
    } else if (pageName === 'videos') {
      return <Videos />;
    }
  };
  return <div>{renderContent()}</div>;
};

class Bio extends Component {
  render() {
    return <p>This is where the bio goes; where is it now? No one knows! </p>;
  }
}

class Videos extends Component {
  render() {
    return <div> Videos go here </div>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pageName: 'bio'
    };
  }
  openMenu() {
    this.setState(prevState => ({ open: !prevState.open }));
  }
  selectMenu(name) {
    this.setState({ pageName: name });
  }
  render() {
    return (
      <Wrapper>
        <Header>
          <Title>King Baron</Title>
          <Menu
            open={this.state.open}
            openMenu={this.openMenu.bind(this)}
            selectMenu={this.selectMenu.bind(this)}
          />
        </Header>
        <MainContent>
          <View pageName={this.state.pageName} />
        </MainContent>
      </Wrapper>
    );
  }
}
