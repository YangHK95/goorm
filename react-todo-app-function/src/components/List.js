import React, { useState } from 'react'




const List = React.memo(({ handleClick, id, title, completed, todoData, setTodoData, provided, snapshot }) => {


    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(title)
    console.log("List.component")
    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {

                data.completed = !data.completed

            }
            return data
        })

        // this.setState({ todoData: newTodoData })

        setTodoData(newTodoData)


    }
    const handleEditChange = (e) => {
        setEditedTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.title = editedTitle
            }
            return data
        })
        setTodoData(newTodoData)
        setIsEditing(false)
    }
    if (isEditing) {
        return (
            <div className="flex items-center justify-between bg-gray-100 w-full px-4 py-1 my-2 text-gray-600 border rounded">

                <div className='items-center'>
                    <form onSubmit={handleSubmit}>
                        <input value={editedTitle} onChange={handleEditChange} className='w-full px-3 mr-4 text-gray-500 rounded'></input>
                    </form>
                </div>
                <div className='items-center'>
                    <button className='px-4 py-2 float-right' onClick={() => setIsEditing(false)}>x</button>
                    <button className='px-4 py-2 float-right' type='submit' onClick={handleSubmit}>save</button>

                </div>

            </div >
        )
    } else {
        return (
            <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}>

                <div className='items-center'>
                    <input type="checkbox" onChange={() => handleCompleteChange(id)} defaultChecked={completed}></input>
                    <span className={completed ? "line-through" : 'none'}>{title}{completed ? "true" : 'false'}</span>
                </div>
                <div className='items-center'>
                    <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>x</button>
                    <button className='px-4 py-2 float-right' onClick={() => setIsEditing(true)}>edit</button>

                </div>

            </div >
        )
    }
})

export default List

// export default function List({ id, title, completed, todoData, setTodoData, provided, snapshot }) {
//     console.log("List.component")
//     const handleCompleteChange = (id) => {
//         let newTodoData = todoData.map((data) => {
//             if (data.id === id) {
//                 data.completed = !data.completed
//             }
//             return data
//         })

//         // this.setState({ todoData: newTodoData })
//         setTodoData(newTodoData)

//     }

//     const handleClick = (id) => {
//         let newTodoData = todoData.filter((data) => data.id !== id)
//         // console.log('newTodoData', newTodoData)
//         setTodoData(newTodoData)
//     }
//     return (

//         <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
//             className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}>

//             <div className='items-center'>
//                 <input type="checkbox" defaultChecked={completed} onChange={() => handleCompleteChange(id)}></input>
//                 <span className={completed ? 'line-through' : undefined}>{title}</span>
//             </div>
//             <div className='items-center'>
//                 <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>x</button>

//             </div>

//         </div>

//     )
// }
