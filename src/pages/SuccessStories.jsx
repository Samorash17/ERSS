import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import { getLocalizedData } from '../utils/i18nHelper';
import BackButton from '../components/BackButton';
import "../styles/SuccessStories.css"
import storyimg from '../assets/Success.png';

export default function SuccessStories() {
  const [expandedStories, setExpandedStories] = useState({});
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const storyRefs = useRef({});
  const { t, i18n } = useTranslation();

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const storiesPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(stories.length / storiesPerPage);

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
    setExpandedStories(prev => {
      const newState = {
        ...prev,
        [index]: !prev[index]
      };
      
      // If expanding, scroll to the story card after content expands
      if (!prev[index]) {
        setTimeout(() => {
          const storyElement = storyRefs.current[index];
          if (storyElement) {
            storyElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            });
          }
        }, 350); // Increased delay to allow for content expansion
      }
      
      return newState;
    });
  };

  // Check if text needs truncation (more than 4 lines worth of content)
  const needsTruncation = (text) => {
    // More accurate estimation: assuming ~60 characters per line at current font size and line height
    return text.length > 240; // Approximately 4 lines worth of text (60 chars × 4 lines)
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const getCurrentStories = () => {
    const startIndex = currentPage * storiesPerPage;
    return stories.slice(startIndex, startIndex + storiesPerPage);
  };

  return (
    <div className="success-container">
      <BackButton />
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

        <div className="stories-carousel-wrapper">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button className="stories-nav-btn prev-btn" onClick={prevPage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button className="stories-nav-btn next-btn" onClick={nextPage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </>
          )}

          <div className="stories-grid">
            {getCurrentStories().map((story, index) => {
              const globalIndex = currentPage * storiesPerPage + index;
              const isExpanded = expandedStories[globalIndex];
              const storyText = getLocalizedData(story.text, i18n.language);
              const shouldShowReadMore = needsTruncation(storyText);
              const storyImage = story.imageUrl || storyimg;
              
              return (
              <div 
                key={story._id || globalIndex} 
                className="story-card" 
                style={{ animationDelay: `${index * 0.15}s` }} 
                ref={el => storyRefs.current[globalIndex] = el}
              >
                <div className={`story-card-inner ${isExpanded ? 'expanded' : ''}`}>
                  <div className="story-image-wrapper">
                    <img src={storyImage} className="story-img" alt="Success Story" />
                    <div className="story-badge">
                      <span className="badge-icon">⚡</span>
                      <span className="badge-text">{t('successStories.rapidResponse', 'Rapid Response')}</span>
                    </div>
                  </div>

                  <div className="story-content">
                    <h2 className="story-title">
                      {getLocalizedData(story.district, i18n.language)} <span className="story-id">{story.id}</span>
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
                      {getLocalizedData(story.text, i18n.language)}
                    </p>

                    <div className="story-footer">
                      <p className="posted-by">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0a4 4 0 100 8 4 4 0 000-8zm0 10c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
                        </svg>
                        {t('successStories.postedBy', 'Posted by')}: <span>{story.postedBy || 'tg_admin'}</span>
                      </p>
                      {shouldShowReadMore && (
                        <button 
                          className="more-btn" 
                          onClick={() => toggleExpanded(globalIndex)}
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

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="stories-pagination">
            {isMobile ? (
              // Mobile: Show dots for all individual stories
              stories.map((_, index) => (
                <span
                  key={index}
                  className={`pagination-dot ${index === currentPage ? 'active' : ''}`}
                  onClick={() => goToPage(index)}
                />
              ))
            ) : (
              // Desktop: Show dots for pages of 3 stories
              Array.from({ length: totalPages }, (_, index) => (
                <span
                  key={index}
                  className={`pagination-dot ${index === currentPage ? 'active' : ''}`}
                  onClick={() => goToPage(index)}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
