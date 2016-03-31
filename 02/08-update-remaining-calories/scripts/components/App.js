import React from 'react';
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import u from '../helpers';

var App = React.createClass({
    getInitialState: function() {
        return {
            calories: 0,
            date: '2016-01-05',
            entries: {}
        }
    },
    deleteEntry: function(key) {
        delete this.state.entries[key];
        this.setState({entries : this.state.entries});
    },
    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        this.state.date = u.storeDate(date);
        this.state.calories = u.caloriesRemaining(this.state.entries, this.state.date);
        this.setState({
            calories: this.state.calories,
            date : this.state.date
        });
    },
    componentDidMount: function() {
        var entries = require('../entries')
        var calories = u.caloriesRemaining(entries, this.state.date);
        this.setState({
            calories: calories,
            entries: entries
        });
    },
    render: function() {
        return (
            <section className="home">
                <Summary date={this.state.date} calories={this.state.calories} />
                <Controls setDate={this.setDate} />
                <EntryTable
                    date={this.state.date}
                    entries={this.state.entries}
                    deleteEntry={this.deleteEntry} />
            </section>
        )
    }
});

export default App;