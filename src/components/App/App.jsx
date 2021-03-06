import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import Dashboard from '../../pages/dashboard/Dashboard.jsx';
import Tasks from '../../pages/tasks/tasks.jsx';
import Diary from '../../pages/diary/Diary.jsx';
import Chat from '../../pages/chat/chat.jsx';
import SignIn from '../../pages/signin/signin.js';
import SignUp from '../../pages/signup/signup.js';
import Profile from '../../pages/profile/profile.jsx';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={'dashboard'} element={<Dashboard />} />
        <Route path={'tasks'} element={<Tasks />} />
        <Route path={'diary'} element={<Diary />} />
        <Route path={'chat'} element={<Chat />} />
        <Route path={'signin'} element={<SignIn />} />
        <Route path={'signup'} element={<SignUp />} />
        <Route path={'profile'} element={<Profile />} />
      </Route>
    </Routes>
  );
}
