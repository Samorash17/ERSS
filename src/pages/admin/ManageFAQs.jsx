import { useState, useEffect } from 'react';
import initialFaqs from '../../data/faqs.json';

const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('erss_faqs');
    if (stored) {
      setFaqs(JSON.parse(stored));
    } else {
      setFaqs(initialFaqs);
      localStorage.setItem('erss_faqs', JSON.stringify(initialFaqs));
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      const updated = faqs.filter(f => f.id !== id);
      setFaqs(updated);
      localStorage.setItem('erss_faqs', JSON.stringify(updated));
    }
  };

  const startEdit = (faq) => {
    setIsEditing(true);
    setIsAdding(true);
    setCurrentId(faq.id);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      const updatedFaqs = faqs.map(f => 
        f.id === currentId ? { ...f, ...faqForm } : f
      );
      setFaqs(updatedFaqs);
      localStorage.setItem('erss_faqs', JSON.stringify(updatedFaqs));
    } else {
      const faq = {
        id: Date.now(),
        ...faqForm
      };
      const updatedFaqs = [...faqs, faq];
      setFaqs(updatedFaqs);
      localStorage.setItem('erss_faqs', JSON.stringify(updatedFaqs));
    }
    
    handleCancel();
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage FAQs</h1>
        {!isAdding && (
          <button className="btn-add" onClick={() => setIsAdding(true)}>
            Add New FAQ
          </button>
        )}
      </div>

      {isAdding && (
        <div className="form-card">
          <h3>{isEditing ? 'Edit FAQ' : 'Add New FAQ'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Question</label>
              <input 
                type="text" 
                value={faqForm.question} 
                onChange={e => setFaqForm({...faqForm, question: e.target.value})}
                required 
              />
            </div>
            <div className="form-row">
              <label>Answer (HTML allowed)</label>
              <textarea 
                rows="4" 
                value={faqForm.answer} 
                onChange={e => setFaqForm({...faqForm, answer: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn-add">{isEditing ? 'Update FAQ' : 'Save FAQ'}</button>
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
            <tr key={faq.id}>
              <td>{faq.id}</td>
              <td>{faq.question}</td>
              <td dangerouslySetInnerHTML={{ __html: faq.answer.substring(0, 50) + '...' }}></td>
              <td>
                <button className="action-btn btn-edit" onClick={() => startEdit(faq)}>Edit</button>
                <button className="action-btn btn-delete" onClick={() => handleDelete(faq.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFAQs;
