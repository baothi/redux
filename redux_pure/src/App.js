import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from './action/actions';

import store from "./redux/store"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';


function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => {
      return state.counter.count;
    }
  );


  const handleIncrease = () => {
    //dispatch actions
    // props.increaseCounter();
    dispatch(increaseCounter())
    //fire actions : dispatch = fire
    // store.dispatch({
    //   type: "test hoi dan it"
    // })
  }

  const fetchAllUsers = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
    console.log("check data axios response : ", data)
  }

  useEffect(() => {
    fetchAllUsers();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App