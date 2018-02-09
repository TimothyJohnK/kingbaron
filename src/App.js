import React, { Component } from 'react';
import styled from 'styled-components';
import bkg from './img/jazz_club_bkg.png';
import menu from './img/menu_img.png';

const Wrapper = styled.div`
  min-height: 100vh;
  background: url(${bkg}) no-repeat center fixed;
  background-color: black;
  margin: 0;
`;

const Header = styled.div`
  font-family: 'Limelight', cursive;
  background-color: rgba(112, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  flex: 1;
  margin: 0em;
  padding: 0.5em 0 0.1em 0;
  font-size: 3em;
  text-align: center;
  text-shadow: 1px 1px 10px rgb(167, 6, 39);
`;

const MenuButton = styled.div`
  flex: 1;
  margin: 0.1em auto 0.2em auto;
  cursor: pointer;
  background: url(${menu}) no-repeat center;
  background-size: contain;
  height: 48px;
  width: 56px;
  border-radius: 8px;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Text = styled.div`
  padding: 1em;
  position: relative;
  max-width: 1000px;
`;
class Menu extends Component {
  openMenu(onMenuClick) {
    return (
      <div>
        <Text onMenuClick={() => onMenuClick('bio')}>Bio</Text>
        <Text onMenuClick={() => onMenuClick('Videos')}>Videos</Text>)
      </div>
    );
  }
  render() {
    return <MenuButton onClick={this.openMenu.bind(this)} />;
  }
}
class Bio extends Component {
  render() {
    return (
      <Text>
        <p>This is where the bio goes; where is it now? No one knows! </p>
      </Text>
    );
  }
}
class Videos extends Component {
  render() {
    return <Text> Videos go here </Text>;
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
  return <div> {renderContent()}</div>;
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pageName: 'bio' };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(props) {
    this.setState({ page: props.pageName });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>King Baron</Title>
          <Menu onMenuClick={this.handleButton} />
        </Header>
        <MainContent>
          <View pageName={this.state.pageName} />
        </MainContent>
      </Wrapper>
    );
  }
}
