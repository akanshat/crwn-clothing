import { UserActionTypes } from './user.types'

//functions that return object
//each obj is in correct format that
//action isexpected to be

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER, //reducer type exepectation
  payload: user
})


// ACTION ONLY HAVE TYPE AND PAYLOAD