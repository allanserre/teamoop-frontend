const fs = require('fs');
const path = require('path');

const scssFilePath = path.resolve(__dirname, '../src/styles/variables.scss');

function extractVariables(content) {
  const variableRegex = /\$([-\w]+):/g;
  const rootVariableRegex = /--([-\w]+):/g;

  const declaredVars = [...content.matchAll(variableRegex)].map(match => match[1]);
  const rootVars = [...content.matchAll(rootVariableRegex)].map(match => match[1]);

  return { declaredVars, rootVars };
}

function addMissingVariables(content) {
  const { declaredVars, rootVars } = extractVariables(content);

  let newVars = '';
  let changesMade = false;

  declaredVars.forEach((varName, index) => {
    const cssVarName = varName.replace(/_/g, '-');
    if (!rootVars.includes(cssVarName)) {
      newVars += `  --${cssVarName}: #{$${varName}};`;
      if ( index < declaredVars.length - 1 ) {
        newVars += "\n";
      }
      changesMade = true;
    }
  });

  if (changesMade) {
    content = content.replace(/(:root \{[\s\S]*{[^}]*};)/, `$1\n${newVars}`);
  }
  return content;
}

fs.readFile(scssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la leture du fichier SCSS:', err);
    return;
  }

  const updatedContent = addMissingVariables(data);

  fs.writeFile(scssFilePath, updatedContent, 'utf8', err => {
    if (err) {
      console.error('Erreur lors de la création du fichier SCSS', err);
    } else {
      console.log('Le fichier SCSS a été mis à jour avec succès avec les variables manquantes.');
    }
  });
});
