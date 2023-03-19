import React , {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


// import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
// import Economy from "../pages/domains/Economy";
// import Informatique from "../pages/domains/Informatique";
// import Medicine from "../pages/domains/Medicine";
// import Chemistry from "../pages/domains/Chemistry";



const About = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (

       
        <><div className=' '>
            <section className="py-20 ">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-between items-center">

                        <div className="flex items-center mb-10 lg:mb-0">
                            <h1 className="text-black text-center text-4xl font-bold">Welcome to LDC Crowdfunding Website</h1>
                        </div>


                    </div>

                    <p className="text-black text-[20px] mx-[10%] mt-[8%] mb-[6.5%] text-center">
                        Lab Dust Cleaners Crowdfunding is a decentralized website the goal of which is
                        to gather funds for research, away from any pressure that may be exerted through traditional corporate funding.
                        We believe that everyone should have the power to shape the future by supporting the projects that matter most
                        to them. Our platform is built on blockchain technology, ensuring that all transactions are secure, transparent,
                        and immutable. Join us today and make a difference!
                    </p>
                </div>
            </section>
            <hr className='border-[1px] border-[#6f6f6f] w-[100%] ' />


          </div>
        <div className='flex flex-wrap h-[100vh] w-[100%] bg-[#bbbbbb]'>

                <div className='flex flex-wrap p-[1%] w-[100] '>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Economy">Economy</Link>
                            </li>
                            <li>
                                <Link to="/Informatique">informations </Link>
                            </li>
                            <li>
                                <Link to="/Medicine">Medicine</Link>
                            </li>
                            <li>
                                <Link to="/Chemistry">Chemistry</Link>
                            </li>
                        </ul>
                    </nav>
                </div>


        </div></>
            
    
       
    )
}

export default About 






// <div className='flex flex-row place-content-around text-center text-[20px]'>

// <div className='w-[15%] h-[40vh] rounded-[3px] bg-[#e9e9e9] cursor-pointer border-[1px] border-[#d0d0d0] py-[17vh]'>
//     First Category
// </div>
// <div className='w-[15%] h-[40vh] rounded-[3px] bg-[#e9e9e9] cursor-pointer border-[1px] border-[#d0d0d0] py-[17vh]'>
//     Second Category
// </div>
// <div className='w-[15%] h-[40vh] rounded-[3px] bg-[#e9e9e9] cursor-pointer border-[1px] border-[#d0d0d0] py-[17vh]'>
//     Third Category
// </div>
// <div className='w-[15%] h-[40vh] rounded-[3px] bg-[#e9e9e9] cursor-pointer border-[1px] border-[#d0d0d0] py-[17vh]'>
//     Fourth Category
// </div>

// </div>