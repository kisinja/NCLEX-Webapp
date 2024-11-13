
const Register = () => {
    return (
        <section className="container mx-auto p-8 bg-gray-50">
            <form className="bg-white py-4 px-8 rounded shadow">

                <h2 className="text-2xl font-semibold mb-4">Register</h2>

                <div className="mb-4">
                    <label className="block">Name</label>
                    <input type="text" placeholder="Enter your full name" className="border p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block">Email</label>
                    <input type="email" placeholder="Enter your email" className="border p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block">Password</label>
                    <input type="password" placeholder="Enter your password" className="border p-2 w-full" />
                </div>

                <p className="text-sm text-gray-500">
                    Already have an account? <a href="/login" className="text-accent hover:underline">Login here</a>
                </p>

                <div className="flex justify-center mt-3">
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Register</button>
                </div>
            </form>
        </section>
    )
}

export default Register;