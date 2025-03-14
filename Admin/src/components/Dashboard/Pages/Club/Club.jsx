import React, { useState } from 'react';
import DataTableComponent from './ClubDataTable';
import AddClubForm from './AddClubForm';
import { FaPlus, FaTimes } from "react-icons/fa";


const Club = () => {
    // State to manage form visibility
    const [showForm, setShowForm] = useState(false);

    // Toggle form visibility
    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            {/* Button to toggle form visibility */}
            <button 
                onClick={handleButtonClick} 
                className="mb-4 bg-[#006e94] text-white p-2 rounded-lg hover:bg-[#328ba9]">
                 {showForm ? <FaTimes /> : <FaPlus />}
            </button>
          
            {showForm && <AddClubForm />}
            {!showForm &&   <DataTableComponent />}
          
        </div>
    );
}

export default Club;