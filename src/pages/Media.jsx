import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import BackButton from '../components/BackButton';

function Media() {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
        try {
            const data = await api.get('/public/gallery');
            setGallery(data);
        } catch (error) {
            console.error('Failed to fetch gallery', error);
        }
    };
    fetchGallery();
  }, []);

  return (
    <div className="media-container" style={{ padding: "80px 20px", textAlign: "center" }}>
      <BackButton />
      <h1>{t('media.title', 'Media Gallery')}</h1>
      {gallery.length === 0 ? (
        <p>{t('media.comingSoon', 'Coming Soon...')}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {gallery.map((item) => (
                <div key={item._id} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '10px' }}>
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}
 
export default Media;
