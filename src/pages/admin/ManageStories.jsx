import { useState, useEffect } from 'react';
import initialStories from '../../data/stories.json';

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [storyForm, setStoryForm] = useState({
    district: '',
    date: '',
    time: '',
    text: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('erss_stories');
    if (stored) {
      setStories(JSON.parse(stored));
    } else {
      setStories(initialStories);
      localStorage.setItem('erss_stories', JSON.stringify(initialStories));
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      const updated = stories.filter(s => s.id !== id);
      setStories(updated);
      localStorage.setItem('erss_stories', JSON.stringify(updated));
    }
  };

  const startEdit = (story) => {
    setIsEditing(true);
    setIsAdding(true); // Open the form
    setCurrentId(story.id);
    setStoryForm({
      district: story.district,
      date: story.date,
      time: story.time,
      text: story.text
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setCurrentId(null);
    setStoryForm({ district: '', date: '', time: '', text: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing
      const updatedStories = stories.map(s => 
        s.id === currentId ? { ...s, ...storyForm } : s
      );
      setStories(updatedStories);
      localStorage.setItem('erss_stories', JSON.stringify(updatedStories));
    } else {
      // Add new
      const story = {
        id: `TG99-${Math.floor(Math.random() * 10000)}`,
        ...storyForm
      };
      const updatedStories = [story, ...stories];
      setStories(updatedStories);
      localStorage.setItem('erss_stories', JSON.stringify(updatedStories));
    }

    handleCancel();
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage Success Stories</h1>
        {!isAdding && (
          <button className="btn-add" onClick={() => setIsAdding(true)}>
            Add New Story
          </button>
        )}
      </div>

      {isAdding && (
        <div className="form-card">
          <h3>{isEditing ? 'Edit Story' : 'Add New Story'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>District</label>
              <input 
                type="text" 
                value={storyForm.district} 
                onChange={e => setStoryForm({...storyForm, district: e.target.value})}
                required 
              />
            </div>
            <div className="form-row" style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <label>Date</label>
                <input 
                  type="date" 
                  value={storyForm.date} 
                  onChange={e => setStoryForm({...storyForm, date: e.target.value})}
                  required 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Time</label>
                <input 
                  type="time" 
                  value={storyForm.time} 
                  onChange={e => setStoryForm({...storyForm, time: e.target.value})}
                  required 
                />
              </div>
            </div>
            <div className="form-row">
              <label>Story Text</label>
              <textarea 
                rows="4" 
                value={storyForm.text} 
                onChange={e => setStoryForm({...storyForm, text: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn-add">{isEditing ? 'Update Story' : 'Save Story'}</button>
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
            <tr key={story.id}>
              <td>{story.id}</td>
              <td>{story.district}</td>
              <td>{story.date}</td>
              <td>{story.text.substring(0, 50)}...</td>
              <td>
                <button className="action-btn btn-edit" onClick={() => startEdit(story)}>Edit</button>
                <button className="action-btn btn-delete" onClick={() => handleDelete(story.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStories;
