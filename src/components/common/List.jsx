import _ from 'lodash';
import React from 'react';
import ListItem from './ListItem.jsx';

export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, this.props.compt);

        if(this.props.compt == 'todos'){
          var myComp = this.props.todos;
        }else if(this.props.compt == 'inProgress'){
          var myComp = this.props.inProgress;
        }else if(this.props.compt == 'done'){
          var myComp = this.props.done;
        }

        return _.map(myComp, (todo, index) => <ListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
          <div class="table-responsive">
            <table class='table'>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
          </div>
        );
    }
}
