
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faPersonRays } from '@fortawesome/free-solid-svg-icons';
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons';
import { faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import SemiCircleProgressBar from "react-progressbar-semicircle";

function App() {
  const profileData = {
    name: "S. Meena",
    gender: "F",
    age: 23,
    patientId: "87 20200727153457",
    progress: 40,
    phone: "8022334455",
    email: "meenarbinaschin2@gmail.com",
    affectedSide: "Bilateral",
    condition: "Ortho",
    speciality: "Osteoarthritis",
    medicalHistory: "Hypertension, DM Hypothyroidism",
  };

  return (
    <div className="bg-white rounded-xl p-4 mx-4">
      <div className='px-3'>
        <h1 className='text-2xl font-semibold text-[#002647] items-center'><FontAwesomeIcon icon={faArrowLeft} size='md' className='pr-2'/>View patient</h1>
      </div>

      <div className="border-[2px] border-gray-300 my-4 "></div>

      <div className="mb-4 mx-3 flex justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#002647]">{profileData.name}, {profileData.gender}/{profileData.age}</h2>
          <p className="text-[#012E57]">Patient ID: {profileData.patientId}</p>
        </div>
        <div className=''><FontAwesomeIcon icon={faCircleUser} className='text-5xl' /></div>
        
      </div>
      
      <div className="relative mt-4 bg-[#002647] rounded-[28px] p-4 text-white shadow-gray-800 shadow-2xl ">
        <p className="text-center font-semibold text-xl">Goal reached</p>

        <div className='flex justify-center text-7xl font-semibold'>
          <SemiCircleProgressBar percentage={profileData.progress} showPercentValue stroke="#FCB000"  strokeWidth="19"  background="#D9D9D9" diameter="300"/>
        </div>
        

        <div className="flex justify-around mt-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>EMG</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>ROM</span>
          </div>
        </div>
      </div>

      <div className="mt-8 mx-auto overflow-x-auto">
  <table className="min-w-max mx-auto table-auto border-collapse">
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="text-[#7D7D7D] text-left px-4 py-2">Phone</td>
        <td className="font-semibold text-gray-800 text-left px-4 py-2">
          <FontAwesomeIcon icon={faPhone} className='text-sm pr-1'/>{profileData.phone}
        </td>
      </tr>
      <tr>
        <td className="text-[#7D7D7D] text-left px-4 py-2">Email</td>
        <td className="font-semibold text-gray-800 text-left px-4 py-2 break-words">
          <FontAwesomeIcon icon={faEnvelope} className='text-sm pr-1'/>{profileData.email}
        </td>
      </tr>
      <tr>
        <td className="text-[#7D7D7D] text-left px-4 py-2">Affected Side</td>
        <td className="font-semibold text-gray-800 text-left px-4 py-2">
          <FontAwesomeIcon icon={faPersonRays} className='text-sm pr-1'/>{profileData.affectedSide}
        </td>
      </tr>
      <tr>
        <td className="text-[#7D7D7D] text-left px-4 py-2">Condition</td>
        <td className="font-semibold text-gray-800 text-left px-4 py-2">
          <FontAwesomeIcon icon={faHeadSideMask} className='text-sm pr-1'/>{profileData.condition}
        </td>
      </tr>
      <tr>
        <td className="text-[#7D7D7D] text-left px-4 py-2">Speciality</td>
        <td className="font-semibold text-black text-left px-4 py-2">
          <FontAwesomeIcon icon={faSuitcaseMedical} className='text-sm pr-1'/>{profileData.speciality}
        </td>
      </tr>
    </tbody>
  </table>
</div>



      
      <div className="border-[2px] border-gray-300 my-4"></div>

      <div className="mt-4 mx-3 grid grid-cols-2 gap-x-8 gap-y-2">
        <button className="flex items-center text-[#002647] font-semibold">
          <span><FontAwesomeIcon icon={faFileWaveform} /></span>
          <span className="ml-2">Medical history</span>
        </button>
        <p className="text-gray-800 font-semibold ">{profileData.medicalHistory}</p>
      </div>

      <div className="border-[2px] border-gray-300 my-4"></div>
    </div>
  );
}

export default App;


