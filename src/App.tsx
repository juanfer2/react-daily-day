import React,{useEffect} from 'react';
/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {env} from './contants/api.constant'

/** Actions */
import {healtAction} from './flux/actions/healt.action'

import Navbar from './components/navbar'

function App () {

  const dispatch = useDispatch();
  const state = useSelector( state => state )

  useEffect(() => {
    const  startHealtDispacht = () =>  dispatch(healtAction( ));
    startHealtDispacht()
    console.log(env);
  }, [])
  console.log(state)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {process.env.REACT_APP_ENVIROMENT}
        </p>
        <Navbar />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
