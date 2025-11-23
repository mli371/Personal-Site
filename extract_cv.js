const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('CV_NFT_LLM.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('cv_text.txt', data.text);
    console.log('Text written to cv_text.txt');
});
