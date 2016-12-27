const React =  require('react');
const GreeterMessages = require('./GreeterMessages');
const GreeterForm = require('./GreeterForm');

const Greeter = React.createClass({
    getDefaultProps: function () {
        return {
          name: 'React',
          message: 'This is the default message!'
        };
      },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewData: function (newData) {
        this.setState(newData);
    },
    render: function() {
        return (
            <div>
                <GreeterMessages name={this.state.name} message={this.state.message} />
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

module.exports = Greeter;
