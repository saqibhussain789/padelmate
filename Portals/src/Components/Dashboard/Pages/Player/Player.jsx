import React, { useState } from 'react';
import PlayerDataTable from '../Player/PlayerDataTable';
import AddPlayerForm from '../Player/AddPlayerForm';


import { FaPlus, FaTimes } from "react-icons/fa";
import AddPlayer from '../../../form/addPlayer/AddPlayer';

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
            {showForm ? <AddPlayerForm /> : <PlayerDataTable />}
        </div>
    );
}

export default Player;
