import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const AddClub = () => {
  const [defaultCancellationTime, setDefaultCancellationTime] = useState(6);
  const [bookingOpenHours, setBookingOpenHours] = useState(1);
  const [bookingCloseHours, setBookingCloseHours] = useState(1);
  const [tournamentOpenHours, setTournamentOpenHours] = useState(1);
  const [tournamentCloseHours, setTournamentCloseHours] = useState(1);
  const [trainingOpenHours, setTrainingOpenHours] = useState(1);
  const [trainingCloseHours, setTrainingCloseHours] = useState(1);
  const [matchesOpenHours, setMatchesOpenHours] = useState(1);
  const [matchesCloseHours, setMatchesCloseHours] = useState(1);

  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <div className="flex items-center mb-8">
        <FaChevronLeft className="h-6 w-6 mr-2" />
        <h1 className="text-3xl font-bold">Edit Club Info</h1>
      </div>

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
              defaultValue="Padel Mates"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ORGANISATION NAME</h2>
            <input
              className="w-full p-2 border rounded-md"
              defaultValue="Padel Mates International AB"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ORGANISATION NUMBER</h2>
            <input
              className="w-full p-2 border rounded-md"
              defaultValue="1233456"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">TIMEZONE</h2>
              <select className="w-full p-2 border rounded-md" defaultValue="Europe/Stockholm">
                <option value="Europe/Stockholm">Europe/Stockholm</option>
                <option value="Europe/London">Europe/London</option>
                <option value="Europe/Paris">Europe/Paris</option>
              </select>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">CURRENCY</h2>
              <select className="w-full p-2 border rounded-md" defaultValue="SEK">
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
              defaultValue="07256789"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">EMAIL</h2>
            <input
              className="w-full p-2 border rounded-md"
              defaultValue="support@padelmates.se"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">LEVEL SYSTEM</h2>
            <div className="space-y-4">
              {["PADEL", "BADMINTON", "PICKLEBALL", "SQUASH", "TENNIS", "GOLF"].map((sport) => (
                <div key={sport} className="flex items-center justify-between">
                  <label>{sport}</label>
                  <select className="w-[180px] p-2 border rounded-md">
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
              <div className="flex gap-2 border-b pb-2">
                <button className="h-8 w-8 p-0 border rounded-md">B</button>
                <button className="h-8 w-8 p-0 border rounded-md">I</button>
                <button className="h-8 w-8 p-0 border rounded-md">U</button>
                <button className="h-8 w-8 p-0 border rounded-md">S</button>
                <button className="h-8 w-8 p-0 border rounded-md">•</button>
                <button className="h-8 w-8 p-0 border rounded-md">1.</button>
              </div>
              <textarea
                className="w-full border-0 focus-visible:ring-0 p-2"
                placeholder="Add waiver text here"
                defaultValue="I agree to the terms and conditions"
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

            <div className="space-y-4">
              {["BOOKING", "TOURNAMENT", "TRAINING", "MATCHES"].map((event) => (
                <div key={event}>
                  <h3 className="font-medium mb-2">{event}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Join", "Leave"].map((action) => (
                      <div key={action} className="flex items-center space-x-2">
                        <input type="checkbox" id={`${event.toLowerCase()}-${action.toLowerCase()}`} />
                        <label htmlFor={`${event.toLowerCase()}-${action.toLowerCase()}`}>{action}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">EMAIL SECTION</h2>
            <textarea
              className="min-h-[120px] w-full p-2 border rounded-md"
              defaultValue="Hej, detta är din bokningsbekräftelse när du bokar hos oss."
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ADDITIONAL INFORMATION</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Free parking",
                "Others",
                "Shop",
                "Gym",
                "Bistro / Bar",
                "Spa",
                "Changing room",
                "Other facility",
                "Meeting room",
                "Accessible restrooms",
                "Racket rentals",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <input type="checkbox" id={item.toLowerCase().replace(/ /g, "-")} />
                  <label htmlFor={item.toLowerCase().replace(/ /g, "-")}>{item}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">SPORTS AVAILABLE</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Padel", "Tennis", "Badminton", "Squash", "Pickleball", "Golf"].map((sport) => (
                <div key={sport} className="flex items-center space-x-2">
                  <input type="checkbox" id={`${sport.toLowerCase()}-sport`} />
                  <label htmlFor={`${sport.toLowerCase()}-sport`}>{sport}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">DEFAULT CHECK IN SETTINGS</h2>
            <p className="text-sm text-gray-500 mb-4">
              When enabled, these options are preselected upon creating an activity. However, you can still change the value per activity.
            </p>

            <div className="space-y-6">
              {["BOOKING", "TOURNAMENT", "TRAINING", "MATCHES"].map((event) => (
                <div key={event}>
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" id={`${event.toLowerCase()}-check-in`} />
                    <label htmlFor={`${event.toLowerCase()}-check-in`} className="font-medium">
                      {event} CHECK IN
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs">
                        Check-in opens (hours before start time)
                      </label>
                      <div className="flex items-center mt-1 bg-gray-100 rounded-md">
                        <button
                          className="h-10 w-10 border rounded-md"
                          onClick={() =>
                            eval(`set${event}OpenHours((prev) => Math.max(0, prev - 1))`)
                          }
                        >
                          -
                        </button>
                        <span className="flex-1 text-center">
                          {eval(`${event.toLowerCase()}OpenHours`)}
                        </span>
                        <button
                          className="h-10 w-10 border rounded-md"
                          onClick={() =>
                            eval(`set${event}OpenHours((prev) => prev + 1)`)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs">
                        Check-in closes (hours after end time)
                      </label>
                      <div className="flex items-center mt-1 bg-gray-100 rounded-md">
                        <button
                          className="h-10 w-10 border rounded-md"
                          onClick={() =>
                            eval(`set${event}CloseHours((prev) => Math.max(0, prev - 1))`)
                          }
                        >
                          -
                        </button>
                        <span className="flex-1 text-center">
                          {eval(`${event.toLowerCase()}CloseHours`)}
                        </span>
                        <button
                          className="h-10 w-10 border rounded-md"
                          onClick={() =>
                            eval(`set${event}CloseHours((prev) => prev + 1)`)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="font-medium">
                    ALLOW MEMBERSHIP ON MULTIPLE CLUBS
                  </label>
                  <input type="checkbox" />
                </div>

                <div className="flex items-center justify-between">
                  <label className="font-medium">
                    ALLOW CREDITS ON MULTIPLE CLUBS
                  </label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="bg-navy-blue text-white px-12 py-6 text-lg">Save</button>
      </div>
    </div>
  );
}

export default AddClub;