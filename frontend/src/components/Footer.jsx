
const Footer = () => {
    return (
        <footer className="bg-primary text-light-background py-6 text-center">
            <p>&copy; {new Date().getFullYear()} NCLEX Guidance | All rights reserved</p>
            <p>Contact us: <a href="mailto:info@nclexguidance.com" className="text-accent">info@nclexguidance.com</a></p>
        </footer>
    );
};

export default Footer
