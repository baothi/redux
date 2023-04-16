import { INCREMENT, DECREMENT } from './types';


export const increaseCounter = () => {

  return {

    type: INCREMENT,
    payload: { like: "Buy Mild", name: "hoi dan it" }

  };

};

export const decreaseCounter = () => {

  return {

    type: DECREMENT,

  };

};