import React from 'react'
import { useSelector } from 'react-redux'


const BarberList = () => {
  const employees = useSelector(state => state.employees)
  return(
    <div>
      employees listed here
    </div>
  );
}

export default BarberList;