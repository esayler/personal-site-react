import React from 'react'

const Project = (props) => {
  return (
    <div>
      <h3>{props.params.projectName.replace(/-/, ' ')}</h3>
    </div>
  )
}

Project.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string)
}

export default Project
