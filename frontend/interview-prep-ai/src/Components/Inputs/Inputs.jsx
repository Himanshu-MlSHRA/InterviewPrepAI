import React from "react";

const Input = ({ 
    type = "text",
    label,
    value,
    onChange,
    placeholder,
    required = false,
    className = ""
}) => {
    return (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium text-black mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 bg-transparent border-b border-[#B1A7A6] focus:outline-none focus:border-[#BA181B] text-black placeholder-[#B1A7A6] transition-colors"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default Input;