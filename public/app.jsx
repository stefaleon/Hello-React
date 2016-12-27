const React =  require('react');
const ReactDOM = require('react-dom');
const Greeter = require('./components/Greeter');

var name = 'maimous';
var message = 'Greeter component says ohai!';

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);
