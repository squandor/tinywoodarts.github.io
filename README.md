# TinyWoodArts.nl
This is the base website for the domain tinywoodsarts.nl

## Folders
- .github/workflows
- css
- js
- scripts
- images

## The basic idea of this project
The .html files are basic htmls but with a twist, inside album.html i make use of the lightbox library for the pictures and a list of files which are generated inside images.json

After every push to the main branche the workflow inside the .github folder wil launch an action to start the generate-images-json.js file to generate the images.json file based on the images directory. 
So the website will be updated automatically after every push or added picture inside the images folder. 
