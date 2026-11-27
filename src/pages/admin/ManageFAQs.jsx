import { useState, useEffect } from 'react';
import api from '../../utils/api';
import LanguageInput from '../../components/LanguageInput';
import { getLocalizedData } from '../../utils/i18nHelper';

const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [faqForm, setFaqForm] = useState({
    question: { en: '', hi: '', te: '' },
    answer: { en: '', hi: '', te: '' }
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
      question: typeof faq.question === 'string' ? { en: faq.question, hi: '', te: '' } : faq.question,
      answer: typeof faq.answer === 'string' ? { en: faq.answer, hi: '', te: '' } : faq.answer
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setCurrentId(null);
    setFaqForm({ 
      question: { en: '', hi: '', te: '' }, 
      answer: { en: '', hi: '', te: '' } 
    });
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
            <LanguageInput 
              label="Question" 
              value={faqForm.question} 
              onChange={val => setFaqForm({...faqForm, question: val})}
              required={true}
            />
            <LanguageInput 
              label="Answer (HTML allowed)" 
              value={faqForm.answer} 
              onChange={val => setFaqForm({...faqForm, answer: val})}
              required={true}
              type="textarea"
            />
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
              <td>{getLocalizedData(faq.question, 'en')}</td>
              <td dangerouslySetInnerHTML={{ __html: getLocalizedData(faq.answer, 'en').substring(0, 50) + '...' }}></td>
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
