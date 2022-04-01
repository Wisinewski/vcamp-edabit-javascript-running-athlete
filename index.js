function runningAthlete(actions, route) {
    const reactions = {
        '_': action => action === 'run' ? '_' : 'x',
        '|': action => action === 'jump' ? '|' : '/'
    }
    return route
        .split('')
        .map((obstacle, index) => reactions[obstacle](actions[index]))
        .join('')
}