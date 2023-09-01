///Command line: node fetcher.js http://www.example.edu/ ./index.html


const request = require('request');
const fs = require('fs');

const inputUrl = process.argv.slice(2);
//console.log(inputUrl);

request(inputUrl[0], (error, response, body) => {
  const content = error + response + body;
  fs.writeFile(inputUrl[1], content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(`Downloaded and saved ${content.length} bytes to ./index.html`);
  })
  
})

//

/*console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.*/



/*const fs = require('fs');

fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return data;
  });*/

