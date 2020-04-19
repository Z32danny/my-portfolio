import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12} className="">
                        <div style={{display: 'flex'}}>
                            {this.props.skill}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Skills;