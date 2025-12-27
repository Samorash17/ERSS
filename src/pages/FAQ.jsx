import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import "../styles/faq.css";

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
                // Fallback FAQ data for demo
                setFaqData([
                    {
                        _id: '1',
                        question: 'What is Telangana 112?',
                        answer: 'Telangana 112 is an integrated emergency response system that provides immediate assistance for police, medical, fire, and disaster emergencies through a single number - 112.'
                    },
                    {
                        _id: '2',
                        question: 'How do I contact emergency services?',
                        answer: 'Simply dial <b>112</b> from any phone (mobile or landline) to reach our emergency response center. The call is free and available 24/7.'
                    },
                    {
                        _id: '3',
                        question: 'What services are available through 112?',
                        answer: '<ul><li>Police Emergency Services</li><li>Medical Emergency & Ambulance</li><li>Fire Emergency Services</li><li>Disaster Response</li><li>Women Safety Services</li><li>Child Protection Services</li></ul>'
                    },
                    {
                        _id: '4',
                        question: 'Is the 112 service available in multiple languages?',
                        answer: 'Yes, our emergency response system supports multiple languages including Telugu, Hindi, English, and other regional languages to ensure effective communication.'
                    },
                    {
                        _id: '5',
                        question: 'How quickly can I expect help after calling 112?',
                        answer: 'Our target response time varies by emergency type and location, but we strive to dispatch help within <b>5-15 minutes</b> for critical emergencies in urban areas.'
                    }
                ]);
            }
        };
        fetchFaqs();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            {/* Background elements matching Hero */}
            <div className="faq-background">
                <div className="faq-gradient-orb faq-gradient-orb-1"></div>
                <div className="faq-gradient-orb faq-gradient-orb-2"></div>
                <div className="faq-grid-pattern"></div>
            </div>

            <div className="faq-container">
                <div className="faq-header">
                    <h1 className="faq-title">Frequently Asked Questions</h1>
                    <div className="faq-title-underline">TELANGANA 112</div>
                    <p className="faq-subtitle">
                        Find answers to common questions about our emergency response services and how to access help when you need it most.
                    </p>
                </div>
                
                <div className="faq-list-wrapper">
                    {faqData.map((item, index) => (
                        <div 
                            className={`faq-item ${activeIndex === index ? 'open' : ''}`} 
                            key={item._id || index}
                        >
                            <button 
                                className="faq-question" 
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="question-text">{item.question}</span>
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
                                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
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
