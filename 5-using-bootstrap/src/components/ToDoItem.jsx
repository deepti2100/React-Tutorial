import Button from "./Button";

const ToDoItem =(props)=>
    {

        const dangerHandler=()=>
            {
                console.log(" Delete Button clicked")
            }
        return (
            <>
                <div className="container text-center">
  <div className="row">
    <div className="col-5 ">
   
    {props.item}
    </div>

    <div className="col-5">
    {props.date}
    </div>

    <div className="col-2">
    <Button btnType='danger' btnText='Delete' handler={dangerHandler} />
    </div>

  </div>
</div>



            </>
        )
    }

    export default ToDoItem;