import React, {Component} from 'react';
import '../App.css';
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GithubChart from "./GithubChart";

class ReposList extends Component {

    state = {
        displayCharts: false,
        fullName: ""
    };

    render() {
        const cardStyle = {
            display: 'block',
            transitionDuration: '0.3s',
            height: '15vw'
        };
        return (
            <div className="div">
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {this.props.userData.map(data => (
                        <Grid item xs={12} sm={6} md={3} key={data.id}>
                            <Card style={cardStyle} elevation={10}>
                                <CardHeader title={data.name}/>
                                <CardContent>
                                    <Typography color="textSecondary">
                                        {data.description}
                                    </Typography>
                                    <Button color="primary"
                                            onClick={() => this.setState({
                                                    displayCharts: !this.state.displayCharts,
                                                    fullName: data.full_name
                                                }
                                            )}
                                    >Details</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <div>
                    {this.state.displayCharts ? <GithubChart fullName={this.state.fullName}/> : null}
                </div>
            </div>
        );
    }
}

export default ReposList;