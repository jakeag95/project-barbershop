import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spin, Button } from 'antd';
import styled from 'styled-components';

// This page will nost likely be a container, we can set the selected barber in redux possibly.
// An axios call with the url param id or action should be dispatched on page load so users can 
// naviagte directly to a barber page.

const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const BarberProfile = (props) => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`/employees/${id}`)
      .then(res => {
        setEmployee(res.data)
    })
  }, []);

  if(employee !== null) {
    return(
      <div>
        <h1>{employee.name}</h1>
        <p>{employee.bio}</p>
        <Button type='primary' onClick={() => props.history.goBack()}>Go Back</Button>
      </div>
    )
  } else {
    return(
      <Container>
        <Spin size='large'/>
      </Container>
    )
  }
}

export default BarberProfile;