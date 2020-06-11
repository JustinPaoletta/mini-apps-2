import React from 'react';

class Player extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

  }


  render(){
    return(
      <div className="playerForm">
        <p>Enter Your Name</p>
        <input onChange={(e) => {this.props.handleChange(e)}} type="text" />
        <br></br><br></br>
        <button onClick={() => {this.props.handleClick()}}>Start Game</button>
      </div>
    )
  }
}

export default Player;