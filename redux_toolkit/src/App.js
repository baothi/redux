import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAllUsers } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter111.value);
  // const [listUsers, setListUsers] = useState([]);
  const listUsers = useSelector(state => state.user.listUsers);
  const isLoading = useSelector(state => state.user.isLoading);
  const isError = useSelector(state => state.user.isError);

  // const fetchAllUsers = async () => {
  //   let res = await axios.get("http://localhost:8080/users/all");
  //   setListUsers(res.data ? res.data : []);
  // }

  useEffect(() => {
    // fetchAllUsers();
    dispatch(fetchAllUsers());
  }, []);

  if (isError === true && isLoading === false) {
    return (
      <div>Something wrong. Please try again ! </div>
    )
  }

  if (isError === false && isLoading === true) {
    return (
      <div>loading data .... ! </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="btn-actions">
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <br />
        <div>count = {count}</div>
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>EMAIL</th>
              <th>USERNAME</th>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr key={`table-redux-${index}`}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
