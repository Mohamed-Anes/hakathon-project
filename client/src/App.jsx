import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, CampaignDetails, CreateCampaign, Profile, About, Governement, Economy, Medicine , Informatique , Chemistry } from './pages';

const App = () => {
  return (
    <div className='flex flex-col w-[100%]'>
     <div className="relative sm:-8 px-4 bg-[#eaeaea] min-h-screen flex flex-row ">
       <div className="flex-1 max-sm:w-full mt-[1%] ">
         <Navbar />
 
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/create-campaign" element={<CreateCampaign />} />
           <Route path="/campaign-details/:id" element={<CampaignDetails />} />
           <Route path="/about" element={<About />} />
           <Route path="/Gov" element={<Governement />} />
           <Route path="/Economy" element={Economy} />
           <Route path="Informatique" element={Informatique} />
           <Route path="/Medicine" element={Medicine} />
           <Route path="/Chemistry" element={Chemistry} />
         </Routes>
       </div>
     </div> 
 
 
 
   </div>
   )
}

export default App