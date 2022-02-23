import React, { useState, useRef } from 'react'

const Todos = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [todoList, setTodoList] = useState<string[]>([])

    const addTodo = () => {
        if (inputRef.current) {
            const todo = inputRef.current?.value
            setTodoList([...todoList, todo])
        }

    }

    return (
        <div>
            <input
                ref={inputRef}
                type='text'
                placeholder='Name'
            />
            <button onClick={addTodo}> submit</button>
            <ul>
                {
                    todoList.map((e, index) => {
                        return (
                            <li key={index}>{e}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todos