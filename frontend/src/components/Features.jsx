
const Features = () => {
    return (
        <section className="py-12 bg-light-background px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-primary mb-6">Our NCLEX Preparation Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-bold text-primary mb-4">Personalized Coaching</h3>
                        <p>Get one-on-one coaching to target your weak areas and improve your chances of passing the NCLEX exam.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-bold text-primary mb-4">Practice Questions</h3>
                        <p>Access hundreds of practice questions, designed to reflect the real NCLEX exam format.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-bold text-primary mb-4">Study Plans</h3>
                        <p>Follow a structured study plan that adapts to your learning pace and ensures consistent progress.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Features
