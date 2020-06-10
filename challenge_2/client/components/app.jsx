import React from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineChartData: {},
      barChartData: {},
    }
  }

  componentDidMount(){
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-01-01&end=2020-06-09')
    .then((results) => {

      let yr_2017 = [];
      let yr_2018 = [];
      let yr_2019 = [];
      let yr_2020 = [];

      let keys = Object.keys(results.data.bpi);

      keys.forEach((key) => {
        if (key.slice(0,4) === "2017") {
          yr_2017.push(Number(results.data.bpi[key]))
        }
        if (key.slice(0,4) === "2018") {
          yr_2018.push(Number(results.data.bpi[key]))
        }
        if (key.slice(0,4) === "2019") {
          yr_2019.push(Number(results.data.bpi[key]))
        }
        if (key.slice(0,4) === "2020") {
          yr_2020.push(Number(results.data.bpi[key]))
        }
      })

      const monthAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

      let jan2017 = monthAvg(yr_2017.slice(0,31));
      let feb2017 = monthAvg(yr_2017.slice(31, 59));
      let mar2017 = monthAvg(yr_2017.slice(59, 90));
      let apr2017 = monthAvg(yr_2017.slice(90, 120));
      let may2017 = monthAvg(yr_2017.slice(120, 151));
      let june2017 = monthAvg(yr_2017.slice(151, 181));
      let july2017 = monthAvg(yr_2017.slice(181, 212));
      let aug2017 = monthAvg(yr_2017.slice(212, 243));
      let sept2017 = monthAvg(yr_2017.slice(243, 273));
      let oct2017 = monthAvg(yr_2017.slice(273, 304));
      let nov2017 = monthAvg(yr_2017.slice(304, 334));
      let dec2017 = monthAvg(yr_2017.slice(334));

      let stats_2017 = [jan2017, feb2017, mar2017, apr2017, may2017, june2017, july2017, aug2017, sept2017, oct2017, nov2017, dec2017]

      console.log(stats_2017);

      let jan2018 = monthAvg(yr_2018.slice(0,31));
      let feb2018 = monthAvg(yr_2018.slice(31, 59));
      let mar2018 = monthAvg(yr_2018.slice(59, 90));
      let apr2018 = monthAvg(yr_2018.slice(90, 120));
      let may2018 = monthAvg(yr_2018.slice(120, 151));
      let june2018 = monthAvg(yr_2018.slice(151, 181));
      let july2018 = monthAvg(yr_2018.slice(181, 212));
      let aug2018 = monthAvg(yr_2018.slice(212, 243));
      let sept2018 = monthAvg(yr_2018.slice(243, 273));
      let oct2018 = monthAvg(yr_2018.slice(273, 304));
      let nov2018 = monthAvg(yr_2018.slice(304, 334));
      let dec2018 = monthAvg(yr_2018.slice(334));

      let stats_2018 = [jan2018, feb2018, mar2018, apr2018, may2018, june2018, july2018, aug2018, sept2018, oct2018, nov2018, dec2018]

      console.log(stats_2018);

      let jan2019 = monthAvg(yr_2019.slice(0,31));
      let feb2019 = monthAvg(yr_2019.slice(31, 59));
      let mar2019 = monthAvg(yr_2019.slice(59, 90));
      let apr2019 = monthAvg(yr_2019.slice(90, 120));
      let may2019 = monthAvg(yr_2019.slice(120, 151));
      let june2019 = monthAvg(yr_2019.slice(151, 181));
      let july2019 = monthAvg(yr_2019.slice(181, 212));
      let aug2019 = monthAvg(yr_2019.slice(212, 243));
      let sept2019 = monthAvg(yr_2019.slice(243, 273));
      let oct2019 = monthAvg(yr_2019.slice(273, 304));
      let nov2019 = monthAvg(yr_2019.slice(304, 334));
      let dec2019 = monthAvg(yr_2019.slice(334));

      let stats_2019 = [jan2019, feb2019, mar2019, apr2019, may2019, june2019, july2019, aug2019, sept2019, oct2019, nov2019, dec2019]

      console.log(stats_2019);

      let jan2020 = monthAvg(yr_2020.slice(0,31));
      let feb2020 = monthAvg(yr_2020.slice(31, 60));
      let mar2020 = monthAvg(yr_2020.slice(60, 91));
      let apr2020 = monthAvg(yr_2020.slice(91, 121));
      let may2020 = monthAvg(yr_2020.slice(121, 152));
      let june2020 = monthAvg(yr_2020.slice(152, 182));

      let stats_2020 = [jan2020, feb2020, mar2020, apr2020, may2020, june2020]

      console.log(stats_2020);

      this.setState({
        lineChartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Average Price of Bitcoin 2017',
              data: [
                ...stats_2017
              ],
              backgroundColor: ['rgb(127, 172, 161)'],
              pointBorderColor: [
                'rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)',
              ],
              pointBackgroundColor: [
                'rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)',
              ],
            },
            {
              label: 'Average Price of Bitcoin 2018',
              data: [
                ...stats_2018
              ],
              backgroundColor: [
                'rgb(137, 182, 117)'
              ],
              pointBorderColor: [
                'rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)',
              ],
              pointBackgroundColor: [
                'rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)',
              ],
            },
            {
              label: 'Average Price of Bitcoin Throughout 2019',
              data: [
                ...stats_2019
              ],
              backgroundColor: [
                'rgb(222, 223, 160)'
              ],
              pointBorderColor: [
                'rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)',
              ],
              pointBackgroundColor: [
                'rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)',
              ],
            },
            {
              label: 'Average Price of Bitcoin 2020',
              data: [
                ...stats_2020
              ],
              backgroundColor: [
                'rgb(142, 223, 169)'
              ],
              pointBorderColor: [
                'rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)','rgb(0,0,0)',
              ],
              pointBackgroundColor: [
                'rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)',
              ],
              options: {
                legend: {
                   labels: {
                      backgroundColor: 'white' //set your desired color
                   }
                }
             }
            }
          ]
        },
        barChartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Average Price of Bitcoin 2017',
              data: [
                ...stats_2017
              ],
              backgroundColor: [
                'rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)','rgb(127, 172, 161)',
              ],
              options: {
                legend: {
                   labels: {
                      backgroundColor: 'white' //set your desired color
                   }
                }
             }
            },
            {
              label: 'Average Price of Bitcoin 2018',
              data: [
                ...stats_2018
              ],
              backgroundColor: [
                'rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)','rgb(137, 182, 117)',
              ],
            },
            {
              label: 'Average Price of Bitcoin Throughout 2019',
              data: [
                ...stats_2019
              ],
              backgroundColor: [
                'rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)','rgb(222, 223, 160)',
              ],
            },
            {
              label: 'Average Price of Bitcoin 2020',
              data: [
                ...stats_2020
              ],
              backgroundColor: [
                'rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)','rgb(142, 223, 169)',
              ],
              options: {
                legend: {
                   labels: {
                      backgroundColor: 'white' //set your desired color
                   }
                }
             }
            }
          ]
        }
        }
      )

    })
    .catch((error) => { console.log(error) })
  }

  render() {
    return(
      <div>
        <h1>BitCoin Historical Price 2017 - Present Day</h1>
        <h6>Powered by <a href="http://coindesk.com/price/bitcoin">CoinDesk</a></h6>
        <div className="chart">
          <br></br>
          <br></br>
          <br></br>
          <h3>Line Graph</h3>
          <Line
            data={this.state.lineChartData}
            width={80}
            height={20}
            options={{ maintainAspectRatio: true }}
          />
          <br></br>
          <br></br>
          <h3>Bar Graph</h3>
          <Bar
            data={this.state.barChartData}
            width={80}
            height={20}
            options={{ maintainAspectRatio: true }}
          />
        </div>
      </div>
    )
  }
}

export default App;
