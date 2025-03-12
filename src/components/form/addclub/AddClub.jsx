import React, { useState } from "react";

const AddClub = () => {
  const [formData, setFormData] = useState({
    clubName: "",
    organizationName: "",
    organizationNumber: "",
    address: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    website: "",
    email: "",
    facebook: "",
    twitter: "",
    indoorCourts: 0,
    outsideCourts: 0,
    singleCourts: 0,
    doubleCourts: 0,
    emailTemplate: "",
    amenities: {
      freeParking: false,
      shop: false,
      bistro: false,
      changingRoom: false,
      meetingRoom: false,
      accessibleRestrooms: false,
      racketRentals: false,
    },
    sports: {
      padel: false,
      badminton: false,
      pickleball: false,
      tennis: false,
      squash: false,
      golf: false,
    },
    levelSystem: {
      padel: "",
      badminton: "",
      tennis: "",
    },
    defaultCancellationTime: 24,
    checkInSettings: {
      booking: false,
      tournament: false,
      training: false,
      matches: false,
    },
    personalNotifications: {
      booking: false,
      tournament: false,
      training: false,
      matches: false,
    },
    waiverNotice: "",
    requireWaiver: false,
    allowMembershipMultipleClubs: false,
    allowCreditsAcrossClubs: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Edit Club Info</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="clubName" value={formData.clubName} onChange={handleChange} placeholder="Club Name" className="border p-2 rounded" />
        <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} placeholder="Organization Name" className="border p-2 rounded" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 rounded" />
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Amenities</h3>
        <div className="grid grid-cols-3 gap-2">
          {Object.keys(formData.amenities).map((key) => (
            <label key={key} className="flex items-center">
              <input type="checkbox" name={key} checked={formData.amenities[key]} onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  amenities: { ...prev.amenities, [key]: e.target.checked },
                }));
              }} className="mr-2" />
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </label>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Sports Available</h3>
        <div className="grid grid-cols-3 gap-2">
          {Object.keys(formData.sports).map((sport) => (
            <label key={sport} className="flex items-center">
              <input type="checkbox" name={sport} checked={formData.sports[sport]} onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  sports: { ...prev.sports, [sport]: e.target.checked },
                }));
              }} className="mr-2" />
              {sport.charAt(0).toUpperCase() + sport.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Waiver Notice</h3>
        <textarea name="waiverNotice" value={formData.waiverNotice} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Enter waiver text..." />
      </div>
      
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save
      </button>
    </div>
  );
};

export default AddClub;
