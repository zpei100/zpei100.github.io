import React, { Component } from 'react'
import Project from './project.jsx'

export default class Work extends Component {
  render() {
    const { workData } = this.props
    return (
      <div id="work">
        <p className="title">Projects</p>
        {workData.map(project => <Project project={project} />)}
      </div>
    );
  }
}