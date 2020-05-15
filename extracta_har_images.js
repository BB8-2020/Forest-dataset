
  @author Selene Blok selene.blok@gmail.com
  @license MIT
  
  This file requires Node.JS to run.
  This file requires that your output-dir is already created.
 
  @example
  
  # This will extract all JPG images from my-file.har to output-dir that originated from example.com
  node extract_har_images.js .my-file.har .output-dir example.com
 

const fs = require('fs');
const launchArgs = process.argv.slice(2);
const file = JSON.parse(fs.readFileSync(launchArgs[0])).log;

let count = 1;
for (const entry of file.entries) {
    if (entry.request.url.includes(launchArgs[2])) {
         ensure output directory exists before running!
        fs.writeFileSync(`${launchArgs[1]}${count}.jpg`, entry.response.content.text, 'base64');
        count++;
    }
}

 !NOTE we didn't find any files
if (count == 1) {
    console.error(`Couldn't find files with URL match, does your HAR contain the url you searched for`);
}

console.log(`Grabbed ${count - 1} files`);