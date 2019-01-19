import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class Main extends Component {
  render() {
    return (
      <div id="greeting">
        <header>NAME</header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores doloremque, necessitatibus ea delectus repudiandae placeat excepturi cupiditate ab! Consequuntur et reprehenderit quia eos porro.</p>
        <div><Link to="/about">See Projects</Link></div>
      </div>
    );
  }
}