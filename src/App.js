import React, { Component } from 'react';
import axios from 'axios';
import WhichCity from './Whichcity.js';
import Results from './Results.js';
import Form from './Form.js';
import test from './assets/narwhals.jpg'
import './App.css';


class App extends Component {
// The state stuff 
  constructor() {
    super();
    this.state = {
      amsterdam: 0,
      boston: 0,
      bostonli:[],
      amsterdamli:[],
      shuffleli:[],
      // userInput: "",
    }
  }
    // The things that happen when a user clicks submit
    handleSubmit = (event, searchthis) => {
    event.preventDefault()
      // The API call for boston
      axios({
        url: `https://api.harvardartmuseums.org/object`,
        method: `GET`,
        responseType: `json`,
        params: {
          apikey: `ac6514d0-8a6f-11ea-a066-95faa1e6fe57`,
          hasimage: 1,
          sort: "random",
          person: "any",
          primaryimageul: true,
          keyword: searchthis,
          q: "imagepermissionlevel:0",
        }
      }).then((result) => {
      // Data (array of objects) from boston call are mapped into lis and then added to a new array
       const boston = result.data.records;
       const bostonlis = boston.map((bart) => {
          return (
            <li key={bart.id} className="boston">
              <h2>{bart.title}</h2>
              <p>{bart.people[0].name}</p>
              <label htmlFor="likedart">That's nice</label>
              <input type="checkbox" id="likedart" className="boston" onChange={this.handleCheck}></input>
              <img src={bart.primaryimageurl} alt={bart.title} />
            </li>
          )
        })
        this.setState({
          bostonli: bostonlis
        })

      // console.log(this.state.bostonli)
      })
      // The api call for amsterdam 
      axios({
        url: `https://www.rijksmuseum.nl/api/en/collection`,
        method: `GET`,
        responseType: `json`,
        params: {
          key: `dF0gsdz1`,
          imgonly: true,
          q: searchthis
        }
        
      }).then((response) => {
        // Data (array of objects) from amsterdam call are mapped into lis and then added to a new array
        const amsterdam = response.data.artObjects;
        const amsterdamlis = amsterdam.map((aart) => {
          return (
            <li key={aart.id} className="amsterdam">
              <h2>{aart.title}</h2>
              <p>{aart.principalOrFirstMaker}</p>
              <label htmlFor="likedart">That's nice</label>
              <input type="checkbox" id="likedart" className="amsterdam" onChange={this.handleCheck}></input>
              <img src={aart.webImage.url} alt={aart.title} />
            </li>
          )
        })
        this.setState({
          amsterdamli: amsterdamlis
        }, ()=>{
          // amsterdam li array and boston li array are combined into one array and new array that shuffles the array is made
          const shuffleli= this.shuffleArray([...this.state.amsterdamli, ...this.state.bostonli])
          this.setState({shuffleli})
        })
        // console.log(this.state.mixedli);
      })
    // clears input field 
    this.setState({
      amsterdam: 0,
      boston: 0
    })
    
  }

  // takes text input and passes it to state also clears city counts once user starts typing something new 
  // handleUinput = (event) => {
  //   this.setState({
  //     userInput: event.target.value,
  //     amsterdam: 0,
  //     boston: 0
  //   })
  // }

  // function used to produce shuffled array of lis
  shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// function used to detect changes in checkboxes and add/remove point from city count in state
handleCheck = (event) =>{
  const city = event.target.className;
  let citylikecount = this.state[city];

  if(event.target.checked){
    citylikecount++;
  }else{
    citylikecount--;  
  }
  this.setState({
    [city]:citylikecount
  })
}



  render() {
    return (
      <div className="App">
        <h1>Where should I see...?</h1>
        <p>Input a query and then check which items you are drawn to. At the end see which city you should jet off to next.</p>
        {/* <form action="" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userInput} onChange={this.handleUinput} placeholder="lion, france, sun"></input>
          <button type="submit">Take a Look</button>
        </form> */}
        <Form handleSubmit={this.handleSubmit} />
        <section>
          <p> You should visit: 
          <WhichCity amsterdam={this.state.amsterdam} boston={this.state.boston}/>
          </p>
        </section>
        <section>
          <img src={test} alt="a test image"/>
          <p>Amsterdam:{this.state.amsterdam}</p>
          <p>Boston:{this.state.boston}</p>
        </section>
        <section>
          <Results shuffled={this.state.shuffleli}/>
        </section>
        
      </div>
    );
  }
}
export default App;



// When checkbox is checked add 1 to boston or amsterdam
// count number of checked buttons/lis with class of boston and class of amsterdam 
// display numbers on page 