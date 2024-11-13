import { Link } from "react-router-dom"
import Button from "./Button"

const BookingSection = () => {
    return (
        <section id="booking" className="py-12 bg-secondary text-light-background text-center px-6">
            <h2 className="text-3xl font-semibold mb-6">Book a Session Now</h2>
            <p className="text-lg mb-6">Ready to take the next step towards passing the NCLEX? Book a coaching session now!</p>
            <Link to="/booking">
                <Button label="Book now" />
            </Link>
        </section>

    )
}

export default BookingSection