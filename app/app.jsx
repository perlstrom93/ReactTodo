var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <p>React Boilerplate</p>,
    document.getElementById('app')
);

// <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//         <Route path="countdown" component={Countdown}/>
//         <IndexRoute component={Timer}/>
//     </Route>
// </Router>
