import React, { useState } from 'react'
import {useTodo} from "../contexts/TodoContext"

function todoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()


  return (
    <div>
      
    </div>
  )
}

export default todoForm
