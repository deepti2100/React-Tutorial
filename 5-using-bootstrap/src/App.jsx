
import Heading  from "./components/Heading"
import AddToDoItem from "./components/AddToDoItem"
import ToDoItem from "./components/ToDoItem"


function App() {

  return (
    <>

    <Heading headingName="To-Do App"/>
    <AddToDoItem />
    <ToDoItem item='learn tailwind' date='09-09-2024'/>
   
    
    
    </>
  )
}

export default App
