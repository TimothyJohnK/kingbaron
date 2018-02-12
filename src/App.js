import React, { Component } from 'react';
import styled from 'styled-components';
import bkg from './img/jazz_club_bkg.png';
import Menu from './components/Menu';
import Videos from './components/Videos';
import Bio from './components/Bio';

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
