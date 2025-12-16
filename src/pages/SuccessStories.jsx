import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/SuccessStories.css";

export default function SuccessStories() {
  const { t } = useTranslation();
  const stories = t('successStories.stories', { returnObjects: true });

  return (
    <div className="success-container">
      <h1 className="page-title">{t('successStories.title')}</h1>

      {stories.map((story, index) => (
        <div key={index} className="story-card">
          <img
            src="./src/assets/Success.png"
            alt="Success"
            className="story-img"
          />

          <div className="story-content">
            <h2>
              {story.district} {story.id}
            </h2>

            <div className="stars">★★★★★</div>

            <p>
              <strong>{t('successStories.dateLabel')}</strong> {story.date} at {story.time}
            </p>

            <p>{story.text}</p>

            <p className="posted-by">
              <i>{t('successStories.postedBy')}</i>
            </p>
            
          </div>
          
        </div>
      ))}
      <hr></hr>
    </div>
  );
}
