import { useState, useEffect, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai"; 
//
import UK from "../../assets/uk.png";
import SE from "../../assets/swedish.png";
import DK from "../../assets/danish.png";

const languages = [
  { code: "en", name: "English", flag: UK }, 
  { code: "sw", name: "Swedish", flag: SE },
  { code: "da", name: "Danish", flag: DK },
];

export default function LanguageTranslator() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        className="flex items-center px-4 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-100 dark:bg-[#101828] dark:text-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-4 mr-2" />
        {selectedLang.name}
        <AiOutlineDown className="ml-2 text-gray-500" /> {/* React Icon */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-10 dark:bg-[#101828] dark:text-gray-400">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 ${
                selectedLang.code === lang.code ? "bg-gray-200 dark:bg-[#101828] dark:text-gray-400" : ""
              }`}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-4 mr-2" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
