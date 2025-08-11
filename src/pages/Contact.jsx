import React from "react";

function Contact() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        action="https://formspree.io/f/xrbloqaw"
        method="POST"
        className="w-full max-w-xl flex flex-col gap-4 px-5"
      >
        <div className="w-full flex flex-col gap-10">
          <div className="w-full">
            <input
              type="text"
              name="name" // ✅ added
              placeholder="Enter Your Name....."
              className="w-full py-2 px-3 focus:outline-none border-2 border-gray-700 rounded-md"
              required
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-2 px-3 focus:outline-none border-2 border-gray-700 rounded-md"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              name="message"
              rows={7}
              placeholder="Message"
              className="w-full py-2 px-3 focus:outline-none border-2 border-gray-700 rounded-md"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-8 self-start rounded-md cursor-pointer hover:opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
