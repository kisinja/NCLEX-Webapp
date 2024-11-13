import nurses from '../assets/nurses.jpeg';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='px-6'>
            <div className="text-center text-2xl pt-10 text-gray-500">
                <p>CONTACT <span className="text-gray-700 font-semibold">US</span> </p>
            </div>

            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm items-center">
                <img src={nurses} alt="" className=" md:w-[300px] md:max-w-[360px]" />

                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-lg text-gray-600">Our Office</p>
                    <p className="text-gray-500 flex items-center gap-2">
                        <span>
                            
                        </span>
                        54709 Willms Station <br /> Suite 350, Washington, USA
                    </p>
                    <p className="text-gray-500 flex items-center gap-2">
                        <span className="flex flex-col gap-2">
                            
                        </span>
                        Tel: (415) 555-0132 <br /> Email: kisinjaelvis@gmail.com
                    </p>
                    <p className="font-semibold text-lg text-gray-600">CARRERS AT MEDIZONE</p>
                    <p className="text-gray-500">Learn more about our team and job openings.</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
                        <Link to="/job-openings" onClick={() => scrollTo(0, 0)}>
                            Explore Jobs
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact