import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo.jsx';
import InProgress from './components/InProgress.jsx';
import Done from './components/Done.jsx';

const todo = document.getElementById('todo');
const inprogress = document.getElementById('inprogress');
const done = document.getElementById('done');

ReactDOM.render(<Todo comp='todos' /> , todo);
ReactDOM.render(<InProgress comp='inProgress' /> , inprogress);
ReactDOM.render(<Done comp='done' /> , done);
