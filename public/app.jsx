const GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Ohai {this.props.name}!</h1>
                {this.props.message}
            </div>
        );
    }
});


const GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        console.log('in GreeterForm-onFormSubmit, this.refs.name.value is:', this.refs.name.value);
        // act on click only if input is not empty
        if (this.refs.name.value.length > 0) {
            this.props.onNewName(this.refs.name.value);
        }
        // clear form after input text has been used
        this.refs.name.value = '';
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" />
                <input type="submit" value="Set Name"/>
            </form>
        );
    }
});


const Greeter = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    handleNewName: function (newName) {
        this.setState({
            name: newName
        });
    },
    render: function() {
        return (
            <div>
                <GreeterMessage name={this.state.name} message={this.props.message} />
                <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }
});

var name = 'maimous';
var message = 'Greeter component says ohai!';

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);
