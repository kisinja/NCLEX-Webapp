
const Testimonials = () => {
    return (
        <section className="py-12 bg-light-accent text-center px-6">
            <h2 className="text-3xl font-semibold text-primary mb-6">Success Stories</h2>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    <blockquote className="italic text-lg text-primary">{'"'}The NCLEX program helped me focus on my weaknesses and pass the exam with confidence!{'"'}</blockquote>
                    <p className="font-semibold text-xl text-secondary">- Sarah, RN</p>
                </div>
                <div className="space-y-6 mt-8">
                    <blockquote className="italic text-lg text-primary">{'"'}I couldn’t have passed without the personalized coaching and the practice questions!{'"'}</blockquote>
                    <p className="font-semibold text-xl text-secondary">- James, RN</p>
                </div>
            </div>
        </section>

    )
}

export default Testimonials
