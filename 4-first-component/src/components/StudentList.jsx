const StudentList =(props)=>
    {
        
     console.log(props.students)
     if(!props.students)
     {
        return <p>No students</p>;
     }

        return <ol>{
            props.students.map((student)=>{
                return <li key={student}>{student}</li>
            })
        }
        
            
        </ol>
       
    }

    export default StudentList;