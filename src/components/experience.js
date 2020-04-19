import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends React.Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>
                            {this.props.startYear} - {this.props.endYear}
                        </p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px'}}>
                            {this.props.jobName}
                        </h4>
                        <p style={{}}>
                            {this.props.jobDescription}
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Experience;