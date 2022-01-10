import React from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Dashboard from '../../pages/Dashboard/Dashboard.jsx';
import Diary from '../../pages/Diary/Diary.jsx';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path={'dashboard'} element={<Dashboard/>}/>
        <Route path={'diary'} element={<Diary/>}/>
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
