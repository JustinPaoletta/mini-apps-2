import React from 'react';

class Turn extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className="pinContainer">
        <div>
          <h3>Select The Pins You Hit</h3>
          <div className="backRow">
            <div className="pin"><p>7</p></div>
            <div className="pin"><p>8</p></div>
            <div className="pin"><p>9</p></div>
            <div className="pin"><p>10</p></div>
          </div>
          <br></br>
          <div className="thirdRow">
            <div className="pin"><p>4</p></div>
            <div className="pin"><p>5</p></div>
            <div className="pin"><p>6</p></div>
          </div>
          <br></br>
          <div className="secondRow">
            <div className="pin"><p>2</p></div>
            <div className="pin"><p>3</p></div>
          </div>
          <br></br>
          <div className="firstRow">
            <div className="pin"><p>1</p></div>
          </div>
        </div>
        <button className="submitBowl">Submit Turn</button>
      </div>
    )
  }
}

export default Turn;