function find(words, index) {
    return words.map(function(word) {
        let verses = index[word]
        let count  = verses.length
        verses     = verses.map(function(item) {
            let { book, chapter, verse, manuscripts } = item
            manuscripts = manuscripts.map(function(manuscript) {
                let { name, words } = manuscript
                let position = words.filter(identity).indexOf(word) + 1
                return { name, position }
            }).filter(item => item.position)
            return { book, chapter, verse, manuscripts }
        })
        return { word, count, verses }
    })
}

function identity(value) {
    return value
}

module.exports = find
