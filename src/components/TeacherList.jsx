

/*

Exercise 2:

  1. create a TeacherList.jsx component

  2. map through the given teacherArray

  3. display each teacher name in the jsx in a h3

*/
function TeacherList(){
    let teacherArray = ["Omar","Felipe","Pool"]


    return(
        <div>
            {teacherArray.map((teacher)=>{
                return(
                    <h3 key={teacher}>{teacher}</h3>
                )
            })}
        </div>
    )
}

export default TeacherList