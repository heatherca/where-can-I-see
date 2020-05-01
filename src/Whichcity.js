import React from 'react';


function WhichCity(props) {
  if (props.amsterdam > props.boston) {
    return (
      <span>amsterdam</span>
    )
  } else if (props.boston > props.amsterdam) {
    return (
      <span>boston</span>
    )
  } else {
    return (
      <span>Boston and Amsterdam</span>
    )
  }
}



export default WhichCity