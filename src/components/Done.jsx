import React from 'react';
import CreateList from './common/CreateList.jsx';
import List from './common/List.jsx';

const done = [
  {
      task: 'Done done',
      isCompleted: true
  }
];

export default class Done extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done
        };
    }

    render() {
        return (
            <div>
                <h3>Done</h3>
                <hr/>
                <CreateList done={this.state.done} createTask={this.createTask.bind(this)} compt={this.props.comp}/>
                <List
                    done={this.state.done}
                    compt={this.props.comp}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.done, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ done: this.state.done });
    }

    createTask(task) {
        this.state.done.push({
            task,
            isCompleted: false
        });
        this.setState({ done: this.state.done });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.done, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ done: this.state.done });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.done, todo => todo.task === taskToDelete);
        this.setState({ done: this.state.done });
    }
}
