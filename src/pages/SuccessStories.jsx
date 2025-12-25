import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import api from '../utils/api';
import "../styles/SuccessStories.css"
import storyimg from '../assets/Success.png';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "absolute"
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute"
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="story-img carousel-img"
          alt="Success Story"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={(e) => { e.stopPropagation(); paginate(-1); }}>‹</button>
            <button className="carousel-btn next" onClick={(e) => { e.stopPropagation(); paginate(1); }}>›</button>
          </div>
          <div className="carousel-dots">
              {images.map((_, idx) => (
                  <span 
                      key={idx} 
                      className={`dot ${idx === currentIndex ? 'active' : ''}`}
                      onClick={(e) => {
                          e.stopPropagation();
                          setDirection(idx > currentIndex ? 1 : -1);
                          setCurrentIndex(idx);
                      }}
                  />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function SuccessStories() {
  const [expandedStories, setExpandedStories] = useState({});
  const [stories, setStories] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchStories = async () => {
        try {
            const data = await api.get('/public/stories');
            setStories(data);
        } catch (error) {
            console.error('Failed to fetch stories', error);
        }
    };
    fetchStories();
  }, []);

  const toggleExpanded = (index) => {
    setExpandedStories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="success-container">
      {/* Animated background orbs matching Hero section */}
      <div className="success-orb success-orb-1"></div>
      <div className="success-orb success-orb-2"></div>
      <div className="success-orb success-orb-3"></div>

      <div className="success-content-wrapper">
        <div className="success-header">
          <h1 className="success-page-title">{t('successStories.title')}</h1>
          <p className="success-subtitle">
            {t('successStories.subtitle', 'Witness the swift and effective response of our Emergency Response Vehicles across Telangana, bringing safety and justice to our communities through rapid action and dedication.')}
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => {
            const isExpanded = expandedStories[index];
            const shouldTruncate = story.text.length > 150;
            const images = story.images && story.images.length > 0 ? story.images : [storyimg, storyimg, storyimg];
            
            return (
            <div key={story._id || index} className="story-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="story-card-inner">
                <div className="story-image-wrapper">
                  <ImageCarousel images={images} />
                  <div className="story-badge">
                    <span className="badge-icon">⚡</span>
                    <span className="badge-text">{t('successStories.rapidResponse', 'Rapid Response')}</span>
                  </div>
                </div>

                <div className="story-content">
                  <h2 className="story-title">
                    {story.district} <span className="story-id">{story.id}</span>
                  </h2>

                  <div className="story-meta">
                    <div className="story-date">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M11 0a1 1 0 011 1v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h1V1a1 1 0 112 0v1h4V1a1 1 0 011-1zM3 6v8h10V6H3z" />
                      </svg>
                      {story.date}
                    </div>
                    <div className="story-time">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm1 2v4.586l2.707 2.707-1.414 1.414L7 9.414V4h2z" />
                      </svg>
                      {story.time}
                    </div>
                  </div>

                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className={`story-text ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded ? story.text : truncateText(story.text)}
                  </p>

                  <div className="story-footer">
                    <p className="posted-by">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a4 4 0 100 8 4 4 0 000-8zm0 10c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
                      </svg>
                      {t('successStories.postedBy', 'Posted by')}: <span>{story.postedBy || 'tg_user'}</span>
                    </p>
                    {shouldTruncate && (
                      <button 
                        className="more-btn" 
                        onClick={() => toggleExpanded(index)}
                      >
                        {isExpanded ? t('successStories.readLess', 'Read Less') : t('successStories.readMore', 'Read More')}
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="currentColor"
                          className={isExpanded ? 'rotated' : ''}
                        >
                          <path d="M8 0l8 8-8 8V0z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  )
}
