import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

function AddClub() {
  // State for form values
  const [clubName, setClubName] = useState("Padel Mates");
  const [orgName, setOrgName] = useState("Padel Mates International AB");
  const [orgNumber, setOrgNumber] = useState("1233456");
  const [timezone, setTimezone] = useState("Europe/Stockholm");
  const [currency, setCurrency] = useState("SEK");
  const [phoneNumber, setPhoneNumber] = useState("07256789");
  const [email, setEmail] = useState("support@padelmates.se");
  const [waiverNotice, setWaiverNotice] = useState("I agree to the terms and conditions");
  const [levelSystem, setLevelSystem] = useState({
    PADEL: "SEVEN",
    BADMINTON: "SEVEN",
    PICKLEBALL: "SEVEN",
    SQUASH: "SEVEN",
    TENNIS: "SEVEN",
    GOLF: "SEVEN",
  });
  const [defaultCancellationTime, setDefaultCancellationTime] = useState(24);
  const [defaultBookingOpenHours, setDefaultBookingOpenHours] = useState(1);
  const [defaultBookingCloseHours, setDefaultBookingCloseHours] = useState(1);



  const handleLevelChange = (sport, value) => {
    setLevelSystem((prevLevels) => ({
      ...prevLevels,
      [sport]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Create FormData object
    const formData = new FormData();
    formData.append("club_name", clubName);
    formData.append("org_name", orgName);
    formData.append("org_number", orgNumber);
    formData.append("time_zone", timezone);
    formData.append("currency", currency);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);
    formData.append("waiver_notice", waiverNotice);
    formData.append("default_cancellation_time", defaultCancellationTime);
    formData.append("default_booking_open_hours", defaultBookingOpenHours);
    formData.append("default_booking_close_hours", defaultBookingCloseHours);

    formData.append("level_system", JSON.stringify(levelSystem));
  
    try {
      // API request (you can replace this URL with your actual API endpoint)
      const response = await fetch("https://your-api-endpoint.com/club/update", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success
        alert("Club information updated successfully!");
      } else {
        // Handle error
        alert("Failed to update club information.");
      }
    } catch (error) {
      console.error("Error updating club info:", error);
      alert("Error updating club information.");
    }
  };

  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold">Edit Club Info</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">INFORMATION</h2>
              <textarea
                className="min-h-[120px] w-full p-2 border rounded-md"
                placeholder="Club information"
                defaultValue="This is a demo account and test account"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">CLUB NAME</h2>
              <input
                className="w-full p-2 border rounded-md"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">ORGANISATION NAME</h2>
              <input
                className="w-full p-2 border rounded-md"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">ORGANISATION NUMBER</h2>
              <input
                className="w-full p-2 border rounded-md"
                value={orgNumber}
                onChange={(e) => setOrgNumber(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">TIMEZONE</h2>
                <select
                  className="w-full p-2 border rounded-md"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                >
                  <option value="Europe/Stockholm">Europe/Stockholm</option>
                  <option value="Europe/London">Europe/London</option>
                  <option value="Europe/Paris">Europe/Paris</option>
                </select>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">CURRENCY</h2>
                <select
                  className="w-full p-2 border rounded-md"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="SEK">SEK</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">PHONE NUMBER</h2>
              <input
                className="w-full p-2 border rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">EMAIL</h2>
              <input
                className="w-full p-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">LEVEL SYSTEM</h2>
              <div className="space-y-4">
        {["PADEL", "BADMINTON", "PICKLEBALL", "SQUASH", "TENNIS", "GOLF"].map((sport) => (
          <div key={sport} className="flex items-center justify-between">
            <label>{sport}</label>
            <select
              className="w-[180px] p-2 border rounded-md"
              value={levelSystem[sport]}
              onChange={(e) => handleLevelChange(sport, e.target.value)}
            >
              <option value="SEVEN">SEVEN</option>
              <option value="SIX">SIX</option>
              <option value="FIVE.FIVE">FIVE.FIVE</option>
              <option value="TEN">TEN</option>
            </select>
          </div>
        ))}
      </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="waiver" />
                <label htmlFor="waiver" className="text-lg font-semibold">
                  WAVIER NOTICE
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Add a waiver notice that users need to accept upon visiting the club page.
              </p>
              <div className="border rounded-md mt-2 p-2">
                <textarea
                  className="w-full border-0 focus-visible:ring-0 p-2"
                  placeholder="Add waiver text here"
                  value={waiverNotice}
                  onChange={(e) => setWaiverNotice(e.target.value)}
                />
              </div>
            </div>
          </div>



{/* Middle Column */}
          <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">NO OF COURTS</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Indoor Courts", "Outside Courts", "Single Courts", "Double Courts"].map((court) => (
                <div key={court}>
                  <label>{court}</label>
                  <input
                    className="w-full p-2 border rounded-md"
                    defaultValue={court === "Indoor Courts" ? "5" : "2"}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ADDRESS</h2>
            <input
              className="w-full p-2 border rounded-md"
              defaultValue="Ingen Adress / en annan adress"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">POSTAL CODE</h2>
              <input
                className="w-full p-2 border rounded-md"
                defaultValue="0000"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">CITY</h2>
              <input
                className="w-full p-2 border rounded-md"
                defaultValue="Stockholm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">STATE</h2>
              <input className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">COUNTRY</h2>
              <select className="w-full p-2 border rounded-md" defaultValue="Sweden">
                <option value="Sweden">Sweden</option>
                <option value="Norway">Norway</option>
                <option value="Denmark">Denmark</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">FACEBOOK</h2>
              <input className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">TWITTER</h2>
              <input className="w-full p-2 border rounded-md" />
            </div>
          </div>


          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">WEBSITE</h2>
              <input
                className="w-full p-2 border rounded-md"
                defaultValue="www.padelmates.se"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">CONTACT EMAIL</h2>
              <input
                className="w-full p-2 border rounded-md"
                defaultValue="supportkamal@pade"
              />
            </div>
          </div>


          <div>
            <h2 className="text-lg font-semibold mb-2">
              DEFAULT CANCELLATION TIME (HOURS)
            </h2>
            <div className="flex items-center space-x-4">
              <button
                className="h-10 w-10 border rounded-md"
                onClick={() =>
                  setDefaultCancellationTime((prev) => Math.max(0, prev - 1))
                }
              >
                -
              </button>
              <span className="w-8 text-center">{defaultCancellationTime}</span>
              <button
                className="h-10 w-10 border rounded-md"
                onClick={() => setDefaultCancellationTime((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              SETTINGS FOR PERSONAL NOTIFICATIONS
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              You will receive an email notification for any of the selected events below based on your chosen preferences.
            </p>





            
          </div>

          

</div>

        </div>







        <div className="mt-8 flex justify-end">
          <button type="submit" className="bg-[#2a7b9b] text-white px-6 py-2 text-lg rounded-xl">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClub;