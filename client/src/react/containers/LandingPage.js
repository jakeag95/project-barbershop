import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux'
import { getEmployees } from '../../redux/actions/employeeActions'
import Header from '../Header'
//import { connect } from 'react-redux'
import BarberList from '../components/BarberList';
import Footer from '../Footer'


function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('FETCHING EMPLOYEES');
    dispatch(getEmployees())
  }, []);

  return (
    <div>
        <Header />
          <BarberList />
        <Footer />
    </div>
  );
}

export default LandingPage;

