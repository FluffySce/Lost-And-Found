// src/components/Modal.jsx
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={onClose} className="text-neutral-500 mb-4">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
