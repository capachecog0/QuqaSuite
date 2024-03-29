import React, { Component } from 'react';

interface ILocalState {
    currentCount: number;
}

export class Counter extends Component<{}, ILocalState> {
    static displayName = Counter.name;
    state: ILocalState = { currentCount: 0 };

    incrementCounter = () => {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}
