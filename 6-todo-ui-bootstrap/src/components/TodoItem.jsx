import Button from "./Button"
const TodoItem=(props)=>
    {
      const dangerHandler=()=>{
        console.log(props.todoText + " is deleted")
      }




        return (<div className="container text-center">
            <div className="row"> 
          
              <div className="col-5 text-truncate">
              {props.todoText}
              </div>
          
              
          
              <div className="col-5">
              <div><p>{props.todoDate}</p></div>
              </div>
          
              <div className="col-2">
              <Button btnType={'danger'} btnText={'Delete'} handler={dangerHandler} />
              {/* <button type="button" className="btn btn-danger">Delete</button> */}
              </div>
          
          
            </div>
          </div>
          
               
          )
    }

    export default TodoItem;