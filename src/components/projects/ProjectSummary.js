import React from 'react'
import moment from 'moment'


const ProjectSummary = ({project}) => {
    console.log('project:', project)
    return (
        <div className="project-list section">
            <div className="div card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="span card-title">{project.title}</div>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>   
                    <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary