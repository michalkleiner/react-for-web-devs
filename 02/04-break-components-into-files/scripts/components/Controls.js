import React from 'react';

var Controls = React.createClass({
    render: function() {
        return (
            <ul>
                <li><a className="button" href="./next">Next</a></li>
                <li><a className="button" href="./prev">Prev</a></li>
                <li><a className="button" href="./food">Food</a></li>
                <li><a className="button" href="./exercise">Exercise</a></li>
                <li><a className="button" href="./more">More</a></li>
            </ul>
        )
    }
});

export default Controls;