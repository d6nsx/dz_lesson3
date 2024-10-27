import React, { useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';


const TodoPage = () => {
    const [show, setShow] = useState(false)
    const handleShow = ()=> {
        setShow(prevState => !prevState)
    }
    const [inputValue, setInputValue] = useState('')
    const handleChange= (event)=> {
        setInputValue(event.target.value)
    }

    const [todoList, setTodolist] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])


    const handleDone = (id) => {
        console.log(id);
        todoList.map(todo=>{
            if(id===todo.id) {
                return todo.completed=!todo.completed
            }
        })
        setTodolist([...todoList])
    }

    const handleDelete = (id) => {
        setTodolist(todoList.filter(todo=>todo.id !== id))
    }

    return (
        <div>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}/>
            {
                show  &&
                <Modal
                    handleShow={handleShow}
                    handleChange={handleChange}/>
            }
        </div>
    );
};

export default TodoPage;