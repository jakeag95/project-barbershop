import { GET_EMPLOYEES } from '../types'

const initialState = []

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_EMPLOYEES:
      console.log('GET_EMPLOYEES REDUCER')
      return { 
        ...state,
        ...action.payload
    }
    default:
      return state
  }
}