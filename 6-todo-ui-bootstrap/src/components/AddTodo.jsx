import Button from "./Button"

const AddTodo =()=>
    {

      const successHandler=()=>{
        console.log("Add Button clicked")
      }
        return (
<div className="container text-center">
  <div className="row"> 

    <div className="col-5">
    <input type="text" className="form-control" placeholder="Enter To-Do here" />
    </div>

    <div className="col-5">
    <input type="date" className="form-control" />
    </div>

    <div className="col-2">
    <Button btnType={'success'} btnText={'Add'} handler={successHandler}/>
    {/* <button type="button" className="btn btn-success">Add</button> */}
    </div>


  </div>
</div>

        )
    }

export default AddTodo;    