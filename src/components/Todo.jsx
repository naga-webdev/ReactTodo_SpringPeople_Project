import React from 'react';
import CreateList from './common/CreateList.jsx';
import List from './common/List.jsx';

const todos = [
  {
      task: 'todo done',
      isCompleted: true
  },
  {
      task: 'todo needs to be done',
      isCompleted: false
  }
];

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {

        return (
            <div>
                <h3>Todo</h3>
                <hr/>
                <CreateList todos={this.state.todos} createTask={this.createTask.bind(this)} compt={this.props.comp}/>
                <List
                    todos={this.state.todos}
                    compt={this.props.comp}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
