import React from 'react';

// function that displays which city has the most hearts 
function WhichCity(props) {
  if (props.amsterdam > props.boston) {
    return (
      <span> Amsterdam</span>
    )
  } else if (props.boston > props.amsterdam) {
    return (
      <span> Boston</span>
    )
  } else {
    return (
      <span> Boston and Amsterdam</span>
    )
  }
}

export default WhichCity