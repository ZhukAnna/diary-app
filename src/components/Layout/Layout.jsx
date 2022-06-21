import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Dialog from '../ui/Dialog/Dialog.jsx';
import './Layout.css';

export default function Layout() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="container">
        <Header />
        <button onClick={() => setOpenDialog(true)}>Открыть настрйоки</button>
        <div className="main">
          <Outlet />
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            test
          </Dialog>
        </div>
      </div>
    </div>
  );
}
