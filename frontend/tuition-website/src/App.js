import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// hoc

// Layouts
import MainLayout from './Layout/MainLayout';

// Pages
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Examination from './Pages/Examination/Examination';

function App() {
  return (
    <div className="app">

      <Switch>

        <Route exact path="/" render={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )} />

        <Route exact path="/courses" render={() => (
          <MainLayout>
            <Topics />
          </MainLayout>
        )} />

        <Route exact path="/questions" render={() => (
          <MainLayout>
            <Examination />
          </MainLayout>
        )} />

      </Switch>

    </div>
  );
}

export default App;
