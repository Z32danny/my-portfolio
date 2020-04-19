import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    
                    <Cell col={6}>
                        <h2>Daniel Ruiz</h2>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                            alt="avatar"
                            style={{height: '250px'}} 
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, cumque cum. 
                            Numquam eius pariatur, cupiditate rerum deserunt vitae. Exercitationem animi 
                            quia iusto nihil debitis inventore autem dolorum aliquid atque quae?
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Montserrat'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (661) 714-2191
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Montserrat'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        danielruizgc8@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Contact;