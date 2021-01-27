function processEvent(event) {
    if (event.properties && event.properties['$time']) {
        const timestamp = event.properties['$time']
        event.properties['day_of_the_week'] = new Date(timestamp).toLocaleDateString('en-GB', { weekday: 'long' })
        const date = new Date(timestamp).toLocaleDateString('en-GB').split('/')
        event.properties['day'] = date[0]
        event.properties['month'] = date[1]
        event.properties['year'] = date[2]
    }

    return event
}
