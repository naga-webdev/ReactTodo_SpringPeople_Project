import React from 'react';
import CreateList from './common/CreateList.jsx';
import List from './common/List.jsx';

const inProgress = [
  {
      task: 'inProgress done',
      isCompleted: true
  }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inProgress
        };
    }

    render() {
        return (
            <div>
                <h3>In Progress</h3>
                <hr/>
                <CreateList inProgress={this.state.inProgress} createTask={this.createTask.bind(this)} compt={this.props.comp}/>
                <List
                    inProgress={this.state.inProgress}
                    compt={this.props.comp}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.inProgress, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ inProgress: this.state.inProgress });
    }

    createTask(task) {
        this.state.inProgress.push({
            task,
            isCompleted: false
        });
        this.setState({ inProgress: this.state.inProgress });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.inProgress, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ inProgress: this.state.inProgress });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.inProgress, todo => todo.task === taskToDelete);
        this.setState({ inProgress: this.state.inProgress });
    }
}
