import Button from "./Button";


const AddToDoItem =()=>
    {

        const successHandler=()=>
            {
                console.log(" Add Button clicked")
            }
            
              



        return (
        <>
<div className="container text-center">
  <div className="row">
    <div className="col-5">
    <input type="text" className="form-control" placeholder="Enter To Do Here" aria-label="Username" ></input>
    </div>

    <div className="col-5">
    <input type="date" className="form-control" placeholder="dd-mm-yy"  ></input>
    </div>

    <div className="col-2">
    <Button btnType='success' btnText='Add' handler={successHandler} /> 
    </div>

  </div>
</div>

</>
        )
    }
    export default AddToDoItem;