import React from 'react';
import styled from 'styled-components';
import CalenderHeader from './CalenderHeader';
import CalenderBody from './CalenderBody';

const Wrapper = styled.div`
  margin: 0 auto;
`;

class Calender extends React.Component {
  render() {
    return (
      <Wrapper>
        <CalenderHeader></CalenderHeader>
        <CalenderBody></CalenderBody>
      </Wrapper>
    )
  }
}

export default Calender;