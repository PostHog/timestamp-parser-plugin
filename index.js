function processEvent(event) {
    if (event.properties && event.properties['$time']) {
        const timestamp = isNaN(event.properties['$time']) ? event.properties['$time']: event.properties['$time'] * 1000
        let date = new Date(timestamp)
        event.properties['day_of_the_week'] = date.toLocaleDateString('en-GB', { weekday: 'long' })
        date = date.toLocaleDateString('en-GB').split('/')
        event.properties['day'] = date[0]
        event.properties['month'] = date[1]
        event.properties['year'] = date[2]
    }

    return event
}

module.exports = {
    processEvent
}
