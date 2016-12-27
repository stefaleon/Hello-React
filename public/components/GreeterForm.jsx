const React =  require('react');

const GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var newData={};
        console.log('in GreeterForm-onFormSubmit, this.refs.name.value is:', this.refs.name.value);
        console.log('in GreeterForm-onFormSubmit, this.refs.message.value is:', this.refs.message.value);
        // do not act on click if no data have been typed in
        if (this.refs.name.value.length > 0) {
            newData.name = this.refs.name.value;
        }
        if (this.refs.message.value.length > 0) {
            newData.message = this.refs.message.value;
        }
        // call onNewData with the newData object argument
        this.props.onNewData(newData);
        // clear form after inputs have been used
        this.refs.name.value = '';
        this.refs.message.value = '';
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Enter name"/>
                <br />
                <textarea ref="message" placeholder="Enter message"></textarea>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
});

module.exports = GreeterForm;
