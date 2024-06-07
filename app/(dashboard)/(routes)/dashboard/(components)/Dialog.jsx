import React from "react";

const Dialog = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Upgrade</h2>
        <p>Upgrade</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white">✕</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
