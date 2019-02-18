import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

class TestComponent extends React.Component {
    render() {
        const { incrementCounter, decrementCounter, data } = this.props;
        return (
            <div>
                <h3>{data}</h3>
                <Button onClick={incrementCounter} color="green" content="Increment" />
                <Button onClick={decrementCounter} color="red" content="Decrement" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.test.data
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(TestComponent);