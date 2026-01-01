import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BackButton from '../components/BackButton';
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
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Hardcoded gallery images with local imports
  const galleryImages = [
    { id: 1, src: m1, alt: t('gallery.images.psap1', 'Public Safety Answering Point - Control Room') },
    { id: 2, src: m2, alt: t('gallery.images.psap2', 'Emergency Response Center Operations') },
    { id: 3, src: m3, alt: t('gallery.images.psap3', 'Call Center Emergency Dispatch') },
    { id: 4, src: m4, alt: t('gallery.images.psap4', 'Public Safety Communication Hub') },
    { id: 5, src: m5, alt: t('gallery.images.psap5', 'Emergency Services Coordination Center') },
    { id: 6, src: m6, alt: t('gallery.images.psap6', 'Crisis Response Command Center') },
    { id: 7, src: m7, alt: t('gallery.images.psap7', 'Public Safety Monitoring Station') },
    { id: 8, src: m8, alt: t('gallery.images.psap8', 'Emergency Call Processing Center') },
    { id: 9, src: m9, alt: t('gallery.images.psap9', 'Public Safety Operations Center') },
    { id: 10, src: m10, alt: t('gallery.images.psap10', 'Emergency Response Dispatch Hub') },
    { id: 11, src: m11, alt: t('gallery.images.psap11', 'Public Safety Answering Point Facility') }
  ];

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
      <BackButton />
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
              {/* <p>{selectedImage.id} of {galleryImages.length}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;