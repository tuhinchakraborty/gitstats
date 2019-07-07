import React, {Component} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from 'recharts';

class GithubChart extends Component {

    state = {
        modifiedGithubData: []
    };

    componentDidMount() {
        fetch("https://api.github.com/repos/" + this.props.fullName + "/stats/punch_card")
            .then(response => response.json())
            .then(json => this.convertData(json))
    }

    convertData = (githubData) => {
        this.setState({
            modifiedGithubData: [
                {
                    day: "sunday",
                    contributions: githubData.filter(data => data[0] === 0).reduce((acc, data) => acc + data[2], 0)
                },
                {
                    day: "monday",
                    contributions: githubData.filter(data => data[0] === 1).reduce((acc, data) => acc + data[2], 0)
                },
                {
                    day: "tuesday",
                    contributions: githubData.filter(data => data[0] === 2).reduce((acc, data) => acc + data[2], 0)
                },
                {
                    day: "wednesday",
                    contributions: githubData.filter(data => data[0] === 3).reduce((acc, data) => acc + data[2], 0)
                },
                {
                    day: "thursday",
                    contributions: githubData.filter(data => data[0] === 4).reduce((acc, data) => acc + data[2], 0)
                },
                {
                    day: "friday",
                    contributions: githubData.filter(data => data[0] === 5).reduce((acc, data) => acc + data[2], 0)
                },
                {
                    day: "saturday",
                    contributions: githubData.filter(data => data[0] === 6).reduce((acc, data) => acc + data[2], 0)
                }
            ]
        });
    };

    render() {
        return (
            <div className="div">
                <LineChart
                    width={1000}
                    height={500}
                    data={this.state.modifiedGithubData}
                    margin={{
                        top: 30, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="contributions" stroke="#854442" activeDot={{r: 8}}/>
                </LineChart>
            </div>
        );
    }
}

export default GithubChart;