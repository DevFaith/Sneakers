import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Contacts</h1>
        <div className="flex justify-center space-x-4">
          <a href="tel:+254 769313712" className="text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </a>
          <a href="mailto:example@example.com" className="text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14l7-7 7 7M5 14l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
