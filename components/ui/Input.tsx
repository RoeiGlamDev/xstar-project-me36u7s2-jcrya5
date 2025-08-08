import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <label className="block text-white text-lg font-semibold mb-2">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={w-full p-4 border-2 rounded-lg transition duration-300 ease-in-out 
          ${isFocused ? 'border-orange-500' : 'border-white'} 
          bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {required && !value && (
        <p className="text-red-500 text-sm mt-1">This field is required.</p>
      )}
    </div>
  );
};

export default Input;