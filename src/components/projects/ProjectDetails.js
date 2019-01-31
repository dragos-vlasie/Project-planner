import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props)  => {
    console.log('props:', props)
    const id = props.match.params.id;
    const { project } = props;
    if(project) {
        return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <span className="card-title">{ project.title }</span>
                <p>{ project.content }</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
            <div>Posted by { project.authorFirstName }</div>
            <div>{ project.createdAt}</div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="container center">
                <h1>Loading project Quickly</h1>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id]: null;
    return {
        project: project

    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
