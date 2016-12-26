const Greeter = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    setName: function (e) {
        e.preventDefault();
        console.log('in setstate: value', this.refs.name.value);        
        // setState on click only if input is not empty
        if (this.refs.name.value.length > 0) {
            this.setState({
                name: this.refs.name.value
            });
        }
        this.refs.name.value = '';
    },
    render: function() {
        console.log(this.refs);
        return (
            <div>
                <h1>Ohai {this.state.name}!</h1>
                {this.props.message}
                <form onSubmit={this.setName}>
                    <input type="text" ref="name" />
                    <input type="submit" value="Set Name"/>
                </form>
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
