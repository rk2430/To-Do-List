import React, { useState } from 'react'
import './App.css'

function App() {

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekend"
  ]

  const [tasks, setTasks] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Weekend: []
  })

  const [inputValues, setInputValues] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Weekend: ""
  })

  // Handle Input Change
  const handleChange = (day, value) => {
    setInputValues({
      ...inputValues,
      [day]: value
    })
  }

  // Add Task
  const addTask = (day) => {

    if (inputValues[day].trim() === "") return

    setTasks({
      ...tasks,
      [day]: [...tasks[day], inputValues[day]]
    })

    setInputValues({
      ...inputValues,
      [day]: ""
    })
  }

  // Delete Task
  const deleteTask = (day, index) => {

    const updatedTasks = tasks[day].filter((task, i) => i !== index)

    setTasks({
      ...tasks,
      [day]: updatedTasks
    })
  }

  return (
    <div className='container'>

      <div className='app'>

        <h1 className='title'>Weekly To-Do List</h1>

        <div className='todo-grid'>

          {days.map((day, index) => (

            <div className='card' key={index}>

              <h2>{day}</h2>

              <div className='input-box'>

                <input
                  type='text'
                  placeholder='Enter Task'
                  value={inputValues[day]}
                  onChange={(e) => handleChange(day, e.target.value)}
                />

                <button onClick={() => addTask(day)}>
                  Add
                </button>

              </div>

              <ul>

                {tasks[day].map((task, i) => (

                  <li key={i}>

                    <span className='task-text'>{task}</span>

                    <button
                      className='delete-btn'
                      onClick={() => deleteTask(day, i)}
                    >
                      Delete
                    </button>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default App