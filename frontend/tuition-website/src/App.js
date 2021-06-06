import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// hoc

// Layouts
import MainLayout from './Layout/MainLayout';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Topics from './Pages/Topics';
import Examination from './Pages/Examination/Examination';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="app">

      <Switch>

        <Route exact path="/" render={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )} />

        <Route path="/login" render={() => (
            <Login />
        )} />

        <Route path="/courses" render={() => (
          <MainLayout>
            <Topics />
          </MainLayout>
        )} />

        <Route path="/questions" render={() => (
          <MainLayout>
            <Examination />
          </MainLayout>
        )} />

        <Route path="/contact" render={() => (
          <MainLayout>
            <ContactUs />
          </MainLayout>
        )} />

      </Switch>

    </div>
  );
}

export default App;
