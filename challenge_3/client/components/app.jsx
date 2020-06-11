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
      score: [],
      totalScore: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitBowl = this.submitBowl.bind(this);
  }

  componentDidMount(){

  }

  submitBowl(value) {
    console.log(this.state.score)
    if (value === "X") {
      this.setState((prev) => ({
        score: prev.score.concat(value),
        totalScore: prev.totalScore + 10
      }))
    } else {
      this.setState((prev) => ({
        score: prev.score.concat(value),
        totalScore: prev.totalScore + value
      }))
    }
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
                  <Scorecard playerName={this.state.name} score={this.state.score} total={this.state.totalScore} />
                  <br></br>
                  <div className="underCard">
                    <Turn submitBowl={this.submitBowl} />
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
