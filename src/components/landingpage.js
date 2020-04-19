import React from 'react';
import { Grid, Cell } from 'react-mdl';
import AvatarImage from '../avatar-obi.png'

class Landing extends React.Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={AvatarImage} alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Product Manager</h1>
                        <hr />
                            <p> SQL | Ruby on Rails | HTML/CSS | Javascript | React </p>

                            <div className="social-links">
                                { /* LinkedIn */ }
                                <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" rel="noopener noreferrer" aria-hidden="true"></i>
                                </a>
                                { /* GitHub */ }
                                <a href="https://github.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" rel="noopener noreferrer" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;