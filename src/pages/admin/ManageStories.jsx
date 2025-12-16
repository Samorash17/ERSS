import { useState, useEffect } from 'react';
import initialStories from '../../data/stories.json';

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newStory, setNewStory] = useState({
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

  const handleAdd = (e) => {
    e.preventDefault();
    const story = {
      id: `TG99-${Math.floor(Math.random() * 10000)}`,
      ...newStory
    };
    const updated = [story, ...stories];
    setStories(updated);
    localStorage.setItem('erss_stories', JSON.stringify(updated));
    setIsAdding(false);
    setNewStory({ district: '', date: '', time: '', text: '' });
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage Success Stories</h1>
        <button className="btn-add" onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? 'Cancel' : 'Add New Story'}
        </button>
      </div>

      {isAdding && (
        <div className="form-card">
          <h3>Add New Story</h3>
          <form onSubmit={handleAdd}>
            <div className="form-row">
              <label>District</label>
              <input 
                type="text" 
                value={newStory.district} 
                onChange={e => setNewStory({...newStory, district: e.target.value})}
                required 
              />
            </div>
            <div className="form-row" style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <label>Date</label>
                <input 
                  type="date" 
                  value={newStory.date} 
                  onChange={e => setNewStory({...newStory, date: e.target.value})}
                  required 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Time</label>
                <input 
                  type="time" 
                  value={newStory.time} 
                  onChange={e => setNewStory({...newStory, time: e.target.value})}
                  required 
                />
              </div>
            </div>
            <div className="form-row">
              <label>Story Text</label>
              <textarea 
                rows="4" 
                value={newStory.text} 
                onChange={e => setNewStory({...newStory, text: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn-add">Save Story</button>
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
