import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import MainBody from './MainBody';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Result from './Result';
import Home from './Home';
import Jobs from './Jobs';
import Menterships from './Menterships';
import MenternshipDetails from './MenternshipDetails';
import Solve from './Solve';
import Login from './Login'
import Signup from './Signup';
import Article from './Article';
import HomeNew from './HomeNew';
import SecondProfile from './SecondProfile';
import FirstProfile from './FirstProfile';
function App() {
  
  return (
    <div className="App" style={{minHeight:"100vh"}}>
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <link href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" rel="stylesheet"></link>
      <link href="https://use.fontawesome.com/releases/v5.0.0/css/all.css" rel="stylesheet"></link>
     
      {/* <Header></Header> */}
      <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/article" exact component={Article}/>
          <Route path="/profile" exact component={FirstProfile}/>
          <Route path="/editprofile" exact component={Profile}/>

        
          <Route path="/secondprofile" exact component={SecondProfile}/>
          {/* <Route path="/" component={PageNotFound}/>   */}
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
