import React, { useState } from 'react';
import DataTableComponent from '../../components/Dashboard/DataTable';

import AddPlayer from '../../components/form/addPlayer/AddPlayer';
import { FaPlus, FaTimes } from "react-icons/fa";

const Player = () => {
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
                className="mb-4 bg-[#006e94] text-white p-2 rounded-lg hover:bg-[#328ba9] flex items-center gap-2"
            >
                {showForm ? <FaTimes /> : <FaPlus />}
                
            </button>
            
            {/* Conditionally render the AddClubForm or DataTableComponent */}
            {showForm ? <AddPlayer /> : <DataTableComponent />}
        </div>
    );
}

export default Player;
