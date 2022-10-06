const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/text.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/subfolder/result-sync.txt', 
`here is the result of the two texts : ${first}, ${second}`, {flag: 'a'})