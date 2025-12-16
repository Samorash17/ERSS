// src/FAQ.jsx

import React, { useState } from "react";
import { useTranslation } from 'react-i18next';


// ------------------ FAQ ITEM UI ------------------
const FAQItem = ({ question, answer, defaultOpen }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className="faq-item"
            style={{
                borderBottom: "1px solid #eee",
                padding: "10px 0",
                cursor: "pointer",
                textAlign: "left"
            }}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="faq-question"
                style={{
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                {question}
                <span style={{ marginLeft: "10px" }}>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
                <div
                    className="faq-answer"
                    style={{
                        marginTop: "8px",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        textAlign: "left"
                    }}
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
            )}
        </div>
    );
};


// ------------------ MAIN PAGE ------------------
const FAQ = () => {
    const { t } = useTranslation();
    const faqData = t('faq.items', { returnObjects: true });

    return (
        <>
            <h1
                style={{
                    textAlign: "left",
                    padding: "20px",
                    fontSize: "28px",
                    fontWeight: "bold"
                }}
            >
                {t('faq.title')}
            </h1>

            <div
                className="faq-list-wrapper"
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "20px",
                    textAlign: "left"
                }}
            >
                {Array.isArray(faqData) && faqData.map((item, index) => (
                    <FAQItem
                        key={item.id || index}
                        question={item.question}
                        answer={item.answer}
                        defaultOpen={index === 0} // Open first item by default
                    />
                ))}
            </div>
        </>
    );
};

export default FAQ;

