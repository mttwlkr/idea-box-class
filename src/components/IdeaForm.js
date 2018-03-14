import React, { Component } from 'react';
import './styles/IdeaForm.css';
import PropTypes from 'prop-types';

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desc: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: e.target.value  
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="title"
          value={this.state.title}
          name='title'
          onChange={this.handleChange}
        />
        <input 
          type="text"
          placeholder="description"
          value={this.state.desc}
          name='desc'
          onChange={this.handleChange}
        />
        <button 
          type="submit"
        >Submit
        </button>
      </form>
    )
  }
}

IdeaForm.propTypes = {
  addIdea: PropTypes.func.isRequired
}

export default IdeaForm;