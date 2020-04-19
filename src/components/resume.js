import React from 'react';
import AvatarImage from '../avatar-obi.png'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} className="">
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={AvatarImage}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>
                            Daniel Ruiz
                        </h2>
                        <h4 style={{color: 'grey'}}>
                            Product Manager
                        </h4>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellat 
                            cupiditate in quasi nulla maiores doloremque, dolorum quod nemo numquam 
                            dolor tempore voluptas obcaecati dolores fugiat dolore deserunt at perferendis.
                        </p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                        <h5>Address</h5>
                        <p>
                            1 Hacker Way Menlo Park 94025
                        </p>


                        <h5>Phone</h5>
                        <p>
                            661 714-2191
                        </p>


                        <h5>Email</h5>
                        <p>
                            danielruizgc8@gmail.com
                        </p>

                        <h5>website</h5>
                        <p>
                            www.danielruiz.io
                        </p>

                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="University of California, Merced"
                            schoolDescription="Lorem Ipsum"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2015}
                            endYear={2016}
                            jobName="Junior Operations Analyst"
                            jobDescription="Lorem Ipsum"
                        />
                        <Experience 
                            startYear={2016}
                            endYear={2017}
                            jobName="Operations Analyst (Lead)"
                            jobDescription="Lorem Ipsum"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="Ruby on Rails"
                        />
                        <Skills 
                            skill="HTML/CSS"
                        />
                        <Skills 
                            skill="Javascript"
                        />
                        <Skills 
                            skill="React"
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;