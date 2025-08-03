import { useState, useRef, useEffect } from "react";
import './LanguagePicker.css'
import i18n from '../i18n'; 

export default function LanguagePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language.toUpperCase());
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((open) => !open);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative language-picker  text-left select-none"
    >
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center gap-2 rounded-md  hover:bg-gray-200 cursor-pointer  transition-colors px-2 py-2 bg-white  text-sm font-medium text-gray-700   focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M2 12h20M12 2a15 15 0 010 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-medium">{language}</span>
        <svg
          className="h-3 w-3 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md bg-white  ring-opacity-5 z-10">
          <ul className="max-h-40 overflow-auto text-sm  shadow-md  text-gray-700">
            {["EN", "FR"].map((lang,index) => (
              <li
                key={lang}
                className={`cursor-pointer font-medium px-4 py-2  hover:bg-gray-200 ${
                  index === 1 ? " border-t-1 border-gray-200" : ""
                }`}
                onClick={() => selectLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
