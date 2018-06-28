import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  border: 1px solid red;
  margin: 0;
`;

const Logo = styled.div`
  padding: 10px;
`;

const Card = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  border-top: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  width: 650px;
  height: 500px;
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: 100px auto 80px;
`;

const CardHeaderGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  align-items: center;
  font-size: 1.1em;
`;

const CardHeaderTitle = styled.div`
  font-weight: bold;
  display: inline-block;
  margin-right: 5px;
`;

const CardHeaderSubtitle = styled.div`
  color: grey;
  display: inline-block;
`;

const CardHeaderAuthor = styled.div`
  display: inline-block;
  color: blue;
`;

const CardHeader = () => {
  return (
    <CardHeaderGrid>
      <div>
        <CardHeaderTitle>The Practical Dev</CardHeaderTitle>
        <CardHeaderSubtitle>@ThePracticalDev - Sep 10</CardHeaderSubtitle>
      </div>
      <span>Learning React? Start Small.</span>
      <span>{'{'} author: <CardHeaderAuthor>@dceddia</CardHeaderAuthor> {'}'}</span>
    </CardHeaderGrid>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Card>
          <Logo>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/2000px-Color_icon_red.svg.png' style={{width: '100%', height: '100%', borderRadius: '50%'}}/>
          </Logo>         
          <CardHeader/>
          <Title>Dżemdobry</Title>
          <Title>Dżemdobry</Title>
        </Card>
      </div>
    );
  }
}

export default App;
