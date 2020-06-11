import React from 'react';

class Scorecard extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className="myScore">
        <div className="start-end">
          <div className="top">Player Name</div>
          <div className="bottom"><p>{this.props.playerName}</p></div>
        </div>
        <div className="bowlSquare">
          <div className="top">1</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">2</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">3</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">4</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">5</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">6</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">7</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">8</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">9</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">10</div>
          <div className="bottom">
            <div className="bt">
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
              <div className="scoreSquare"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="start-end">
          <div className="top">Total Score</div>
          <div className="bottom"></div>
        </div>
      </div>
    )
  }
}

export default Scorecard;
