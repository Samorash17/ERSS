import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import { getLocalizedData } from '../utils/i18nHelper';
import '../styles/ImageGallery.css';

// Import all gallery images
import m1 from '../assets/gallery/m1.png';
import m2 from '../assets/gallery/m2.png';
import m3 from '../assets/gallery/m3.png';
import m4 from '../assets/gallery/m4.png';
import m5 from '../assets/gallery/m5.png';
import m6 from '../assets/gallery/m6.png';
import m7 from '../assets/gallery/m7.png';
import m8 from '../assets/gallery/m8.png';
import m9 from '../assets/gallery/m9.png';
import m10 from '../assets/gallery/m10.png';
import m11 from '../assets/gallery/m11.png';

const ImageGallery = () => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await api.get('/public/gallery');
        // Map API data to component structure if needed, or use directly
        // Assuming API returns array of objects with { _id, title, imageUrl }
        const formattedImages = data.map(img => ({
          id: img._id,
          src: img.imageUrl,
          alt: getLocalizedData(img.title, i18n.language)
        }));
        setGalleryImages(formattedImages);
      } catch (error) {
        console.error('Failed to fetch gallery', error);
      }
    };
    fetchGallery();
  }, [i18n.language]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="image-gallery-container">
      {/* Animated background elements */}
      <div className="gallery-background">
        <div className="gallery-gradient-orb gallery-gradient-orb-1"></div>
        <div className="gallery-gradient-orb gallery-gradient-orb-2"></div>
        <div className="gallery-grid-pattern"></div>
      </div>

      <div className="gallery-header">
        <h1 className="gallery-title">
          <span className="gallery-title-highlight">{t('gallery.title', 'Image Gallery')}</span>
        </h1>
        <p className="gallery-subtitle">
          {t('gallery.subtitle', 'Explore our collection of emergency response activities and achievements')}
        </p>
      </div>

      <div className="masonry-grid">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`masonry-item item-${(index % 4) + 1}`}
            onClick={() => openModal(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              loading="lazy"
              className="masonry-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <p className="image-title">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image viewing */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button 
              className="modal-nav modal-prev" 
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="modal-image"
            />
            <button 
              className="modal-nav modal-next" 
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
            <div className="modal-info">
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.id} of {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;