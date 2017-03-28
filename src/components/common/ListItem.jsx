import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            cursor: 'pointer'
        };

        const isChecked = isCompleted ? true : false;

        return (
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
                <input type='checkbox' checked={isChecked}/> {task}
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
            </tr>
        );
    }
}
