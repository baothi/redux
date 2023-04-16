import { INCREMENT, DECREMENT } from '../action/types';


const INITIAL_STATE = {

  count: 0,
};

const countReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case INCREMENT:
      console.log("i'm running increment")
      return {

        ...state, count: state.count + 1,

      };

    case DECREMENT:
      console.log("i'm running DECREMENT")
      return {
        ...state, count: state.count - 1,

      };

    default: return state;

  }

};

export default countReducer;