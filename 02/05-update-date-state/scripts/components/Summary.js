import React from 'react';

var Summary = React.createClass({
    render: function() {
        var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var d = new Date(this.props.date);
        var prettyDate = weekdays[d.getUTCDay()] + ' ' + months[d.getUTCMonth()] + ' ' + d.getUTCDate()
        return (
            <h1>
                <div className="date">{prettyDate}</div>
                <div className="calories">{this.props.calories}</div>
                <div className="label">calories left</div>
            </h1>
        )
    }
});

export default Summary;