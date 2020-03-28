import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    {/*Nav Bar for the tob*/}
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">How it work?</a>
  </li>
  </ul>
<br/><br/>
    <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Login</a>
        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Faq</a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">About</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
       

        </div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
         {/*login form*/}
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
             <div style={{marginLeft:"10%"}} class="col-sm-8">
               <input type="Button" class="form-control-plaintext btn btn-success" id="btn" value="Add"/>
             </div>
           </div>
         </form>

        </div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">333</div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">4444</div>
      </div>
    </div>
  </div>
    <br/><br/>
    </div>
  );
}

export default App;
