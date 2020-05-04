import React, { Component } from 'react';
import axios from 'axios';
import WhichCity from './Whichcity.js';
import Results from './Results.js';
import Form from './Form.js';
import './App.css';


class App extends Component {
// The state stuff 
  constructor() {
    super();
    this.state = {
      userInput:"",
      amsterdam: 0,
      boston: 0,
      bostonli:[],
      amsterdamli:[],
      shuffleli:[]
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
          title: searchthis,
          q: "imagepermissionlevel:0",
          
        }
      }).then((result) => {
      // Data (array of objects) from boston call are mapped into lis and then added to a new array
       const boston = result.data.records;
       const bostonlis = boston.map((bart) => {
          return (
            <li key={bart.id} className="boston">
              <div className="pic">
                <img src={bart.primaryimageurl} alt={bart.title} />
              </div>
              <div className="picInfo" tabIndex="0">
                <h2><span>{bart.title}</span></h2>
                <p><span>{bart.people[0].name}</span></p>
                <label htmlFor={bart.id} className="hideme" >Check to like art</label>
                <input type="checkbox" id={bart.id} className="boston" onChange={this.handleCheck} ></input>
              </div>
            </li>
          )
        })
        this.setState({
          bostonli: bostonlis,
          userInput: searchthis
        })

      })
      // The api call for amsterdam 
      axios({
        url: `https://www.rijksmuseum.nl/api/en/collection`,
        method: `GET`,
        responseType: `json`,
        params: {
          key: `dF0gsdz1`,
          imgonly: true,
          s: "relevance",
          q: "title:" + searchthis,
        }
        
      }).then((response) => {
        // Data (array of objects) from amsterdam call are mapped into lis and then added to a new array className="sr-only"
        const amsterdam = response.data.artObjects;
        const amsterdamlis = amsterdam.map((aart) => {
          return (
            <li key={aart.id} className="amsterdam">
              <div className="pic">
                <img src={aart.webImage.url} alt={aart.title} />
              </div>
              <div className="picInfo" tabIndex="0">
                <h2><span>{aart.title}</span></h2>
                <p><span>{aart.principalOrFirstMaker}</span></p>
                <label htmlFor={aart.id} className="sr-only">Check to like art</label>
                <input type="checkbox" id={aart.id} className="amsterdam" onChange={this.handleCheck} tabIndex="0"></input>
              </div>
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
      })
    // clears city counts
    this.setState({
      amsterdam: 0,
      boston: 0
    })   
  }

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

// render 
  render() {
    return (
      <div className="App">
        {/* header  */}
        <header>
          <div className="wrapper">
            <h1 id="#top">Where can I see...?</h1>
            <p>Input a query and then heart which items you are drawn to. At the end see if Amsterdam or Boston is the city for you. </p>
          </div>
        </header>
        <main>
          {/* search section  */}
          <section className="search">
            <div className="wrapper">
              <Form handleSubmit={this.handleSubmit} />
            </div>
          </section>
          {/* results section  */}
          <section className="results">
            <div className="wrapper">
              <Results shuffled={this.state.shuffleli} countme={this.state.userInput}/>
            </div>
          </section>
          {/* where section  */}
          <section className="where">
            <div className="wrapper">
              <p> You should visit: 
              <WhichCity amsterdam={this.state.amsterdam} boston={this.state.boston}/>
              </p>
            </div>
            <div className="pics">
              <div className="city cA">
                <div>
                  <a href="https://www.rijksmuseum.nl/en">Rijksmuseum</a>
                <p>{this.state.amsterdam}</p>
                </div>
              </div>
              <div className="city cB">
                <div>
                  <a href="https://www.harvardartmuseums.org/">Harvard Art Museums</a>
                  <p>{this.state.boston}</p>
                </div>
              </div>
            </div>
            {/* search again section  */}
            <div className="searchAgain">
              <div className="wrapper">
                <a href="#top">Search Again</a>
              </div>
            </div>
          </section>
        </main>
        {/* footer  */}
        <footer>
          <div className="wrapper">
            <p>Made By: <a href="http://www.heatherandreadis.com/">Heather Andreadis</a> with data from <a href="https://github.com/harvardartmuseums/api-docs">Harvard Art Museums API</a> and <a href="https://data.rijksmuseum.nl/object-metadata/api/">RijksData API</a></p>
          <p></p>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
