
import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {activeTab: 0};
    }

    toggleCategories = () => {
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '458', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '176px'}}>
                            LoungeLooks
                        </CardTitle>
                        <CardText>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cumque inventore necessitatibus alias adipisci itaque molestias, consequatur sed eius dolore beatae eaque, consectetur totam, recusandae quae quibusdam? Molestiae, tenetur. Magnam!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live</Button>
                        </CardActions>
                        <CardMenu style={{color: '#000'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '458', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '176px'}}>
                            RemoteSnacks
                        </CardTitle>
                        <CardText>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cumque inventore necessitatibus alias adipisci itaque molestias, consequatur sed eius dolore beatae eaque, consectetur totam, recusandae quae quibusdam? Molestiae, tenetur. Magnam!
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live</Button>
                        </CardActions>
                        <CardMenu style={{color: '#000'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is React</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Ruby on Rails</Tab>
                    <Tab>React</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;