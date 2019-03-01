import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }


handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state);
}




    render() {
        return (
            <div className="card">
            <h1>{this.state.color}</h1>
                { Input('Color', this.state.color, this.handleInputChange, 'color' ) }
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun')}
            </div>
        )
    }
}


export default Card;
