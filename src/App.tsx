import React,{useEffect} from 'react';
/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {env} from './contants/api.constant'

/** Actions */
import {healtAction} from './flux/actions/healt.action'

import Navbar from './components/navbars/navbar'
import ListCards from './components/listCards';
import SideBar from './components/navbars/sideBar';
import ContainerContent from './components/layouts/containerContent';

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
    <div className="">
      <ContainerContent 
      sideContent={<SideBar/>}  
      content={<ListCards/>}
      />
    </div>
  );
}

export default App;
