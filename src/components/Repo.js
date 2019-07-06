import React, {Component} from 'react';
import '../App.css';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GithubChart from "./GithubChart";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

class Repo extends Component {

    state = {
        displayCharts: false
    };

    render() {
        return (
            <div className="div">
                <Grid container
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center">
                    <Grid direction="row-reverse" xs={12} sm={6} md={3}>
                        <Card elevation={10}>
                            <CardHeader title={this.props.content.name}/>
                            <CardContent>
                                <Typography color="textSecondary">
                                    {this.props.content.description}
                                </Typography>
                                <Button color="primary" onClick={() => this.setState({
                                    displayCharts: !this.state.displayCharts
                                })}>Details</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {this.state.displayCharts ? <GithubChart fullName={this.props.content.full_name}/> : null}
                </Grid>
            </div>
        )
    }
}

export default Repo;