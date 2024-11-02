import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'How do I report a lost item?',
      answer: 'Click on the "Report Lost Item" button and fill out the form with details.'
    },
    {
      question: 'What should I do if I find someone else\'s item?',
      answer: 'Please report it using the "Report Found Item" button and turn it in to the campus lost and found office.'
    },
    {
      question: 'How long are items kept in the lost and found?',
      answer: 'Items are typically kept for one semester. Unclaimed items will be donated or disposed of afterward.'
    }
  ];

  return (
    <section id="faq" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-neutral-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
