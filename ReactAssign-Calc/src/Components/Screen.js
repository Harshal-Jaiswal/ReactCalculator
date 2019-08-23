import React, { Component } from 'react'
import InputScreen from './InputScreen'
import '../Style/calc.css'
import ButtonHolder from './ButtonHolder'
import * as math from 'mathjs'

class Screen extends Component {
    constructor() {
        super();


        this.state = {

            result: ''
        };
    }

    onClick = button => {
        console.log(button)
        if (button === "=" || button === "Ans") {
            this.calculate()
        }

        else if (button === "AC") {
            this.reset()
        }

        else if (button === "x") {
            button = button.replace('x', '*')
            this.setState({
                result: this.state.result + button

            })
        }

        else if (button === "Sin") {

            this.setState({
                result: 'sin(' + this.state.result

            })
        }

        else if (button === "cos") {
            this.setState({
                //eslint-disable-next-line
                result: 'cos(' + this.state.result

            })
        }

        else if (button === "tan") {
            this.setState({

                result: 'tan(' + this.state.result

            })
        }
        else if (button === "√") {
            this.setState({

                result: 'sqrt(' + this.state.result

            })
        }

        else if (button === "log") {
            this.setState({

                //eslint-disable-next-line
                result: 'log10(' + this.state.result

            })
        }

        else if (button === "ln") {
            this.setState({

                result: 'log(' + this.state.result

            })
        }

        else if (button === "x^y") {
            this.setState({


                result: this.state.result + '^'

            })
        }

        else if (button === "π") {
            this.setState({

                //eslint-disable-next-line
                result: this.state.result + 'pi'

            })
        }

        else if (button === "e") {
            this.setState({

                //eslint-disable-next-line
                result: this.state.result + 'e'

            })
        }

        else if (button === "EXP") {
            this.setState({

                //eslint-disable-next-line
                result: 'exp(' + this.state.result

            })
        }

        else if (button === "x!") {
            this.setState({
                //eslint-disable-next-line
                result: this.state.result + '!'

            })
        }

        else if (button === "Deg") {
            this.degree(this.state.result)
        }

        else if (button === "Inv") {
            console.log(this.state)
            this.setState({

                //eslint-disable-next-line
                result: 'inv(' + this.state.result

            })
        }

        else if (button === "Rad") {
            this.radian(this.state.result)
        }


        else {
            this.setState({
                result: this.state.result + button
            })

        }
    };

    calculate = () => {
        try {
            console.log(this.state.result)
            this.setState({
                //eslint-disable-next-line
                result: math.evaluate(this.state.result)

            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""

        })
    };

    degree = (ev) => {
        var deg = (ev * (180 / Math.PI))
        this.setState({
            result: deg
        })
    }

    radian = (ev) => {
        var deg = (ev * (Math.PI / 180))
        this.setState({
            result: deg
        })
    }

    render() {
        return (<div className='Screen'>
            <InputScreen result={this.state.result} />
            <ButtonHolder onClick={this.onClick} />
        </div>);
    }
}

export default Screen;