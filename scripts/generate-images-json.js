const fs = require('fs');
const path = require('path');

// Map met afbeeldingen
const imagesDir = path.join(__dirname, '..', 'images');
// Uitvoerbestand
const outputFile = path.join(__dirname, '..', 'images.json');

// Lees alle bestanden in imagesDir
const files = fs.readdirSync(imagesDir);

// Filter alleen afbeeldingen (jpg, jpeg, png, gif)
const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

// Maak JSON array met filename en een titel gebaseerd op bestandsnaam
const images = imageFiles.map(filename => {
  // Titel: bestandsnaam zonder extensie, underscores/spaties vervangen door spaties, hoofdletters aan begin
  let title = filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ');
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return { filename, title };
});

// Schrijf naar images.json
fs.writeFileSync(outputFile, JSON.stringify(images, null, 2), 'utf8');

console.log(`images.json gegenereerd met ${images.length} afbeeldingen.`);
