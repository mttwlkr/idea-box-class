import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, desc, id, deleteIdea}) => {

  return (
    <div>
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <button onClick={() => {deleteIdea(id)}}>X</button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteIdea: PropTypes.func.isRequired
}

export default Card;