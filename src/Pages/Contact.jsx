import React from "react";

const Contact = () => {
  return (
    <div className="contact-page bg-white p-5 rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-8">
        We’d love to hear from you! Whether you’re interested in collaborating,
        have questions, or would like to work with us, feel free to reach out.
        Simply fill out the form below, and we’ll get back to you as soon as
        possible.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
