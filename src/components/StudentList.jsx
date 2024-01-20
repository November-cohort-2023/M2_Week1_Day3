
function StudentList() {
    const students = ['Marc', 'Lucy', 'Anna'];

    const newStudents = students.map((oneStudent)=>{
        return oneStudent+ "CHANGED"
    })

    console.log(newStudents)


    const myNumbers = [1,5,10,20,30]

    /* 
    Exercise 1:
        1. map through the myNumbers array

        2. in the new array being return all the numbers multiplied by two
    */
    // use map() method to display the array 
   
    return (
      <div className="list">
        <h2>Student List</h2>

        {students.map((oneStudent)=>{

            return(
                <div key={oneStudent}>
                    <h2>
                    {oneStudent}

                    </h2>
                </div>
            )
        })}
        

      </div>
    );
  }
   
  export default StudentList;



  let teacherArray = ["Omar","Felipe","Pool"]


  /*

  Exercise 2:

    1. create a TeacherList.jsx component

    2. map through the given teacherArray

    3. display each teacher name in the jsx in a h3
  
  */