"use client"

import { useState } from "react"
import "../styles/faq.css"

// - FULL FAQ DATA ----
const faqData = [
  {
    id: 1,
    question: "What is 112?",
    answer:
      "112 is the Single Emergency number, people in distress can call 24h/7 in all 36 states/UTs of India to get immediate assistance from the fire brigade, a medical team or the police. You can call the number 112 with a fixed or mobile phone. The Single emergency number is free everywhere",
    defaultOpen: false,
  },
  {
    id: 2,
    question: "Why 112? When dial 100 was already in use?",
    answer:
      "112 is a globally recognized single emergency number, adopted by most of European countries, common wealth nations and mapped to emergency numbers in USA and Canada. Most of Phone handsets are manufactured with pre-programmed 112 as emergency number to be dialed with single key press. TRAI allotted this number for the purpose of single emergency number in India in May 2015.",
    defaultOpen: false,
  },
  {
    id: 3,
    question: "What is a Panic Button? And how it is related to 112?",
    answer:
      "As per Gazette published by Govt of India, all smart phones sold after 1st Jan 2017 (w.e.f. 1st April 2017) will have a functionality of panic button which would be activated by pressing power button in succession 3 times in case of a smart phone and the similar functionality in a feature phone would be activated with press of numeric key 5 or 9 consistently. This panic button will cause an automatic dialing of emergency number 112.",
    defaultOpen: false,
  },
  {
    id: 4,
    question: "What language should I speak when I call 112?",
    answer:
      "You speak the language of the State in which you call. If you don't speak this language, you can provide the necessary information in English/Hindi for instance. English/Hindi are the most used languages; in 36 states/UTs you can get assistance in English/Hindi. In some states/UTs they can take your call to the emergency number in the language of the neighboring State/UT as well.",
    defaultOpen: false,
  },
  {
    id: 5,
    question: "Is 112 a free number?",
    answer: "Yes, 112 is completely free to call from any phone in India.",
    defaultOpen: false,
  },
  {
    id: 6,
    question: "When can I call an emergency number?",
    answer:
      "You can call 112 or 100 when you urgently need a fire brigade, an ambulance or the police. If there is no urgency, you better call the local fire brigade, your general practitioner (outside opening hours you can call the after-hours primary care) or the local police. There are also other emergency numbers for specific problems, such as the suicide line or the Treatment Centre for Poisoning Cases.",
    defaultOpen: false,
  },
  {
    id: 7,
    question: "Can I call 112 with my mobile phone?",
    answer:
      "You can call the emergency number 112 with your mobile phone from all states/UTs. Even when the mobile operator network is not available, you can call the emergency number 112 with your mobile phone.",
    defaultOpen: false,
  },
  {
    id: 8,
    question: "In which countries can I call 112 when I am in distress?",
    answer: `
        <p>You can call for urgent assistance in the 28 member states of the European Union through the emergency number 112. These member states are: Belgium, Bulgaria, Croatia, Cyprus, Denmark, Germany, Estonia, Finland, France, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxemburg, Malta, the Netherlands, Austria, Poland, Portugal, Romania, Slovenia, Slovakia, Spain, the Czech Republic, the United Kingdom and Sweden. In the following countries the emergency number 112 is active as well: Israel, Norway, Russia, Turkey, and Switzerland.</p>
        <b>Some examples when you CAN call:</b>
        <ul>
        <li>When a building, forest or car is on fire or when there is smoke coming out of a building.</li>
        <li>People who are stuck or trapped and need to be evacuated from a run-down house or a car.</li>
        <li>In case of a serious accident with wounded persons.</li>
        <li>When someone tries to steal or damage a car.</li>
        <li>When you are the victim or witness of an aggression or fight.</li>
        <li>When you see someone break into a house or notice that someone is trying to break into your house.</li>
        <li>When you witness a suicide attempt.</li>
        <li>When you or someone in your surroundings is unconscious, doesn't stop bleeding or is suffocating.</li>
        </ul>
        `,
    defaultOpen: false,
  },
  {
    id: 9,
    question: "What precautions should I use to avoid unintended pressing of Panic Button or automatic dialing of 112?",
    answer: `
        <ul>
        <li>We should avoid the pressing of power button or redial button by careful handling of handset, especially if last dial is 112.</li>
        <li>Special attention should be taken if children pick up the phone and to keep a watch on them.</li>
        <li>While handset is in pocket, we should be aware if emergency key is being pressed because of posture.</li>
        <li>We should be precautious while pressing power button for restart/reboot, sleep or awakening, in such a way that it does not cause in 3 times succession.</li>
        <li>We should not try this facility to test or joke with Emergency services.</li>
        </ul>
    `,
    defaultOpen: false,
  },
  {
    id: 10,
    question: "What Action can be taken against me, if I mistakenly press the panic button and/or call 112 repeatedly?",
    answer: `
        <p>Generally Police Call center politely suggests not to interrupt the operations for sake of other genuine callers and use this facility judiciously. If a considerable number of calls are made to police control room mistakenly or carelessly, this can be taken as nuisance and appropriate legal action can be initiated against the caller.</p>
        <p><b>DO NOT call 112:</b></p>
        <ul>
        <li>To see whether the 112 or 101 really works.</li>
        <li>To make a joke when everything is fine.</li>
        <li>When you need general information, such as someone's telephone number or address.</li>
        <li>Because you locked yourself out and can't enter your house anymore.</li>
        <li>To order a pizza or cab.</li>
        </ul>
        <p>If you call the emergency services without a valid reason, the operators in the emergency centres cannot take the calls from people who are really in distress. All emergency numbers are, amongst other things because they are free, regularly the victim of interrupts. These persons expose themselves to legal action, which may lead to criminal prosecution.</p>
        `,
    defaultOpen: false,
  },
  {
    id: 11,
    question:
      'What does it mean when the message "network unavailable – emergency number only" appears on the screen of my mobile phone?',
    answer: `When this message appears, this means that there are interruptions on the mobile phone networks due to circumstances and that temporarily only emergency calls are possible. It certainly doesn't mean that you have to call the number 112 because your mobile phone doesn't work!`,
    defaultOpen: false,
  },
  {
    id: 12,
    question: "Why has the emergency number 112 been introduced in India?",
    answer: `The Govt of India took the decision to introduce the emergency number 112, so that people travelling in other States/UTs don't need to know all local emergency numbers. The emergency number 112 is easy to remember and moreover it is the only emergency number you need to remember in India. This is important because people confronted with an emergency can be stressed or even in panic.`,
    defaultOpen: false,
  },
  {
    id: 13,
    question: "How is the emergency number 112 introduced in India?",
    answer: `In India your 112 call temporarily still arrives at an operator of the help centre 112 of the province where you are. Calls to the number 112 for urgent police assistance are redirected by the operator to the Communication and Information Centre of the integrated police (CIC 101). Because of this, valuable time may be wasted. We therefore advise you to directly call the emergency number 101 for urgent police assistance.`,
    defaultOpen: false,
  },
  {
    id: 14,
    question: "Can you call a foreign 112 centre from India and an emergency centre in India from abroad?",
    answer: `At this moment it is not possible to directly contact foreign emergency centres from India. Nor is it possible to call the emergency rooms of the Indian emergency centres from abroad. When you call an emergency number, you are redirected to the nearest emergency centre. When you call 112 in India, depending on where you are, you thus get an operator on the phone from the emergency centre in the region where you are at that moment. When you do wish to contact an emergency centre in a region you are not yourself, you can try to do this best through a contact person (for instance a family member or acquaintance) who is in that region.`,
    defaultOpen: false,
  },
  {
    id: 15,
    question: "Is my call to the emergency number 112 in India recorded or saved?",
    answer: `When you call the emergency number 112, your call can be recorded or saved. Emergency calls are recorded in order for the persons in charge of emergency stations to be able to listen to these calls again, and help people in need even better. For this reason, recorded phone calls can be saved for one year.`,
    defaultOpen: false,
  },
  {
    id: 16,
    question: "How much does an intervention of an ambulance or fire department cost after a call to the number 112?",
    answer: `
        <ul>
        <li>The emergency numbers are free and available 24h/7.</li>
        <li>The transport costs for urgent medical assistance depends upon the type of Ambulance Service is called and available. The amount is determined by the respective free or chargeable Ambulance. Most States/UTs run state based free services and some charitable organizations also operate their Ambulances.</li>
        <li>The costs for urgent assistance from the fire department are mostly free of charge, yet your municipality can ask for a reimbursement for interventions that are not urgent when these are mentioned in the rules regarding charges. For further information, contact your municipality.</li>
        </ul>`,
    defaultOpen: false,
  },
]

// ------------------ FAQ ITEM UI ------------------
const FAQItem = ({ question, answer, defaultOpen, index }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div onClick={() => setIsOpen(!isOpen)} className="faq-question">
        <span className="question-text">{question}</span>
        <span className={`faq-arrow ${isOpen ? "rotate" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </span>
      </div>

      <div className={`faq-answer-wrapper ${isOpen ? "expanded" : ""}`}>
        <div className="faq-answer" dangerouslySetInnerHTML={{ __html: answer }}></div>
      </div>
    </div>
  )
}

// ------------------ MAIN PAGE ------------------
const FAQ = () => {
  return (
    <section className="faq-section">
      {/* Background Elements */}
      <div className="faq-floating-orb faq-orb-1"></div>
      <div className="faq-floating-orb faq-orb-2"></div>
      <div className="faq-floating-orb faq-orb-3"></div>

      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-title-underline"></div>
          <p className="faq-subtitle">Find answers to common questions about the 112 Emergency Response System</p>
        </div>

        <div className="faq-list-wrapper">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              defaultOpen={item.defaultOpen}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
