import axios from 'axios';
import { GET_EMPLOYEES } from '../types';

export const getEmployees = () => dispatch => {
  console.log('GET EMPLOYEES ACTION');

  axios
    .get('/employees')
    .then(res => {
      console.log(res)
      dispatch({ type: GET_EMPLOYEES, payload: res.data})
    })
}