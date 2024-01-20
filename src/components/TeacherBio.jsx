
function TeacherBio(props) {
  console.log(props)
  return (
    <div>
        <h2>Name:{props.teacherInfo.name}  </h2>
        <p>City: {props.teacherInfo.city}</p>
        <p>Course:{props.teacherInfo.course} </p>
        {/* if teacher is TA print <p> Teacher is also a TA </p> */}
        {props.teacherInfo.isTA ? <p>Teacher is also a TA</p>: false}
        {props.teacherInfo.languages.map((language)=>{
          return(
            <h2 key={language}>{language}</h2>
          )
        })}
    </div>
  )
}

export default TeacherBio