import { useState, useEffect } from 'react';
import api from '../../utils/api';
import LanguageInput from '../../components/LanguageInput';
import { getLocalizedData } from '../../utils/i18nHelper';

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [storyForm, setStoryForm] = useState({
    district: { en: '', hi: '', te: '' },
    date: '',
    time: '',
    text: { en: '', hi: '', te: '' }
  });

  const fetchStories = async () => {
    try {
      const data = await api.get('/public/stories');
      setStories(data);
    } catch (error) {
      console.error('Failed to fetch stories', error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        await api.delete(`/admin/stories/${id}`);
        fetchStories();
      } catch (error) {
        console.error('Failed to delete story', error);
        alert('Failed to delete story');
      }
    }
  };

  const startEdit = (story) => {
    setIsEditing(true);
    setIsAdding(true);
    setCurrentId(story._id);
    setStoryForm({
      district: typeof story.district === 'string' ? { en: story.district, hi: '', te: '' } : story.district,
      date: story.date,
      time: story.time,
      text: typeof story.text === 'string' ? { en: story.text, hi: '', te: '' } : story.text
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setCurrentId(null);
    setStoryForm({ 
      district: { en: '', hi: '', te: '' }, 
      date: '', 
      time: '', 
      text: { en: '', hi: '', te: '' } 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/admin/stories/${currentId}`, storyForm);
      } else {
        await api.post('/admin/stories', storyForm);
      }
      fetchStories();
      handleCancel();
    } catch (error) {
      console.error('Failed to save story', error);
      alert('Failed to save story');
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage Success Stories</h1>
        {!isAdding && (
          <button className="admin-btn btn-add" onClick={() => setIsAdding(true)}>
            Add New Story
          </button>
        )}
      </div>

      {isAdding && (
        <div className="admin-form-container">
          <h3>{isEditing ? 'Edit Story' : 'Add New Story'}</h3>
          <form onSubmit={handleSubmit}>
            <LanguageInput 
              label="District" 
              value={storyForm.district} 
              onChange={val => setStoryForm({...storyForm, district: val})}
              required={true}
            />
            <div className="form-row" style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label>Date</label>
                <input 
                  type="date" 
                  className="admin-input"
                  value={storyForm.date} 
                  onChange={e => setStoryForm({...storyForm, date: e.target.value})}
                  required 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Time</label>
                <input 
                  type="time" 
                  className="admin-input"
                  value={storyForm.time} 
                  onChange={e => setStoryForm({...storyForm, time: e.target.value})}
                  required 
                />
              </div>
            </div>
            <LanguageInput 
              label="Story Text" 
              value={storyForm.text} 
              onChange={val => setStoryForm({...storyForm, text: val})}
              required={true}
              type="textarea"
            />
            <div className="btn-group">
              <button type="button" className="admin-btn btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="admin-btn btn-submit">{isEditing ? 'Update Story' : 'Save Story'}</button>
            </div>
          </form>
        </div>
      )}

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>District</th>
            <th>Date</th>
            <th>Excerpt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stories.map(story => (
            <tr key={story._id}>
              <td>{story._id}</td>
              <td>{getLocalizedData(story.district, 'en')}</td>
              <td>{story.date}</td>
              <td>{getLocalizedData(story.text, 'en').substring(0, 50)}...</td>
              <td>
                <button className="action-btn btn-edit" onClick={() => startEdit(story)}>Edit</button>
                <button className="action-btn btn-delete" onClick={() => handleDelete(story._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStories;
