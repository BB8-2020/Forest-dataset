const fs = require('fs');
const file = JSON.parse(fs.readFileSync('./localhost.har')).log;


let count = 1;
const images = [];
for (const entry of file.entries) {
    if (count == 1)
        console.log(entry.response.content.text)
    if (entry.request.url.includes('arcgisonline.com')) {
        // ensure output directory exists before running!
        fs.writeFileSync(`output/${count}.jpg`, entry.response.content.text, 'base64');
        count++;
    }
}

console.log(`Grabbed ${count} files`);