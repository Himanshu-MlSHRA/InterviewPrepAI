import React from "react";


const Modal = ({ isOpen, onClose, children, hideHeader }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F5F3F4] rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 border border-[#BA181B]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {!hideHeader && (
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
