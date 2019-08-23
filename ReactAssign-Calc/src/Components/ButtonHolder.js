import React, { Component } from 'react'



class ButtonHolder extends Component {



    constructor() {
        super();
        this.state = {
            numbers: [{ val: 'Rad', class: 'button' }, { val: 'Deg', class: 'button' },

            { val: 'x', class: 'button' }, { val: '(', class: 'button' }, { val: ')', class: 'button' },
            { val: '%', class: 'button' }, { val: 'AC', class: 'button' }, { val: 'Inv', class: 'button' },
            { val: 'Sin', class: 'button' }, { val: 'ln', class: 'button' }, { val: 7, class: 'buttonNo' },
            { val: 8, class: 'buttonNo' }, { val: 9, class: 'buttonNo' }, { val: '/', class: 'button' },
            { val: 'π', class: 'button' }, { val: 'cos', class: 'button' }, { val: 'log', class: 'button' },
            { val: 4, class: 'buttonNo' }, { val: 5, class: 'buttonNo' }, { val: 6, class: 'buttonNo' },
            { val: 'x', class: 'button' }, { val: 'e', class: 'button' }, { val: 'tan', class: 'button' },
            { val: '√', class: 'button' }, { val: 1, class: 'buttonNo' }, { val: 2, class: 'buttonNo' },
            { val: 3, class: 'buttonNo' }, { val: '-', class: 'button' }, { val: 'Ans', class: 'button' },
            { val: 'Exp', class: 'button' }, { val: 'x P(y)', class: 'button' }, { val: 0, class: 'buttonNo' },
            { val: '.', class: 'buttonNo' }, { val: '=', class: 'button' }, { val: '+', class: 'button' }

            ],
                

        }
    }
     
    
    render() {
               return (<div class='ButtonHolder'>

            {this.state.numbers.map((number) =>

                <button className={number['class']} type='button' value={number['val']} 
                
                onClick={(e)=> this.props.onClick(number['val'])} > {number['val']} </button>

            )}
        </div>);
    }
}

export default ButtonHolder;