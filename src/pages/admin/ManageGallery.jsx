import { useState, useEffect } from 'react';
import initialGallery from '../../data/gallery.json';

const ManageGallery = () => {
  const [images, setImages] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    imageUrl: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const stored = localStorage.getItem('erss_gallery');
    if (stored) {
      setImages(JSON.parse(stored));
    } else {
      setImages(initialGallery);
      localStorage.setItem('erss_gallery', JSON.stringify(initialGallery));
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updated = images.filter(img => img.id !== id);
      setImages(updated);
      localStorage.setItem('erss_gallery', JSON.stringify(updated));
    }
  };

  const startEdit = (img) => {
    setIsEditing(true);
    setIsAdding(true);
    setCurrentId(img.id);
    setGalleryForm({
      title: img.title,
      imageUrl: img.imageUrl,
      date: img.date
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setCurrentId(null);
    setGalleryForm({ title: '', imageUrl: '', date: new Date().toISOString().split('T')[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      const updatedImages = images.map(img => 
        img.id === currentId ? { ...img, ...galleryForm } : img
      );
      setImages(updatedImages);
      localStorage.setItem('erss_gallery', JSON.stringify(updatedImages));
    } else {
      const image = {
        id: Date.now(),
        ...galleryForm
      };
      const updatedImages = [image, ...images];
      setImages(updatedImages);
      localStorage.setItem('erss_gallery', JSON.stringify(updatedImages));
    }

    handleCancel();
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage Media Gallery</h1>
        {!isAdding && (
          <button className="btn-add" onClick={() => setIsAdding(true)}>
            Add New Image
          </button>
        )}
      </div>

      {isAdding && (
        <div className="form-card">
          <h3>{isEditing ? 'Edit Image' : 'Add New Image'}</h3>
          <div className="form-row">
            <p style={{ fontSize: '0.9em', color: '#7f8c8d' }}>
              Note: Since this is a prototype without a backend server, please provide a public URL for the image.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Title</label>
              <input 
                type="text" 
                value={galleryForm.title} 
                onChange={e => setGalleryForm({...galleryForm, title: e.target.value})}
                required 
              />
            </div>
            <div className="form-row">
              <label>Image URL</label>
              <input 
                type="url" 
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
                value={galleryForm.date} 
                onChange={e => setGalleryForm({...galleryForm, date: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn-add">{isEditing ? 'Update Image' : 'Add Image'}</button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {images.map(img => (
          <div key={img.id} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div style={{ height: '150px', overflow: 'hidden' }}>
              <img src={img.imageUrl} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Error+Loading+Image'} />
            </div>
            <div style={{ padding: '10px' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{img.title}</h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.8em', color: '#7f8c8d' }}>{img.date}</p>
              <div style={{ display: 'flex', gap: '5px' }}>
                <button className="action-btn btn-edit" style={{ flex: 1 }} onClick={() => startEdit(img)}>Edit</button>
                <button className="action-btn btn-delete" style={{ flex: 1 }} onClick={() => handleDelete(img.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGallery;
