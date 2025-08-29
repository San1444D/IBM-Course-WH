import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});

    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: '' });
        }
    };
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
    };
    return (
        <>
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="Enter heading"
                        value={headingInput}
                        onChange={(e) => { setHeadingInput(e.target.value); }}
                    />
                    <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
                </div>
            </div>
            <div className="todo_main">

                {todos.map((todo, index) => ( // Iterate over each todo item in the todos array
                    <div key={index} className="todo-card">
                        <div className="heading_todo">
                            <h3>{todo.heading}</h3> {/* Display the heading here */}
                            {/* Button to delete the current heading by passing its index */}
                            <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                        </div>
                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p>{lists}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='add_list'>
                            {/* Input field for adding a new item under a specific heading */}
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''}// Use the value from listInputs array based on the current heading index
                                onChange={(e) => handleListInputChange(index, e.target.value)} />
                            {/* Button to add the list item to the corresponding heading */}
                            <button
                                className="add-list-button"
                                onClick={() => handleAddList(index)}
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;
