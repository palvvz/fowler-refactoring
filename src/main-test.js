const statement = require('./statement');
const fs=require('fs');


main();

function main() {
const invoice = JSON.parse(fs.readFileSync('test/invoice.json', 'utf8'));
  const plays = JSON.parse(fs.readFileSync('test/plays.json', 'utf8'));
    let res = statement(invoice, plays);
    console.log(res);
}




