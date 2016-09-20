function readStorage (name) {
    let selected = localStorage.getItem('selected')
    if (selected) {
        selected = JSON.parse(selected)
    } else {
        selected = []
    }
    return selected
}

module.exports = readStorage