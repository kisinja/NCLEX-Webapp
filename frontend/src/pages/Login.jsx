import Button from "../components/Button"

const Login = () => {
    return (
        <section className="container mx-auto p-8 bg-gray-50">
            <form className="bg-white py-4 px-8 rounded shadow">

                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                <div className="mb-4">
                    <label className="block">Email</label>
                    <input type="email" placeholder="Enter your email" className="border p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block">Password</label>
                    <input type="password" placeholder="Enter your password" className="border p-2 w-full" />
                </div>

                <p className="text-sm text-gray-500">
                    <a href="#" className="text-accent hover:underline">Forgot your password?</a>
                </p>

                <p className="text-sm text-gray-500">
                    Don{"'"}t have an account? <a href="/register" className="text-accent hover:underline">Sign up here</a>
                </p>

                <div className="flex justify-center items-center mt-3">
                    <Button label="Login" />
                </div>
            </form>
        </section>
    )
}

export default Login