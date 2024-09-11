import TodoItem from './TodoItem';

const TodoItems =()=> 
    {

        
      const todoItems=[{id:1,todoText:'Buy Milk',todoDate:'10-09-2024'},
                       {id:2,todoText:'Exercise',todoDate:'12-09-2024'} ]

        return(
<>
          {
            todoItems.map((item) => <TodoItem key={item.id} todoText={item.todoText} todoDate={item.todoDate}/>)
          }
        
        </>)

    }

    export default TodoItems;