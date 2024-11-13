
const Button = ({ label }) => {
    return (
        <button className="bg-accent text-light-background px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white">
            {label}
        </button>
    )
}

export default Button