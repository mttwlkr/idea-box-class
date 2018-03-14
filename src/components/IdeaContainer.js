import PropTypes from 'prop-types'
import React from 'react';
import Card from './Card';

const IdeaContainer = ({ ideas, deleteIdea }) => {
  
  const ideaCards = ideas.map( idea => <Card {...idea} key={idea.title} deleteIdea={deleteIdea}/>)
  
  return (
    <div>
      {ideaCards}
    </div>
  )
}

export default IdeaContainer;

IdeaContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  deleteIdea: PropTypes.func
}