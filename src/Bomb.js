// your Bomb code here!
import { render } from "enzyme";
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return this.state.secondsLeft === 0 ? "Boom!" : 
        (
            <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
            
        
    }
}
