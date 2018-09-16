import React, { Component } from 'react';
import Register from '../Register/Register'
import Login from '../Login/Login'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function Admin ({match}) {
  console.log({match});

  return (
    <main>
      <h2 className="mobile-text">Admin</h2>
      <Link to={`{match.url}/register`}>Register</Link>
    </main>
  )
}

export default Admin
