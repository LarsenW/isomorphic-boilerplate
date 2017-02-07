import React, {Component} from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import ReduxCounter from './CounterContainer';

class CounterPage extends Component {
    render() {
        return (
            <div>
                <PageHeader>Counters</PageHeader>
                <h3>State Counter</h3>
                <ReduxCounter/>
            </div>
        );
    }
}

export default CounterPage;