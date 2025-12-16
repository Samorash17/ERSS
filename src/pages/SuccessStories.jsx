import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/SuccessStories.css";

const stories = [
  {
    id: "TG99-0599",
    district: "Hyderabad",
    date: "28/09/2025",
    time: "14:16 hrs",
    text: "A call was received informing that one boy theft a mobile phone from a patient at NIMS BanjaraHills. ERV 0599 was dispatched immediately. ERV reached on the spot within 03 minutes and caught the boy nearby medical turn.",
  },
  {
    id: "TG99-0418",
    district: "Warangal",
    date: "02/08/2025",
    time: "15:18 hrs",
    text: "A call was received informing that a person had been assaulted by individuals and Rs. 12000 was snatched. ERV 0418 reached on spot within 01 minute and apprehended three boys.",
  },
  {
    id: "TG99-0600",
    district: "Nirmal",
    date: "10/07/2025",
    time: "11:11 hrs",
    text: "Some persons in a black Scorpio snatched a woman's phone and fled. ERV 0600 reached within 03 minutes and caught the suspects.",
  },
];

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
              <i>By: tg_user</i>
            </p>
            
          </div>
          
        </div>
      ))}
      <hr></hr>
    </div>
  );
}
