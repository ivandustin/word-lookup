#!/usr/bin/env node
const package      = require('./package.json')
const path         = require('path')
const fs           = require('fs')
const argparse     = require('argparse')
const read         = require('./src/read')
const create_index = require('./src/index')
const find         = require('./src/find')
const save         = require('./src/save')
const output       = 'result.json'

function main() {
    let args               = parse()
    let collation_filepath = args.c
    let words_filepath     = args.file
    let collation          = read(collation_filepath)
    let words              = read(words_filepath)
    let index              = create_index(collation)
    let result             = find(words, index)
    save(output, result)
    console.log(output)
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('-c',              { help: 'collation file' })
    parser.add_argument('file',            { help: 'json array of words' })
    return parser.parse_args()
}

main()
