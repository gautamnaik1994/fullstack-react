import { FETCH_USER } from '../actions/types';

const INITIAL_STATE = {};

export default function (state = null, action) {
  console.log('Actions', action);
  switch (action.type) {
    case FETCH_USER: return action.payload || false;
    default:
      return state;
  }
}
