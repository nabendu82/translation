import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import './App.css';

class App extends Component {
    state = { language: 'english' };

    onLangChange = (lang) => {
        this.setState({ language: lang });
    }

    render() {
        return (
            <div className="main__container">
               <div className="lang__flags">
                <span>Select a language :</span>
                <span onClick={() => this.onLangChange('english')}>🇺🇸</span>
                <span onClick={() => this.onLangChange('hindi')}>🇮🇳</span>
               </div>
               <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
               </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;
