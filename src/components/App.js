import React, { Component } from 'react';
import IdeaForm from './IdeaForm';
import IdeaContainer from './IdeaContainer';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    // const newIdea = Object.assign({}, idea, {id: Date.now()})

    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]    
    
    this.setState({ ideas })
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({
      ideas: filteredIdeas
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ideabox</h1>
          <IdeaForm addIdea={this.addIdea}/>
        </header>
        <IdeaContainer ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </div>
    );
  }
}

export default App;
