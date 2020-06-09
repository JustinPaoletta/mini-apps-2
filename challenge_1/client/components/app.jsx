import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historicalData: undefined,
      search: '',
      num: 0,
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){

  }

  updateSearchTerm(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleSearch() {
    let term = this.state.search;
    console.log(this.state.search)
    axios.get(`http://localhost:3000/events?category2=${term}`)
    .then((results) => {
      let allRecords = [];
      let tenRecords = [];
      let count = 1
      results.data.forEach((record) => {
        if (count === 11) {
          count = 1
          allRecords.push(tenRecords);
          tenRecords = [];
        }
        tenRecords.push(record);
        count++
      })
      this.setState({
        historicalData: allRecords,
      })
      console.log(this.state)
    })
    .catch((error) => { console.log(error) })
  }

  render() {
    let myNum = this.state.num;
    let records;

    if (this.state.historicalData) {
     records = this.state.historicalData[myNum].map((record) => {
        return <div><p>{record.category2}</p><p>{record.year}</p><p>{record.description}</p></div>
      })
    }
    return(
      <div className="appContainer">
        <div className="Title">
          <h1>Historical Events Finder</h1>
        </div>
        <div className="search">
          <input type="text" onChange={(e) => {this.updateSearchTerm(e)}}></input>
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div>
          {records}
        </div>
        <ul className="Pagination">
          <li onClick={() => {this.setState({num: 0})}}>1</li>
          <li onClick={() => {this.setState({num: 1})}}>2</li>
          <li onClick={() => {this.setState({num: 2})}}>3</li>
          <li onClick={() => {this.setState({num: 3})}}>4</li>
          <li onClick={() => {this.setState({num: 4})}}>5</li>
          <li onClick={() => {this.setState({num: 5})}}>6</li>
          <li onClick={() => {this.setState({num: 6})}}>7</li>
          <li onClick={() => {this.setState({num: 7})}}>8</li>
          <li onClick={() => {this.setState({num: 8})}}>9</li>
          <li onClick={() => {this.setState({num: 9})}}>10</li>
        </ul>
      </div>
    )
  }
}

export default App;

