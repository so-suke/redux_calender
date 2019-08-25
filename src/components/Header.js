import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { goPrevMonth, goNextMonth } from '../actions';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <button onClick={() => this.props.goPrevMonth()}>PrevMonth</button>
        <p>2019/{this.props.month}</p>
        <button onClick={() => this.props.goNextMonth()}>NextMonth</button>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return { month: state.date.getMonth() + 1 }
}
function mapDispatchToProps(dispatch) {
  return {
    goPrevMonth: () => dispatch(goPrevMonth()),
    goNextMonth: () => dispatch(goNextMonth()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
