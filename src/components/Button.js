import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

    render() {
        this.renderText = (text) => {
            const displayText = text === 'english' ? 'Submit' : 'जमा करें';
            return displayText
        }

    return (
        <LanguageContext.Consumer>
            {(props) => <button>{this.renderText(props)}</button>
            }
        </LanguageContext.Consumer>

        )
    }
}

export default Button;