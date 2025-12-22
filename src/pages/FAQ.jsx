import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import "../styles/FAQ.css";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqData, setFaqData] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await api.get('/public/faqs');
                setFaqData(data);
            } catch (error) {
                console.error('Failed to fetch FAQs', error);
            }
        };
        fetchFaqs();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1>{t('faq.title')}</h1>
                <div className="faq-header-line"></div>
            </div>
            
            <div className="faq-list">
                {faqs.map((item, index) => (
                    <div 
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                        key={item._id || index}
                    >
                        <button 
                            className="faq-question" 
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index}
                        >
                            <span className="question-text">{item.question}</span>
                            <span className="faq-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                        <div 
                            className="faq-answer" 
                            style={{ maxHeight: activeIndex === index ? '500px' : '0' }}
                        >
                            <div className="answer-content">
                                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="faq-footer">
                <p>{t('faq.footerText')} <a href="/contact">{t('faq.contactLink')}</a></p>
            </div>
        </div>
    );
};

export default FAQ;
