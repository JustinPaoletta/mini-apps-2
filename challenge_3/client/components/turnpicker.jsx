import React from 'react';

class Turn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pinsClicked: [],
      bg10: 'white',
      col10: 'black',
      bg9: 'white',
      col9: 'black',
      bg8: 'white',
      col8: 'black',
      bg7: 'white',
      col7: 'black',
      bg6: 'white',
      col6: 'black',
      bg5: 'white',
      col5: 'black',
      bg4: 'white',
      col4: 'black',
      bg3: 'white',
      col3: 'black',
      bg2: 'white',
      col2: 'black',
      bg1: 'white',
      col1: 'black',
      bg0: 'white',
      col0: 'black',
    }
    this.handlePinClick = this.handlePinClick.bind(this);

  }

  componentDidMount(){

  }

  handlePinClick(value){

    if (value === "7" && this.state.bg7 === "white") {
      this.setState({
        pinsClicked: 7,
        bg7: 'black',
        col7: 'white',
        bg6: 'black',
        col6: 'white',
        bg5: 'black',
        col5: 'white',
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "7" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 7,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "8" && this.state.bg8 === "white") {
      this.setState({
        pinsClicked: 8,
        bg8: 'black',
        col8: 'white',
        bg7: 'black',
        col7: 'white',
        bg6: 'black',
        col6: 'white',
        bg5: 'black',
        col5: 'white',
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "8" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 8,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "9" && this.state.bg9 === "white") {
      this.setState({
        pinsClicked: 9,
        bg9: 'black',
        col9: 'white',
        bg8: 'black',
        col8: 'white',
        bg7: 'black',
        col7: 'white',
        bg6: 'black',
        col6: 'white',
        bg5: 'black',
        col5: 'white',
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "9" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 9,
        bg10: 'white',
        col10: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "10" && this.state.bg10 === "white") {
      this.setState({
        pinsClicked: "X",
        bg10: 'black',
        col10: 'white',
        bg9: 'black',
        col9: 'white',
        bg8: 'black',
        col8: 'white',
        bg7: 'black',
        col7: 'white',
        bg6: 'black',
        col6: 'white',
        bg5: 'black',
        col5: 'white',
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "4" && this.state.bg4 === "white") {
      this.setState({
        pinsClicked: 4,
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "4" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 4,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg7: 'white',
        col7: 'black',
        bg6: 'white',
        col6: 'black',
        bg5: 'white',
        col5: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "5" && this.state.bg5 === "white") {
      this.setState({
        pinsClicked: 5,
        bg5: 'black',
        col5: 'white',
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "5" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 5,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg7: 'white',
        col7: 'black',
        bg6: 'white',
        col6: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "6" && this.state.bg6 === "white") {
      this.setState({
        pinsClicked: 6,
        bg6: 'black',
        col6: 'white',
        bg5: 'black',
        col5: 'white',
        bg4: 'black',
        col4: 'white',
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "6" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 6,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg7: 'white',
        col7: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "2" && this.state.bg2 === "white") {
      this.setState({
        pinsClicked: 2,
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "2" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 2,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg7: 'white',
        col7: 'black',
        bg6: 'white',
        col6: 'black',
        bg5: 'white',
        col5: 'black',
        bg4: 'white',
        col4: 'black',
        bg3: 'white',
        col3: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "3" && this.state.bg3 === "white") {
      this.setState({
        pinsClicked: 3,
        bg3: 'black',
        col3: 'white',
        bg2: 'black',
        col2: 'white',
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "3" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 3,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg7: 'white',
        col7: 'black',
        bg6: 'white',
        col6: 'black',
        bg5: 'white',
        col5: 'black',
        bg4: 'white',
        col4: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

    if (value === "1" && this.state.bg1 === "white") {
      this.setState({
        pinsClicked: 1,
        bg1: 'black',
        col1: 'white',
        bg0: 'white',
        col0: 'black',
      })
    } else if (value === "1" && this.state.bg1 === "black") {
      this.setState({
        pinsClicked: 1,
        bg10: 'white',
        col10: 'black',
        bg9: 'white',
        col9: 'black',
        bg8: 'white',
        col8: 'black',
        bg7: 'white',
        col7: 'black',
        bg6: 'white',
        col6: 'black',
        bg5: 'white',
        col5: 'black',
        bg4: 'white',
        col4: 'black',
        bg3: 'white',
        col3: 'black',
        bg2: 'white',
        col2: 'black',
        bg0: 'white',
        col0: 'black',
      })
    }

      if (value === "Gutter" && this.state.bg0 === "white") {
        this.setState({
          pinsClicked: 0,
          bg10: 'white',
          col10: 'black',
          bg9: 'white',
          col9: 'black',
          bg8: 'white',
          col8: 'black',
          bg7: 'white',
          col7: 'black',
          bg6: 'white',
          col6: 'black',
          bg5: 'white',
          col5: 'black',
          bg4: 'white',
          col4: 'black',
          bg3: 'white',
          col3: 'black',
          bg2: 'white',
          col2: 'black',
          bg1: 'white',
          col1: 'black',
          bg0: 'black',
          col0: 'white',
        })
      }
    }



  render(){
    console.log(this.state.pinsClicked)
    // break down the html of the pins into an array
    // logically only render the pins that are relevant for ecample if the player knocked down 7 pins on first roll now you should render only 3
    return(
      <div className="pinContainer">
        <div>
          <h3>Select The Number Of Pins You Hit</h3>
          <div className="backRow">
            <div className="pin" style={{backgroundColor: this.state.bg7, color: this.state.col7}} onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>7</p>
            </div>
            <div className="pin" style={{backgroundColor: this.state.bg8, color: this.state.col8}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>8</p>
            </div>
            <div className="pin" style={{backgroundColor: this.state.bg9, color: this.state.col9}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>9</p>
            </div>
            <div className="pin" style={{backgroundColor: this.state.bg10, color: this.state.col10}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>10</p>
            </div>
          </div>
          <br></br>
          <div className="thirdRow">
            <div className="pin" style={{backgroundColor: this.state.bg4, color: this.state.col4}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>4</p>
            </div>
            <div className="pin" style={{backgroundColor: this.state.bg5, color: this.state.col5}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>5</p>
            </div>
            <div className="pin" style={{backgroundColor: this.state.bg6, color: this.state.col6}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>6</p>
            </div>
          </div>
          <br></br>
          <div className="secondRow">
            <div className="pin" style={{backgroundColor: this.state.bg2, color: this.state.col2}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>2</p>
            </div>
            <div className="pin" style={{backgroundColor: this.state.bg3, color: this.state.col3}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>3</p>
            </div>
          </div>
          <br></br>
          <div className="firstRow">
            <div className="pin" style={{backgroundColor: this.state.bg1, color: this.state.col1}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>1</p>
            </div>
            <br></br>
            <div className="pin" style={{backgroundColor: this.state.bg0, color: this.state.col0}}  onClick={(e) => {this.handlePinClick(e.target.innerText)}}>
              <p>Gutter</p>
            </div>
          </div>
        </div>
        <button className="submitBowl" onClick={() => { this.props.submitBowl(this.state.pinsClicked) }}>Submit Turn</button>
      </div>
    )
  }
}

export default Turn;