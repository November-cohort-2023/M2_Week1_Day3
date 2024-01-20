

function ProjectList(){
    const projects = [
        { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
        { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
        { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
        { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
      ];
      
    return(
        <div className="list">
            {projects.map((oneProject)=>{
                return(
                    <div key={oneProject._id}>
                        <h3>{oneProject.name}</h3>
                        <p>{oneProject.techStack}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList