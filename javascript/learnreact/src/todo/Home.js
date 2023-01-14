import React, { useState } from 'react'
import './style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Home() {

  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState([])
  const [updating, setUpdating] = useState(false)


  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (updating === false)
      setTasks([...tasks, input])
    else
      tasks[updating] = input

    setInput('')
    setUpdating(false)
  }

  function handleDelete(e, index) {
    e.preventDefault();

    setTasks(tasks.filter((task, id) => {
      return id !== index
    }))

  }


  function handleCheck(e, index) {
    e.preventDefault();
    setCompleted([...completed, index])
  }



  function handleEdit(e, index) {
    e.preventDefault();
    setInput(tasks[index])
    setUpdating(index)
  }



  function List() {
    return (
      <ul>
        {
          tasks.map((task, index) => {
            return (
              <li key={index} className={(completed.includes(index) ? 'completed' : '')}>
                {task}
                <div>
                  <a href='' onClick={(e) => handleDelete(e, index)}><DeleteIcon /></a>
                  <a href='' onClick={(e) => handleEdit(e, index)}><EditIcon /></a>
                  <a href='' onClick={(e) => handleCheck(e, index)}><CheckIcon /></a>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className='todoContainer'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={handleChange}
          placeholder='Enter your task'
        />
        <button
          type='submit'>
          Add Task
        </button>
      </form>

      <List />


    </div>
  )
}

export default Home