const React =  require('react');

const GreeterMessages = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Ohai {this.props.name}!</h1>
                <h2>{this.props.message}</h2>
            </div>
        );
    }
});

module.exports = GreeterMessages;
