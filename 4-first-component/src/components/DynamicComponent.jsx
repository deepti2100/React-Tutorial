const DynamicComponent =()=>
    {

        const studentName='shyam';
        const marks=[23,45,67,98,54];
        
        let sum=0;
        const calMarks=()=>
            {
                for(let i=0;i< marks.length;i++)
                {
                    sum +=marks[i];

                }
                return sum/marks.length;
            }



        return <p>{studentName} scored {calMarks()}% marks in the exam.</p>
}
export default DynamicComponent;