import { useState, useEffect } from 'react';
import api from '../../utils/api';

const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: ''
  });

  const fetchFaqs = async () => {
    try {
      const data = await api.get('/public/faqs');
      setFaqs(data);
    } catch (error) {
      console.error('Failed to fetch FAQs', error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      try {
        await api.delete(`/admin/faqs/${id}`);
        fetchFaqs();
      } catch (error) {
        console.error('Failed to delete FAQ', error);
        alert('Failed to delete FAQ');
      }
    }
  };

  const startEdit = (faq) => {
    setIsEditing(true);
    setIsAdding(true);
    setCurrentId(faq._id);
    setFaqForm({
      question: faq.question,
      answer: faq.answer
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setCurrentId(null);
    setFaqForm({ question: '', answer: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/admin/faqs/${currentId}`, faqForm);
      } else {
        await api.post('/admin/faqs', faqForm);
      }
      fetchFaqs();
      handleCancel();
    } catch (error) {
      console.error('Failed to save FAQ', error);
      alert('Failed to save FAQ');
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage FAQs</h1>
        {!isAdding && (
          <button className="admin-btn btn-add" onClick={() => setIsAdding(true)}>
            Add New FAQ
          </button>
        )}
      </div>

      {isAdding && (
        <div className="admin-form-container">
          <h3>{isEditing ? 'Edit FAQ' : 'Add New FAQ'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Question</label>
              <input 
                type="text" 
                className="admin-input"
                value={faqForm.question} 
                onChange={e => setFaqForm({...faqForm, question: e.target.value})}
                required 
              />
            </div>
            <div className="form-row">
              <label>Answer (HTML allowed)</label>
              <textarea 
                rows="4" 
                className="admin-textarea"
                value={faqForm.answer} 
                onChange={e => setFaqForm({...faqForm, answer: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="button" className="admin-btn btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="admin-btn btn-submit">{isEditing ? 'Update FAQ' : 'Save FAQ'}</button>
            </div>
          </form>
        </div>
      )}

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Answer Excerpt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map(faq => (
            <tr key={faq._id}>
              <td>{faq._id}</td>
              <td>{faq.question}</td>
              <td dangerouslySetInnerHTML={{ __html: faq.answer.substring(0, 50) + '...' }}></td>
              <td>
                <button className="action-btn btn-edit" onClick={() => startEdit(faq)}>Edit</button>
                <button className="action-btn btn-delete" onClick={() => handleDelete(faq._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFAQs;
