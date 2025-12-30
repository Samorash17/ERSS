import { useState, useEffect } from 'react';
import api from '../../utils/api';
import LanguageInput from '../../components/LanguageInput';
import { getLocalizedData } from '../../utils/i18nHelper';

const ManageGallery = () => {
  const [images, setImages] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [galleryForm, setGalleryForm] = useState({
    title: { en: '', hi: '', te: '' },
    imageUrl: '',
    date: new Date().toISOString().split('T')[0]
  });

  const fetchGallery = async () => {
    try {
      const data = await api.get('/public/gallery');
      setImages(data);
    } catch (error) {
      console.error('Failed to fetch gallery', error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await api.delete(`/admin/gallery/${id}`);
        fetchGallery();
      } catch (error) {
        console.error('Failed to delete image', error);
        alert('Failed to delete image');
      }
    }
  };

  const startEdit = (img) => {
    setIsEditing(true);
    setIsAdding(true);
    setCurrentId(img._id);
    setGalleryForm({
      title: typeof img.title === 'string' ? { en: img.title, hi: '', te: '' } : img.title,
      imageUrl: img.imageUrl,
      date: img.date
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setCurrentId(null);
    setGalleryForm({ 
      title: { en: '', hi: '', te: '' }, 
      imageUrl: '', 
      date: new Date().toISOString().split('T')[0] 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/admin/gallery/${currentId}`, galleryForm);
      } else {
        await api.post('/admin/gallery', galleryForm);
      }
      fetchGallery();
      handleCancel();
    } catch (error) {
      console.error('Failed to save image', error);
      alert('Failed to save image');
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage Media Gallery</h1>
        {!isAdding && (
          <button className="admin-btn btn-add" onClick={() => setIsAdding(true)}>
            Add New Image
          </button>
        )}
      </div>

      {isAdding && (
        <div className="admin-form-container">
          <h3>{isEditing ? 'Edit Image' : 'Add New Image'}</h3>
          <div className="form-row">
            <p style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.6)' }}>
              Note: Please provide a public URL for the image.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <LanguageInput 
              label="Title" 
              value={galleryForm.title} 
              onChange={val => setGalleryForm({...galleryForm, title: val})}
              required={true}
            />
            <div className="form-row">
              <label>Image URL</label>
              <input 
                type="url" 
                className="admin-input"
                value={galleryForm.imageUrl} 
                onChange={e => setGalleryForm({...galleryForm, imageUrl: e.target.value})}
                placeholder="https://example.com/image.jpg"
                required 
              />
            </div>
            <div className="form-row">
              <label>Date</label>
              <input 
                type="date" 
                className="admin-input"
                value={galleryForm.date} 
                onChange={e => setGalleryForm({...galleryForm, date: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="button" className="admin-btn btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="admin-btn btn-submit">{isEditing ? 'Update Image' : 'Add Image'}</button>
            </div>
          </form>
        </div>
      )}

      <div className="dashboard-grid">
        {images.map(img => (
          <div key={img._id} className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={img.imageUrl} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Error+Loading+Image'} />
            </div>
            <div style={{ padding: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '18px' }}>{getLocalizedData(img.title, 'en')}</h4>
              <p style={{ margin: '0 0 20px 0', fontSize: '0.9em', color: 'rgba(255,255,255,0.6)' }}>{img.date}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="action-btn btn-edit" style={{ flex: 1 }} onClick={() => startEdit(img)}>Edit</button>
                <button className="action-btn btn-delete" style={{ flex: 1 }} onClick={() => handleDelete(img._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGallery;
