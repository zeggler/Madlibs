import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }


handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state);
}




    render() {

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'color', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'color', state: this.state.celebOne, name: 'celebOne'},
           
            {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'}
        ]  
    


        return (
            <div className="card">
                {
                 inputData.map(data => Input( (data), this.handleInputChange ))
                }
            </div>
        )
    }
}


export default Card;
