import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const handleBooking = () => {
        alert(`Booking confirmed for ${date.toDateString()}`);
    };

    return (
        <section className="bg-light-background text-primary py-12 px-6 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-center">Book a Session</h2>

                <p className="text-lg mb-8 text-center text-secondary">
                    Select a convenient date and time for your session with our expert.
                </p>

                <div className="flex justify-center mb-8">
                    <div className="w-full sm:w-96">
                        <Calendar
                            onChange={handleDateChange}
                            value={date}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={handleBooking}
                        className="bg-accent text-light-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-white transition duration-300"
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Booking;