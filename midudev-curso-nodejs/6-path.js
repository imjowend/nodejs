const path = require('node:path');

// unir rutas con path.join
console.log(path.sep);

const filePath = path.join('path','package')

console.log(filePath)

const base = path.basename('/tmp/secret-file/password.txt')

console.log(base)

const extension = path.extname('image.jpg')

console.log(extension)