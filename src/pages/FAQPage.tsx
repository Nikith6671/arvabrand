import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData: FAQItem[] = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, selecting your desired items, choosing size and color, and adding them to your cart. Then proceed to checkout and follow the payment instructions.",
      category: "orders"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, net banking, and digital wallets like PayPal, Paytm, and Google Pay.",
      category: "payment"
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within India. Express shipping (available in select cities) takes 1-2 business days. International shipping takes 7-14 business days.",
      category: "shipping"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. Items must be unworn, with original tags, and in original packaging. Return shipping is free for defective items or our mistakes.",
      category: "returns"
    },
    {
      question: "How do I exchange an item?",
      answer: "You can exchange items within 30 days of purchase. Contact our support team to initiate an exchange. We'll send you a new item once we receive the original.",
      category: "returns"
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free standard shipping on orders above ₹999. For orders below ₹999, shipping charges are ₹99.",
      category: "shipping"
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can track your order on our website or the carrier's website.",
      category: "orders"
    },
    {
      question: "What if I receive a defective item?",
      answer: "If you receive a defective item, contact us immediately with photos. We'll arrange a free replacement or full refund, including return shipping costs.",
      category: "returns"
    },
    {
      question: "How do I find the right size?",
      answer: "Check our detailed size guide available on each product page. Measurements are provided in both inches and centimeters. If you're between sizes, we recommend sizing up.",
      category: "sizing"
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 2 hours of placing it. After that, if the order hasn't shipped, contact our support team. Once shipped, you can return the items using our return policy.",
      category: "orders"
    },
    {
      question: "Do you restock sold-out items?",
      answer: "Most popular items are restocked regularly. You can sign up for notifications on product pages to be alerted when items are back in stock.",
      category: "products"
    },
    {
      question: "How do I care for my ARVA clothing?",
      answer: "Care instructions are provided on each product page and on the garment labels. Generally, we recommend machine wash cold, gentle cycle, and air dry for best results.",
      category: "care"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'orders', name: 'Orders' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'returns', name: 'Returns & Exchanges' },
    { id: 'payment', name: 'Payment' },
    { id: 'sizing', name: 'Sizing' },
    { id: 'products', name: 'Products' },
    { id: 'care', name: 'Care' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about orders, shipping, returns, and more.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
              )}
            </button>
            
            {activeIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Contact Support
          </a>
          <a
            href="mailto:support@arvaspace.in"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>

      {/* Quick Help */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Size Guide</h3>
          <p className="text-gray-600 text-sm mb-3">
            Find your perfect fit with our detailed measurements.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            View Guide →
          </a>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Track Order</h3>
          <p className="text-gray-600 text-sm mb-3">
            Check the status of your recent orders.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Track Now →
          </a>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Returns</h3>
          <p className="text-gray-600 text-sm mb-3">
            Easy returns and exchanges within 30 days.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Start Return →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;