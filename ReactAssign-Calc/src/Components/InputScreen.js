import React, { Component } from 'react'
import '../Style/calc.css'

class InputScreen extends Component {
    constructor() {
       super();
        }
    render() {
        let {result}=this.props
        return (<div > 
                 <input className='InputScreen' type="text" value={result} readOnly />
                </div>);
    }
}

export default InputScreen;