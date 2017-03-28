import React from 'react';

export default class CreateTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div class="bg-danger">{this.state.error}</div>;
    }

    render() {
        return (
            <form class="form-inline" onSubmit={this.handleCreate.bind(this)}>
                <input class="form-control" type="text" placeholder="add task here" ref="createInput" />{' '}
                <button class="btn btn-default">hit me</button>
                <span class="text-center"><strong>{this.renderError()}</strong></span>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        if(this.props.compt == 'todos'){
          var myComp = this.props.todos;
        }else if(this.props.compt == 'inProgress'){
          var myComp = this.props.inProgress;
        }else if(this.props.compt == 'done'){
          var myComp = this.props.done;
        }

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task, myComp);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task, myComp) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(myComp, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}
