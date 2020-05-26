import React, { useEffect, useState }from 'react';
import { useDispatch } from 'react-redux'
import { getEmployees } from '../../redux/actions/employeeActions'
import axios from 'axios';
import styled from 'styled-components';
import BarberList from '../components/BarberList';
import Button from '@material-ui/core/Button';

const Background = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  text-align: center;
  border-color: #666;
  background-size: cover;
  background-color: grey;
  background-attachment: fixed;
  background-position: center;
`;

const Logo = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    <React.Fragment>
      <Background>
        <Logo>
            <h1>Barber Harbor</h1>
          <div>
            <Button variant="contained" color="primary">Book Now</Button>
            <Button variant="contained" color="primary">Barbers</Button>
          </div>
        </Logo>
      </Background>
      <BarberList employees={employees}/>
    </React.Fragment>
  );
}

export default LandingPage;

