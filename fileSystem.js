// create a package.json file -->  npm init -y

// CRUD --> create, read, update, delete
const fs = require('fs')

// 1) create a file using fs module -->
// fs.writeFileSync('one.pdf' , 'hello how are you')
// fs.writeFileSync('trial.js' , 'let a = 10 \n let b=5 \n console.log(a+b)')

//2) read a file -->
// let ans = fs.readFileSync('one.pdf' , 'utf-8')
// console.log(ans)

//3) rename a file -->
// fs.renameSync('one.pdf' , 'two.pdf')

//4) add text to any existing file -->  append method 
// fs.appendFileSync('two.pdf', ' , this is an additional text')

//5) delete file -->
// fs.unlinkSync('two.pdf')

//6) create a folder --> 
fs.mkdirSync('pages');
