import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getDay, startOfMonth, getDaysInMonth } from 'date-fns';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 30px);
  grid-gap: 5px;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`

class CalenderBody extends React.Component {
  render() {
    const Columns = [];
    const dayOfWeekStart = getDay(startOfMonth(this.props.date));
    const daysOfMonth = getDaysInMonth(this.props.date);
    let id = 0;
    for (let index = 0; index < dayOfWeekStart; index++) {
      Columns.push(<Column key={id++}></Column>);
    }
    for (let index = 1; index <= daysOfMonth; index++) {
      Columns.push(<Column key={id++}>{index}</Column>);
    }
    const columnsNumberTotal = 42;
    const daysRemaining = columnsNumberTotal - Columns.length;
    for (let index = 1; index <= daysRemaining; index++) {
      Columns.push(<Column key={id++}>{index}</Column>);
    }
    return (
      <Wrapper>
        {Columns}
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return { date: state.date }
}

export default connect(mapStateToProps)(CalenderBody)