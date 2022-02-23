import React, { useReducer } from 'react';
import './App.css';
import Profile from './Components/Profile';
import User from './Components/User';
import { initialState, reducer } from './reduce';
import Todos from './Todos';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <User/>
       {/* <Todos/> */}
    </div>
  );
}

export default App;


















   {/* <Profile name="Ravi" age ={25}status='commited'/>
     <Profile name="Jay" age ={25}status='single'/>
     <Profile name="Ankur" age ={25}status='single'/>
     <Profile name="Harsh" age ={25}status='single'>
       <h1 style={{color:'red'}}> salar - 25</h1>
       </Profile> */}