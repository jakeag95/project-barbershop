import axios from 'axios';
import { GET_EMPLOYEES } from '../types';

export const getEmployees = () => dispatch => {
  console.log('GET EMPLOYEES ACTION');

  axios
    .get('/api/employees')
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_EMPLOYEES, payload: res.data})
    })
}

