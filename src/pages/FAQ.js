import Header from "../components/Header";
import "./FAQ.css";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the grievance portal?",
      answer: "It is a platform for students to submit, track, and resolve grievances within the college."
    },
    {
      question: "How do I submit a grievance?",
      answer: "Login with your credentials, go to the dashboard, and click on 'Submit New Grievance'."
    },
    {
      question: "Can I track my grievance status?",
      answer: "Yes. You can view your submitted grievances and their status on your dashboard."
    },
    {
      question: "Who handles the grievances?",
      answer: "Grievances are reviewed by the college grievance redressal committee."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
