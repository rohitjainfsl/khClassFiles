import path from 'path'

// console.log(path.parse('C\\xampp\\htdocs\\KH-FSD\\path.mjs'))
// console.log(path.parse('C\\xampp\\htdocs\\KH-FSD\\path.mjs').name)
// console.log(path.parse('C\\xampp\\htdocs\\KH-FSD\\path.mjs').base)
// console.log(path.parse('C\\xampp\\htdocs\\KH-FSD\\path.mjs').dir)


const filePath = path.format({dir: 'xampp\\htdocs\\KH-FSD', base: 'path.mjs', ext: '.mjs', name: 'path', root: '\\'})

console.log(filePath);