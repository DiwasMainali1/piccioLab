import React, { useState } from 'react';
import Location from '../assets/location.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://getform.io/f/lbjkkxoa', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setSubmitMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white py-12" id="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        
        {/* Our Office Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={Location} alt="Office Location" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Our Office:</strong><br />
                Level 5 West, Charles Perkins Centre,<br />
                University Pl, Camperdown,<br />
                Sydney NSW, 2006, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;