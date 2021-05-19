function index(collation) {
    let index = {}
    collation.forEach(function(verse) {
        let { manuscripts } = verse
        manuscripts.forEach(function(manuscript) {
            let { words } = manuscript
            words = words.map(identity)
            words.forEach(function(word) {
                if (!index[word])
                    index[word] = []
                index[word].push(verse)
            })
        })
    })
    return index
}

function identity(value) {
    return value
}

module.exports = index
