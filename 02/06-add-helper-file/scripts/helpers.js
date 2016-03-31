let helpers = {
    prettyDate: function(utcDateString) {
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var d = new Date(utcDateString);
        var prettyDate = weekdays[d.getUTCDay()] + ' ' + months[d.getUTCMonth()] + ' ' + d.getUTCDate();
        return prettyDate;
    },
    storeDate: function(dateObject) {
        var dd = ('0' + dateObject.getUTCDate()).slice(-2);
        var mm = ('0' + (dateObject.getUTCMonth() + 1)).slice(-2);
        var yyyy = dateObject.getUTCFullYear();
        var dateString = yyyy + '-'+ mm + '-'+ dd;
        return dateString;
    }
}

export default helpers;