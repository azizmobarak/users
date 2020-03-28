import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <br/><br/>
  <form method="POST" action="./server.js">
  <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
      <div class="col-sm-10">
        <input name="name" type="text" class="form-control-plaintext" id="name" placeholder="Name" />
      </div>
    </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input name="email" type="text" class="form-control-plaintext" id="email" placeholder="Email" />
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input name="password" type="password" class="form-control" id="inputPassword" placeholder="Password"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="Button" class="form-control-plaintext" id="btn" value="Add"/>
      </div>
    </div>
  </form>
    </div>
  );
}

export default App;
