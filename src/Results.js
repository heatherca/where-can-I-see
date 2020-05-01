import React from 'react';


function Results(props) {
  if (props.shuffled.length === 0) {
    return (
      <p>Try a new search.</p>
    )
  } else {
    return (
      <ul>
        {
          props.shuffled.map((art) => {
            return (
              art
            )
          })
        }

      </ul>
    )
  }
}



export default Results