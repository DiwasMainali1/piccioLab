import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Replace with your form submission endpoint
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          message: 'Thank you! Your message has been sent successfully.',
          isError: false
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        message: 'There was an error sending your message. Please try again later.',
        isError: true
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: ["University of Sydney", "Sydney, NSW 2000"]
    },
    {
      icon: Phone,
      title: "Call Us",
      content: [""]
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["info@example.com"]
    }
  ];

  const formFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'message', label: 'Message', type: 'textarea' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <info.icon className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                    <div className="text-gray-600 mt-2">
                      {info.content.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <motion.div
                  key={field.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows="4"
                      value={formData[field.id]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.id)}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg transition-all duration-300 ${
                        focusedField === field.id
                          ? 'ring-2 ring-blue-500 border-blue-500'
                          : 'hover:border-blue-300'
                      }`}
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.id)}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg transition-all duration-300 ${
                        focusedField === field.id
                          ? 'ring-2 ring-blue-500 border-blue-500'
                          : 'hover:border-blue-300'
                      }`}
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence mode="wait">
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-4 p-4 rounded-lg ${
                      submitStatus.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;