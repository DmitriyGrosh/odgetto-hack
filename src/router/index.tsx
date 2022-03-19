import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Calendar from '../view/calendar';
import Main from '../view/main';
import Profile from '../view/profile';
import Signin from '../view/signin';
import PrivateRouter from './PrivateRouter';
import Login from '../view/login';

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signin />} />
      <Route path='/calendar' element={<PrivateRouter />}>
      <Route path='/calendar' element={<Calendar />} />
      </Route>
      <Route path='*' element={<PrivateRouter />}>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      <Route path='/home' element={<Main />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default Router;
