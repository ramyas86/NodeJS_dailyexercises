const fs = require('fs')
const path_read = './data.json';
const path_write = './modifiedData.json';

const fileContents = fs.readFileSync('./input.txt', "utf8").toUpperCase()

fs.writeFileSync('./output.txt', fileContents);

//

const readJSON = fs.readFileSync(path_read, 'utf8');
const parsedData = JSON.parse(readJSON);
parsedData.map(element => {
    element.updatedAt = new Date().toISOString();
});

console.log(parsedData)

  fs.writeFileSync(path_write, JSON.stringify(parsedData), (err) => {
    if (err) {
      console.log('Failed to write updated data to file');
      return;
    }
    console.log('Updated file successfully');
  });
console.log(JSON.stringify(parsedData))
