import React, { useState } from 'react';
import { Mail, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:misssharissecole@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: '#E3E3FF' }} className="min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">Get In Touch</h2>
        
        {/* Success Message */}
        {submitted && (
          <div className="bg-white border-2 border-black rounded-2xl p-4 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <p className="text-black font-medium">Message sent! Your email client should open shortly.</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border-2 border-black">
            <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-black font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-4">Contact Information</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-black" />
                  <a href="mailto:misssharissecole@gmail.com" className="text-black hover:opacity-70 transition-opacity">
                    misssharissecole@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-black" />
                  <a
                    href="https://uk.linkedin.com/in/sharisse-cole"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-70 transition-opacity"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-4">Let's Collaborate</h3>
              <p className="text-black">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
