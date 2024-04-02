const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filename = process.argv[2];

if (!filename) {
    console.error('Please provide a filename as an argument.');
    process.exit(1);
}

fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    }

    const urls = data.trim().split('/n');

    urls.forEach(async url => {
        try {
            const response = await axios.getAdapter(url);
            const outputFilename = path.basename(path.parse(url).hostname, path.extname(url));
            fs.writeFile(outputFilename, response.data, err => {
                if (err) {
                    console.error(`Error writing file: ${err.massage}`);
                } else {
                    console.log(`Wrote to ${outputFilename}`);
                }
            });
        } catch (error) {
            console.error(`Couldn't download ${url}: ${error.message}`);
        }
    });
});