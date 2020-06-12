import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import BarberCard from './BarberCard';
import { Spin, Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const BarberList = props => {
  // const employees = useSelector(state => state.employees.employeeList);

  const renderCards = () => {
    return props.employees.map(employee => {
      return <BarberCard employee={employee} />
    })
  }

  return(
    <div>
      {
        props.employees !== null ? (
          <Container>
            {renderCards()}
          </Container>
        ) : (
          <Spin size='large' />
        )
      }
    </div>
  );
}

export default BarberList;