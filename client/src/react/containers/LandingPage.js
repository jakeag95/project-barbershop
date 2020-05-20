import React, { useEffect, useState }from 'react';
import { useDispatch } from 'react-redux'
import { getEmployees } from '../../redux/actions/employeeActions'
import axios from 'axios';
import styled from 'styled-components';
import BarberList from '../components/BarberList';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
  border-color: #666;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

function LandingPage() {
  //const dispatch = useDispatch();
  const [employees, setEmployees] = useState(null);
  
  useEffect(() => {
    axios
      .get('/employees')
      .then(res => {
        setEmployees(res.data)
    })
  }, []);

  return (
    <div>
        <h1>Barber Harbor</h1>
        <BarberList employees={employees}/>
    </div>
  );
}

export default LandingPage;

