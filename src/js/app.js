import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hey React
                <img src={ keenImage } alt='keenImage' />
            </div>
        )
    }
}

render(<Hello />, document.getElementById('app'));