fetch('images.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery-container');

    images.forEach(image => {
      const link = document.createElement('a');
      link.href = `images/${image.filename}`;
      link.setAttribute('data-lightbox', 'album');
      link.setAttribute('data-title', image.title);

      const img = document.createElement('img');
      img.src = `images/${image.filename}`;
      img.alt = image.title;

      link.appendChild(img);
      gallery.appendChild(link);
    });
  })
  .catch(error => console.error('Fout bij het laden van afbeeldingen:', error));
