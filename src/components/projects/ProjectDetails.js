import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure et totam harum, suscipit consequuntur temporibus illo reprehenderit est molestias doloremque repudiandae soluta ullam quibusdam impedit. Assumenda libero adipisci iusto quae.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
        <div>Posted by Dragos</div>
        <div>On that date</div>
        </div>
    </div>
  )
}

export default ProjectDetails
