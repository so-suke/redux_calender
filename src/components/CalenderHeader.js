import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  text-align: center;
`;

class CalenderHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>日</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div>土</div>
      </Wrapper>
    )
  }
}

export default CalenderHeader;