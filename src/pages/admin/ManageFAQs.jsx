import { useState, useEffect } from 'react';
import initialFaqs from '../../data/faqs.json';

const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newFaq, setNewFaq] = useState({
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

  const handleAdd = (e) => {
    e.preventDefault();
    const faq = {
      id: Date.now(),
      ...newFaq
    };
    const updated = [...faqs, faq];
    setFaqs(updated);
    localStorage.setItem('erss_faqs', JSON.stringify(updated));
    setIsAdding(false);
    setNewFaq({ question: '', answer: '' });
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Manage FAQs</h1>
        <button className="btn-add" onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? 'Cancel' : 'Add New FAQ'}
        </button>
      </div>

      {isAdding && (
        <div className="form-card">
          <h3>Add New FAQ</h3>
          <form onSubmit={handleAdd}>
            <div className="form-row">
              <label>Question</label>
              <input 
                type="text" 
                value={newFaq.question} 
                onChange={e => setNewFaq({...newFaq, question: e.target.value})}
                required 
              />
            </div>
            <div className="form-row">
              <label>Answer (HTML allowed)</label>
              <textarea 
                rows="4" 
                value={newFaq.answer} 
                onChange={e => setNewFaq({...newFaq, answer: e.target.value})}
                required 
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn-add">Save FAQ</button>
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
