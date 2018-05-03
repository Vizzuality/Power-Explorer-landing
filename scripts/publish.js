const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, '../dist', 'CNAME'), "powerexplorer.org", (err) => {
  if (err) {
    console.error('Error: %s', err);
  }
});
ghpages.publish(path.join(__dirname, '../dist'), (err) => {
  if (err) {
    console.error('Error: %s', err);
  }
});
