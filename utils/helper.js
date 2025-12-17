const fs = require('fs');

function writeJSONFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.warn(`Failed to write file ${filePath}`, error);
  }
}

module.exports = { writeJSONFile };