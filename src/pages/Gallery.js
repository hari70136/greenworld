import React, { useState } from 'react';
import './Gallery.css';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const allImages = [
  {
    src: '/tank1.jpg',
    caption: 'Model A - Compact Design',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model A - Compact Design. Please share more details.'
  },
  {
    src: '/tank2.jpg',
    caption: 'Model B - Compact Design',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model B - Compact Design. Please share more details.'
  },
  {
    src: '/tank3.jpg',
    caption: 'Model C - Dual Chamber',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model C - Dual Chamber. Please share more details.'
  },
  {
    src: '/tank4.jpg',
    caption: 'Model D - Advanced Filtration',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model D - Advanced Filtration. Please share more details.'
  },
  {
    src: '/tank5.jpg',
    caption: 'Model E - Space Saving',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model E - Space Saving. Please share more details.'
  },
  {
    src: '/tank6.jpg',
    caption: 'Model F - Eco-Friendly',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model F - Eco-Friendly. Please share more details.'
  },
  {
    src: '/tank7.jpg',
    caption: 'Model G - Innovative Design',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model G - Innovative Design. Please share more details.'
  },
  {
    src: '/tank8.jpg',
    caption: 'Model H - Advanced Technology',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model H - Advanced Technology. Please share more details.'
  },
  {
    src: '/tank9.jpg',
    caption: 'Model I - Next Gen Design',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model I - Next Gen Design. Please share more details.'
  },
  {
    src: '/tank10.jpg',
    caption: 'Model J - Ultimate Efficiency',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model J - Ultimate Efficiency. Please share more details.'
  },
  {
    src: '/tank11.jpg',
    caption: 'Model K - Compact Design',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model K - Compact Design. Please share more details.'
  },
  {
    src: '/tank12.jpg',
    caption: 'Model L - Compact Design',
    category: 'model',
    whatsappMessage: 'Hello Green World, I am interested in Model L - Compact Design. Please share more details.'
  },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredImages =
    selectedCategory === 'all'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <p>Explore Our Eco-Smart Septic Tank Models And Installations.</p>

      <div className="gallery-buttons">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('model')}>Models</button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="gallery-item">
  <img
    src={img.src}
    alt={img.caption}
    onClick={() => setLightboxIndex(index)}
  />
  <p className="caption">{img.caption}</p>

  {img.category === 'model' && img.whatsappMessage && (
    <a
      href={`https://wa.me/916301011077?text=${encodeURIComponent(img.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="quote-button"
    >
      Request Quote
    </a>
  )}
</div>

        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          mainSrc={filteredImages[lightboxIndex].src}
          nextSrc={filteredImages[(lightboxIndex + 1) % filteredImages.length].src}
          prevSrc={filteredImages[(lightboxIndex + filteredImages.length - 1) % filteredImages.length].src}
          onCloseRequest={() => setLightboxIndex(-1)}
          onMovePrevRequest={() =>
            setLightboxIndex((lightboxIndex + filteredImages.length - 1) % filteredImages.length)
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
          }
          imageCaption={filteredImages[lightboxIndex].caption}
        />
      )}
    </div>
  );
}

export default Gallery;

