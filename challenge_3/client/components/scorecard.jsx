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
    // if any pair equals 10 then change the last in the pair to "/"
    return(
      <div className="myScore">
        <div className="start-end">
          <div className="top">Player Name</div>
          <div className="bottom"><p className="name">{this.props.playerName}</p></div>
        </div>
        <div className="bowlSquare">
          <div className="top">1</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[0]}</div>
              <div className="scoreSquare">{this.props.score[1]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">2</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[2]}</div>
              <div className="scoreSquare">{this.props.score[3]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">3</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[4]}</div>
              <div className="scoreSquare">{this.props.score[5]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">4</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[6]}</div>
              <div className="scoreSquare">{this.props.score[7]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">5</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[8]}</div>
              <div className="scoreSquare">{this.props.score[9]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">6</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[10]}</div>
              <div className="scoreSquare">
              {this.props.score[11]}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">7</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">
              {this.props.score[12]}
              </div>
              <div className="scoreSquare">
              {this.props.score[13]}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">8</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">
              {this.props.score[14]}
              </div>
              <div className="scoreSquare">
              {this.props.score[15]}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">9</div>
          <div className="bottom">
            <div className="bt">
              <div></div>
              <div className="scoreSquare">{this.props.score[16]}</div>
              <div className="scoreSquare">{this.props.score[17]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bowlSquare">
          <div className="top">10</div>
          <div className="bottom">
            <div className="bt">
              <div className="scoreSquare">{this.props.score[18]}</div>
              <div className="scoreSquare">{this.props.score[19]}</div>
              <div className="scoreSquare">{this.props.score[20]}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="start-end">
          <div className="top">Total Score</div>
    <div className="bottom"><p className="total">{this.props.total}</p></div>
        </div>
      </div>
    )
  }
}

export default Scorecard;
