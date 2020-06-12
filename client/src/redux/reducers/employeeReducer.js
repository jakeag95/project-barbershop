import { GET_EMPLOYEES } from '../types'

const initialState = {
  employeeList: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_EMPLOYEES:
      console.log('GET_EMPLOYEES REDUCER', typeof(action.payload))
    //   return { 
    //     ...state,
    //     ...action.payload
    // }
    return {
      ...state,
     ...action.payload
    }
    default:
      return state
  }
}