import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  currentUser: null
}
//every reducer gets every action even
//if its not related to it at all
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default userReducer
