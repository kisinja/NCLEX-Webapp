import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import BookingSection from '../components/BookingSection';

const Home = () => {
    return (
        <div >
            <section className="container mx-auto p-8 text-center md:h-[70vh] sm:h-[80vh]" id='home'>
                <h2 className="text-3xl text-light-accent font-bold mb-4">Master the NCLEX Exam with Expert Guidance</h2>
                <p className="mb-8 text-gray-100">Helping nursing professionals prepare for the NCLEX with personalized guidance, effective strategies, and in-depth resources.</p>
                <Link to="/booking">
                    <Button label="Book a Session" />
                </Link>
            </section>

            <Features />
            <Testimonials />
            <BookingSection />
        </div>
    );
};

export default Home;