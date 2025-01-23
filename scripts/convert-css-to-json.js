const fs = require('fs');
const path = require('path');

const cssFilePath = path.resolve(__dirname, '../temp/variables.css');
const jsonFilePath = path.resolve(__dirname, '../cypress/variables.json');

const cssContent = fs.readFileSync(cssFilePath, 'utf8');

// Fonction pour extraire les variables CSS
function extractCssVariables(css) {
  const regex = /--([\w-]+):\s*([^;]+);/g;
  let matches;
  const variables = {};

  // Recherche de toutes les variables CSS dans le fichier
  while ((matches = regex.exec(css)) !== null) {
    const [ , name, value ] = matches;
    variables[name.trim()] = value.trim();
  }

  return variables;
}

// Extraire les variables CSS
const variables = extractCssVariables(cssContent);

// Convertir les variables en JSON
const jsonOutput = JSON.stringify(variables, null, 2);

// Sauvegarder dans un fichier JSON
fs.writeFileSync(jsonFilePath, jsonOutput, 'utf8');

console.log(`Variables extraites et sauvegardées dans ${jsonFilePath}`);
