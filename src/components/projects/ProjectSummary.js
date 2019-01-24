import React from 'react'

const ProjectSummary = ({project}) => {
    console.log('project:', project)
    return (
        <div className="project-list section">
            <div className="div card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="span card-title">{project.title}</div>
                    <p>Posted by Dragos Vlasie</p>   
                    <p className="grey-text">3rd September</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary