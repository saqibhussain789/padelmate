import React, { useState } from 'react';
import DataTableComponent from '../../components/Dashboard/DataTable';
import AddClubForm from '../../components/form/addclub/AddClub';



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
                className="mb-4 bg-[#006e94] text-white px-4 py-2 rounded-lg hover:bg-[#328ba9]">
                {showForm ? 'Close Form' : 'Add Player'}
            </button>
            {/* Conditionally render the AddClubForm based on showForm state */}
            {showForm && <AddClubForm />}
            {!showForm &&   <DataTableComponent />}
          
        </div>
    );
}

export default Player;
