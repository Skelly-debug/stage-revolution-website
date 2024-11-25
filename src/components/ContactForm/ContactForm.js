import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-neutral-900">
      <div className="max-w-md mx-auto bg-neutral-800 rounded-2xl p-8 shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-neutral-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-neutral-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-neutral-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors active:scale-95 duration-300"
          >
            <Send size={20} />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
