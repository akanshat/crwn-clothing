//functions that return object
//each obj is in correct format that
//action isexpected to be

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER', //reducer type exepectation
  payload: user
})
