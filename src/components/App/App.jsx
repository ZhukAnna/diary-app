import React from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Dashboard from '../../pages/dashboard/Dashboard.jsx';
import Diary from '../../pages/diary/Diary.jsx';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import SignIn from '../../pages/signin/signin.js';
import SignUp from '../../pages/signup/signup.js';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path={'dashboard'} element={<Dashboard/>}/>
        <Route path={'diary'} element={<Diary/>}/>
        <Route path={'signin'} element={<SignIn/>}/>
        <Route path={'signup'} element={<SignUp/>}/>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className='main-wrapper'> 
      <Sidebar />
      <div className='container'>
        <Header />
        <div className='main'>
          <Outlet/>
        </div>
      </div>
  </div>
  )
}


export default App;
