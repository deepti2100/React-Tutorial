import "./Button.css";





const Button =({btnType,btnText,handler})=>
    {
        console.log(btnType)
        console.log(btnText)
        console.log(handler)
        

       

        if( btnType==='success')//yaha btnType javascript ke andar hai isliye {} ki zarurat nahi h..automatic direct value assign ho rahi hai..

        {
           return <button className="green-button" onClick={handler}>{btnText}</button>;//yaha html ke andar btnText ki value chahiye so {} zaruri hai to get the value by destructuring the props object..
        }
        else if(btnType==='danger')
            {return <button className="red-button" onClick={handler}>{btnText}</button>;} 

        else{ return <button className="blue-button" onClick={handler}>{btnText}</button>;}  
        

    };

export default Button;

