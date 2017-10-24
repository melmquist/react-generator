import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
import '../css/test.scss'
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hey React
                <img src={ keenImage } alt='keenImage' />
                <div className="testy">
                </div>
            </div>
        )
    }
}

render(<Hello />, document.getElementById('app'));