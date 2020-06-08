// reducers/index.js
import { INCREMENT, INCREMENT_BY_FIVE, DECREMENT, CLEAR } from '../actions';

const initialState = {value:0};
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {value: state.value + 1};
    case INCREMENT_BY_FIVE:
      return {value: state.value + 5};
    case DECREMENT:
      return {value: state.value - 1};
    case CLEAR:
      return {value: 0};
    default:
      return state;
  }
};
