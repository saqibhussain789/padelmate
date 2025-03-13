import React, { useState } from 'react';
import DataTableComponent from './DataTable/DataTable';
import AddClubForm from '../Club/Club.jsx';


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
                className="mb-4 bg-[#006e94] text-white px-4 py-2 rounded-lg hover:bg-[#328ba9]">
                {showForm ? 'Close Form' : 'Add Club'}
            </button>
            {/* Conditionally render the AddClubForm based on showForm state */}
            {showForm && <AddClubForm />}
            {!showForm &&   <DataTableComponent />}
          
        </div>
    );
}

export default Club;
