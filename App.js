/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useContext } from 'react';
import { Header } from 'react-native';

import Router from './router/router'
import { NoteContext} from './context/NoteContext'

import SplashPage from './pages/Splash.js'
import HomePage from './pages/Home'
import CreateNotePage from './pages/CreateNote'
import NotePage from './pages/Note'

const App = () => {
  const [path, setPath] = useState("SplashPage")

  let goTo = (newPath) => {
    setPath(newPath)
  }

  return (
    <NoteContext>
      <Router path={path}>
        <SplashPage goTo={goTo} />
        <HomePage goTo={goTo} />
        <CreateNotePage goTo={goTo} />
        <NotePage goTo={goTo}/>
      </Router>
    </NoteContext>
  )
};
export default App;
