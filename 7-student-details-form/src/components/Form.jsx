const Form =()=>
    {
        return ( 
            <div  className="m-4">
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" />
</div> 

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
</div> 


<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your age" />
</div> 
        
 <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Grade</label>
  <select className="form-select" id="exampleFormControlInput1">
  <option selected>Select your grade</option>
  <option value="1">A</option>
  <option value="2">B</option>
  <option value="3">C</option>
</select>
</div> 



<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
</div> 
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Male 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Female
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    Other
  </label>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
</div> 
      
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    I agree to the terms and conditions
  </label>
</div>      

<input className="btn btn-primary" type="submit" value="Submit" />


</div>

)
        
    }
   
    export default Form;