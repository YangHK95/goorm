import React, { useState, useCallback } from 'react'
import "./App.css"
import Lists from './components/Lists'
import Form from './components/Form'

export default function App() {
  console.log("App.component")
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: false,

    },
    {
      id: "2",
      title: "청소하기",
      completed: false,

    }
  ])

  const handleRemove = () => {
    setTodoData([])
  }


  console.log(todoData)
  const [value, setValue] = useState("")

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    // console.log('newTodoData', newTodoData)
    setTodoData(newTodoData)
  }, [todoData]);

  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodoData = {
      id: Date.now(),
      title: value,
      completed: false
    }

    // this.setState({ todoData: [...this.state.todoData, newTodoData], value: "" })
    setTodoData(prev => [...prev, newTodoData])
    setValue("")
  }


  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>할 일 목록</h1>
          <button onClick={handleRemove}>Delete All</button>

        </div>

        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} setTodoData={setTodoData} value={value} setValue={setValue} />

      </div>
    </div >
  )
}




// import React, { useState } from "react";
// import "./App.css"

// export default function App() {

//   const [todoData, setTodoData] = useState([])
//   const [value, setValue] = useState("")

// {
//   id: "1",
//   title: "공부하기",
//   completed: false,

// },
// {
//   id: "2",
//   title: "청소하기",
//   completed: false,

// }


//   btnStyle = {
//     color: "#fff",
//     border: "none",
//     paddings: "5px 9px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     float: "right",
//   }

//   getStyle = (completed) => {
//     return {
//       padding: "10px",
//       borderBottom: "1px #ccc dotted",
//       textDecoration: completed ? " line-through" : "none",

//     }

//   }



//   const handleClick = (id) => {
//     let newTodoData = todoData.filter((data) => data.id !== id)
//     // console.log('newTodoData', newTodoData)
//     setTodoData(newTodoData)
//   }

//   const handleChange = (e) => {
//     console.log("e", e.target.value)
//     setValue(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     let newTodoData = {
//       id: Date.now(),
//       title: value,
//       completed: false
//     }

//     setTodoData(prev => [...prev, newTodoData])
//     setValue("")
//   }


//   handleCompleteChange = (id) => {
//     let newTodoData = todoData.map((data) => {
//       if (data.id === id) {
//         data.completed = !data.completed
//       }
//       return data
//     })

//     setTodoData(newTodoData)

//   }




//   return (
//     <div className="container">
//       <div className="todoBlock">
//         <div className="title">
//           <h1>할 일 목록</h1>
//         </div>
//         {todoData.map((data) => (
//           <div style={getStyle(data.completed)} key={data.id}>
//             <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}></input>
//             {data.title}
//             <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
//           </div>

//         ))}



//         <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
//           <input type="text" name="value" style={{ flex: '10', padding: "5px" }} placeholder="해야 할 일을 입력하세요" value={value} onChange={handleChange}></input>
//           <input type="submit" value="입력" className="btn" style={{ flex: '1' }}></input>
//         </form>

//       </div>
//     </div >
//   )
// }

