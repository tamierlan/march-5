import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {FaRoad} from 'react-icons/fa';
import {MdPhoneInTalk} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }


  render() {
    return (
      <div className="contact-one">
        <div className="column">
          <div className="wrapper">
            <div className="company-info">
              <h3>Acme Web Design</h3>
              <ul>
                <li><FaRoad /> 44 Something st</li>
                <li><MdPhoneInTalk /> (555) 555-5555</li>
                <li><MdEmail /> test@acme.test</li>
              </ul>
            </div>
            <div className="contact">
              <h3>Email Us</h3>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <label>Name</label>
                  <input id="name" placeholder="Name"
                  value={this.name} onChange={this.handleClick} />
                </p>
                <p>
                  <label>Email</label>
                  <input id="email" placeholder="Email"
                  value={this.email} onChange={this.handleClick} />
                </p>
                <p className="full">
                  <label>Message</label>
                  <input id="message" placeholder="text..."
                  value={this.message} onChange={this.handleClick} />
                </p>
                <p className="full">
                  <button onClick={this.handleSubmit}>Send Email</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
