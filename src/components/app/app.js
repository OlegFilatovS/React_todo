import React from 'react';

import AppHeader from  '../app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

const App = () => {

    const todoData = [{label: 'Drink Coffee', important: false, id: 1},
                      {label: 'Do React App', important: true,id: 2},
                      {label: 'Make a Steak', important: false,id: 3}
];

    return (
     <div>
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
        </div>
        <TodoList todos ={todoData} />
    </div>
    );
};

export default App;