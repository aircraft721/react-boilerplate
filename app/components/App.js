import React, {Component} from 'react';
import {Hello} from './Hello.tsx';

export default class App extends Component {
    render(){
        return (
            <div>
                <p>Test</p>
                <Hello compiler="typescript" framework="react" />
            </div>
        )
    }
}