import React from 'react';
import Turn from './turnpicker.jsx';
import Scorecard from './scorecard.jsx';
import Player from './player.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gameState: 'start',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){

  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name);
  }

  handleClick(){
    this.setState({
      gameState: 'letsbowl'
    })
  }

  render(){
    let myGame;
    if (this.state.gameState === 'start') {
      myGame =  <div>
                  <h1>Bowl-O-Rama!</h1>
                  <Player handleChange={this.handleChange} handleClick={this.handleClick} />
                </div>
    }

    if (this.state.gameState === 'letsbowl') {
      myGame =  <div>
                  <h1>Bowl-O-Rama!</h1>
                  <Scorecard playerName={this.state.name} />
                  <br></br>
                  <div className="underCard">
                    <Turn />
                  </div>
                </div>
    }

    return(
      <div>
        {myGame}
      </div>
    )
  }

}

export default App;
