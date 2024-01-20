import { useState } from 'react'
import './App.css'
import NumberList from './components/NumberList'
import StudentList from './components/StudentList'
import TeacherList from './components/TeacherList'
import ProjectList from './components/ProjectList'
import MovieList from './components/MovieList'
import TeacherBio from './components/TeacherBio'
import Spinner from './components/Spinner'

function App(){
  const [loading,setLoading] = useState(false)
  
let teacherData = [
  {
    name:"Omar Kamal",
    city: "Ajman",
    email:"omar@ironhack.com",
    languages:["English","Arabic"],
    course:"Web Dev",
    isTA:false
  },
  {
    name:"Felipe Mantovani",
    city: "Paris",
    email:"felipe@ironhack.com",
    languages:["English","Portuguese"],
    course:"Web Dev",
    isTA:true
  },
  {
    name:"Pool Ortega",
    city: "Lisbon",
    email:"pool@ironhack.com",
    languages:["English","Spanish"],
    course:"Web Dev",
    isTA:true
  },
]
  if(loading){
    return(
      <Spinner></Spinner>
    )
  }
  else{

  return(
    <div className='App'>
 {/*      <NumberList></NumberList>
      <StudentList></StudentList>
      <TeacherList></TeacherList>
      <ProjectList></ProjectList> */}
       
      {teacherData.map((oneTeacher)=>{
        return(
          <TeacherBio key={oneTeacher.email} teacherInfo={oneTeacher} ></TeacherBio>
        )
      })}



<MovieList></MovieList>

    </div>
  )}
}



















/* 
function App() {

  // const [nameOfState, updaterFunction] = useState(intialValue)
  const [count, setCount] = useState(0)
  const [theme,setTheme] = useState('light')



  function returnTwo(){
    return ["Christian", "Juan"]
  }


  const [firstStudent,secondStudent] = returnTwo()

  console.log(firstStudent)
  const myArr = [1,2,3,4]

  const [first,second] = myArr

  let myObj = {name:"Omar",job:"teacher"}

  // destructuring an object
  let {name,job} = myObj




  console.log("Component Renders")

  // We always change the value of states using the updater function

  function increaseCount() {
    
    setCount(prevCount => prevCount + 1)
    setCount((prevCount) => { return prevCount + 1 })
    setCount((prevCount) => { return prevCount + 100 })
    setCount((prevCount) => { return prevCount / 5 })
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  function consoleName() {
    return "Elanor"
  }

  return (
    <div className={`App ${theme}`}>           <h2>Counter</h2>

      <p>You clicked {count} times</p>

      {consoleName()}

      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>

      <input onChange={(event)=>{console.log(event.target.value)}} type="text" />

      <input onChange={(e)=>{console.log(e.target.value)}} type="text" />

      <select onChange={(e)=>{setTheme(e.target.value)}}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>


    </div>
  )
} */

export default App








let teacherData = [
  {
    name:"Omar Kamal",
    city: "Ajman",
    email:"omar@ironhack.com",
    languages:["English","Arabic"],
    course:"Web Dev",
    isTA:false
  },
  {
    name:"Felipe Mantovani",
    city: "Paris",
    email:"felipe@ironhack.com",
    languages:["English","Portuguese"],
    course:"Web Dev",
    isTA:true
  },
  {
    name:"Pool Ortega",
    city: "Lisbon",
    email:"pool@ironhack.com",
    languages:["English","Spanish"],
    course:"Web Dev",
    isTA:true
  },
]



/* 

Exercise 3:

  1. map through the provided teacherData array and render the TeacherBio component

  2. pass the data for the TeacherBio component from the teacherData array as props

  Hint: Dont forget to add a key

  3. display the props being passed down in the TeacherBio component

  4. Bonus: display the languages for each teacher as well under the other data


*/