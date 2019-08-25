import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Calender from './Calender';

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid gray;
  padding: .25rem .5rem;
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Header></Header>
          <Calender></Calender>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App;