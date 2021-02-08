function processEvent(event) {
    if (event.properties && event.properties['$time']) {
        const timestamp = event.properties['$time'] * 1000
        event.properties['day_of_the_week'] = new Date(timestamp).toLocaleDateString('en-GB', { weekday: 'long' })
        const date = new Date(timestamp).toLocaleDateString('en-GB').split('/')
        event.properties['day'] = Number(date[0])
        event.properties['month'] = Number(date[1])
        event.properties['year'] = Number(date[2])
    }

    return event
}

module.exports = {
    processEvent
}
