import React from 'react';

// function that puts shuffled lis onto page in results section 
function Results(props) {
  // if nothing is entered in the search or the search returns no results asks user to search again. 
  if (props.countme.length === 0 ||  props.shuffled.length === 0) {
    return (
      <p className="tryagain">Did you enter anything? Maybe try a new search.</p>
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