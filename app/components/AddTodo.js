var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }

    },

    render: function(){
        var {onSubmit} = this.props;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What do you need to do?" ref="todoText"/>
                    <input type="submit" className="button expanded" value="Add Todo"/>
                </form>
            </div>
        );
    }
 });

 module.exports = AddTodo;
