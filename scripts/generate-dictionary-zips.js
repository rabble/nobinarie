/**
 * This script generates dictionary zip files for download
 * It creates static placeholder dictionaries for build
 */

const fs = require('fs');
const path = require('path');

// Create necessary directories
const dictionaryDir = path.join(__dirname, '../public/dictionaries');
if (!fs.existsSync(dictionaryDir)) {
  fs.mkdirSync(dictionaryDir, { recursive: true });
  console.log('Created dictionaries directory');
}

// Create placeholder dictionary files
const placeholderDict = {
  name: 'Español Inclusivo',
  version: '1.0.0',
  description: 'Diccionario con términos inclusivos en español',
  words: [
    'amigue',
    'todes',
    'alumne',
    'profesore',
    'trabajadore'
  ]
};

// Write placeholder dictionary file
fs.writeFileSync(
  path.join(dictionaryDir, 'es_inclusive.json'),
  JSON.stringify(placeholderDict, null, 2)
);
console.log('Created placeholder dictionary file');

// Create a placeholder zip file
const createPlaceholderZip = () => {
  const zipContent = Buffer.from('UEsDBAoAAAAAAOZbO1cAAAAAAAAAAAAAAAAKAAAAZXNfaW5jbHVzaXZlLwAsADw6PC06PC06RXhhbXBsZQBQSwMECgAAAAAA5ls7VwAAAAAAAAAAAAAAABMAAABlc19pbmNsdXNpdmUvUkVBRE1FLm1kACwAPDo8LTo8LTpFeGFtcGxlAFBLAQI/AAoAAAAAAOZbO1cAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAgAAAAAAAAAGVzX2luY2x1c2l2ZS8AUEsBAj8ACgAAAAAA5ls7VwAAAAAAAAAAAAAAABMAAAAAAAAAAAAAAQAgAAAAMgAAAGVzX2luY2x1c2l2ZS9SRUFETUUubWQAUEsFBgAAAAACAAIAmAAAAHUAAAAAAA==', 'base64');
  
  fs.writeFileSync(
    path.join(dictionaryDir, 'es_inclusive.zip'),
    zipContent
  );
  console.log('Created placeholder zip file');
};

createPlaceholderZip();

// Create placeholder dictionary files for browser environment
const browserDictDir = path.join(__dirname, '../public/static/dictionaries');
if (!fs.existsSync(browserDictDir)) {
  fs.mkdirSync(browserDictDir, { recursive: true });
  console.log('Created browser dictionaries directory');
}

fs.writeFileSync(
  path.join(browserDictDir, 'es_inclusive.json'),
  JSON.stringify(placeholderDict, null, 2)
);
console.log('Created browser dictionary file');

console.log('Dictionary generation complete');