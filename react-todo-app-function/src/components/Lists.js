import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import List from './List'






const Lists = React.memo(({ todoData, setTodoData }) => {
    console.log("Lists.component")
    const handleEnd = (result) => {
        console.log('result', result)
        if (!result.destination) return
        const newTodoData = todoData;

        //1. 변경시키는 아이템을 배열에서 지워줍니다.
        //2. retrun 값으로 지워진 아이템을 잡아줍니다.
        const [reorderedItem] = newTodoData.splice(result.source.index, 1)

        //원하는 자리에 reorderItem을 insert해줍니다.
        newTodoData.splice(result.destination.index, 0, reorderedItem)
        setTodoData(newTodoData)

    }
    return (
        <div><DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="todo">
                {(provided) => (
                    <div {...provided.deroppableProps} ref={provided.innerRef}>
                        {todoData.map((data, index) => (
                            <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <List
                                        key={data.id}
                                        id={data.id}
                                        title={data.title}
                                        compledted={data.compledted}
                                        todoData={todoData}
                                        setTodoData={setTodoData}
                                        provided={provided}
                                        snapshot={snapshot}


                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        </div>

    )
})

export default Lists
// export default function Lists({ todoData, setTodoData }) {

//     console.log("Lists.component")
//     const handleEnd = (result) => {
//         console.log('result', result)
//         if (!result.destination) return
//         const newTodoData = todoData;

//         //1. 변경시키는 아이템을 배열에서 지워줍니다.
//         //2. retrun 값으로 지워진 아이템을 잡아줍니다.
//         const [reorderedItem] = newTodoData.splice(result.source.index, 1)

//         //원하는 자리에 reorderItem을 insert해줍니다.
//         newTodoData.splice(result.destination.index, 0, reorderedItem)
//         setTodoData(newTodoData)

//     }


//     return (

//         <div><DragDropContext onDragEnd={handleEnd}>
//             <Droppable droppableId="todo">
//                 {(provided) => (
//                     <div {...provided.deroppableProps} ref={provided.innerRef}>
//                         {todoData.map((data, index) => (
//                             <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
//                                 {(provided, snapshot) => (
//                                     <List
//                                         key={data.id}
//                                         id={data.id}
//                                         title={data.title}
//                                         compledted={data.compledted}
//                                         todoData={todoData}
//                                         setTodoData={setTodoData}
//                                         provided={provided}
//                                         snapshot={snapshot}


//                                     />
//                                 )}
//                             </Draggable>
//                         ))}
//                         {provided.placeholder}
//                     </div>
//                 )}
//             </Droppable>
//         </DragDropContext>
//         </div>

//     )
// }
