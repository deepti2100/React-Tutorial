// Functional Component
import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber  from './components/RandomNumber'
import Title from './components/Title'
import Button from './components/Button'

function App() {
 
  const students=['Ram','Shyam','Deepti','Maa Kamakhya','Shiv Ji']

  const home=['surendra','sandhya','gopi','deepti']

  const degree=['10','12','Btech.','Mtech.','PhD.']

  const successHandler=()=>
    {
        console.log(" Add Button clicked")
    }
    const dangerHandler=()=>
      {
          console.log(" Delete Button clicked")
      }
      const saveHandler=()=>
        {
            console.log(" save Button clicked")
        }

  
  return (
    <>
    <Title  titleText="This is first time I am making Props Program..."/>
    <Title  titleText="This is second text"/>
    <Title  titleText="this is third text"/>
    <Title  titleText="this is fourth text"/>

    {/* <Heading />
    <Paragraph />
    
    <DynamicComponent />
    <DynamicComponent />
    <DynamicComponent />
    <DynamicComponent />
    
   
    <RandomNumber /> */}
    <Button btnType='success' btnText='Add' handler={successHandler}/>
    <Button btnType='danger' btnText='Delete' handler={dangerHandler}/>
    <Button  btnText='Save' handler={saveHandler}/>

    <StudentList students={students} />
    <StudentList students={home} />
    <StudentList students={degree} />
    <StudentList />

    
    

  </> 
  
  )
}

export default App
