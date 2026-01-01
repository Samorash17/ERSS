import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import { getLocalizedData } from '../utils/i18nHelper';
import BackButton from '../components/BackButton';
import "../styles/faq.css";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqData, setFaqData] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await api.get('/public/faqs');
                setFaqData(data);
            } catch (error) {
                console.error('Failed to fetch FAQs', error);
                // Fallback to translation files if API fails
                const translatedFaqs = t('faq.questions', { returnObjects: true });
                if (Array.isArray(translatedFaqs)) {
                    setFaqData(translatedFaqs);
                }
            }
        };
        fetchFaqs();
    }, [t]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <BackButton />
            {/* Background elements matching Hero */}
            <div className="faq-background">
                <div className="faq-gradient-orb faq-gradient-orb-1"></div>
                <div className="faq-gradient-orb faq-gradient-orb-2"></div>
                <div className="faq-grid-pattern"></div>
            </div>

            <div className="faq-container">
                <div className="faq-header">
                    <h1 className="faq-title">{t('faq.title')}</h1>
                    <div className="faq-title-underline">{t('faq.titleUnderline')}</div>
                    <p className="faq-subtitle">
                        {t('faq.subtitle')}
                    </p>
                </div>
                
                <div className="faq-list-wrapper">
                    {faqData.map((item, index) => (
                        <div 
                            className={`faq-item ${activeIndex === index ? 'open' : ''}`} 
                            key={index}
                        >
                            <button 
                                className="faq-question" 
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="question-text">{getLocalizedData(item.question, i18n.language)}</span>
                                <div className={`faq-arrow ${activeIndex === index ? 'rotate' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                            <div 
                                className={`faq-answer-wrapper ${activeIndex === index ? 'expanded' : ''}`}
                            >
                                <div className="faq-answer">
                                    <div dangerouslySetInnerHTML={{ __html: getLocalizedData(item.answer, i18n.language) }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
