import React, { useState } from 'react';
import DataTableComponent from './DataTable/DataTable';
import AddClubForm from '../Club/Club.jsx';
import AddClub from '../../components/form/addclub/AddClub';

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
                className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {showForm ? 'Close Form' : 'Add Club'}
            </button>
            {/* Conditionally render the AddClubForm based on showForm state */}
            {showForm && <AddClubForm />}

            {!showForm &&   <DataTableComponent />}
          
        </div>
    );
}

export default Club;
