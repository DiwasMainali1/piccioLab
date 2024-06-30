import React, { useState } from 'react';
import Laura from '../assets/LauraP.jpg';
import Monakesh from '../assets/Monakesh.jpg';
import Claire from '../assets/Claire.jpg';
import Angie from '../assets/Angie.jpg';
import Yvone from '../assets/Yvone.jpg';
import Drishya from '../assets/Drishya.jpg';
import Lara from '../assets/Lara.jpg';
import Profile from '../assets/Profile.webp';

const People = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [copySuccess, setCopySuccess] = useState('');

    const teamMembers = [
      {
        name: "Dr. Claire Goldsbury",
        position: "Senior Lecturer",
        image: Claire,
        email: "claire.goldsbury@sydney.edu.au",
        details: "Neuroscience Research Theme, School of Medical Sciences"
      },
      {
        name: "Dr. Monokesh Sen",
        position: "Post Doctoral fellow",
        image: Monakesh,
        email: "monokesh.sen@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Current Project:"
      },
      {
        name: "Anjie Ge",
        position: "PhD Student",
        image: Angie,
        email: "anjie.ge@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Characterising TREM2 and associated proteins in myeloid cell derived extracellular vesicles in people with Multiple Sclerosis"
      },      
      {
        name: "Yvonne Aguirre Candia",
        position: "PhD Student",
        image: Yvone,
        email: "yvonne.aguirrecandia@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "TREM2 protein expression on Microglia and Macrophages in Multiple Sclerosis"
      },
      {
        name: "Drishya Mainali",
        position: "PhD Student",
        image: Drishya,
        email: "drishya.mainali@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Investigating Extracelluar Vesicles signalling in the pathophysiology of Multiple Sclerosis"
      },
      {
        name: "Lara Rogerson-Wood",
        position: "Research Assistant",
        image: Lara,
        email: "lara.rogerson-wood@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Current Project:"
      },
      {
        name: "Will Boyden",
        position: "Honours Student",
        image: Profile,
        email: "will.boyden@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Current Project:"
      },
      {
        name: "Yifei Zhou",
        position: "Honours Student",
        image: Profile,
        email: "yifei.zhou@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Current Project:"
      },
      {
        name: "Dayoung Kim",
        position: "Honours Student",
        image: Profile,
        email: "dayoung.kim@sydney.edu.au",
        details: "School of Medical Sciences, Faculty of Medicine and Health (FMH)",
        projectTitle: "Current Project:"
      },
    ];

    const EmailModal = ({ email, onClose }) => {
      const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopySuccess('Copied!');
          setTimeout(() => setCopySuccess(''), 2000); 
        } catch (err) {
          setCopySuccess('Failed to copy');
        }
      };

      return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" onClick={onClose}>
          <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white"
               onClick={e => e.stopPropagation()}>
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Email Address</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">{email}</p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 mb-2"
                >
                  Copy to Clipboard
                </button>
                {copySuccess && <p className="text-sm text-green-600 mb-2">{copySuccess}</p>}
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const InfoModal = ({ info, onClose }) => {
        return (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" onClick={onClose}>
                <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white"
                     onClick={e => e.stopPropagation()}>
                    <div className="mt-3 text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Current Project</h3>
                        <div className="mt-2 px-7 py-3">
                            <p className="text-sm text-gray-500">{info}</p>
                        </div>
                        <div className="items-center px-4 py-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white py-12" id="People">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Our Team</h2>
                
                {/* Laura Piccio Section */}
                <div className="mb-24">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/3">
                                <img src={Laura} alt="Laura Piccio" className="w-full h-full object-cover" />
                            </div>
                            <div className="lg:w-2/3 p-8 lg:p-12">
                                <h3 className="text-3xl font-bold mb-4 text-gray-800">Laura Piccio, MD, PhD</h3>
                                <p className="text-xl text-red-600 mb-4">Project Lead</p>
                                <div className="mb-6">
                                    <p className="text-lg text-gray-700 mb-2">
                                        Associate Professor<br />
                                        NHMRC Principal Research Fellow<br />
                                        School of Medical Sciences<br />
                                        Faculty of Medicine and Health
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setSelectedEmail("laura.piccio@sydney.edu.au")}
                                    className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                                >
                                    Contact Laura
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">Team Members</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <div className="p-6">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                                <p className="text-lg text-red-600 mb-2">{member.position}</p>
                                {member.details && <p className="text-sm text-gray-600 mb-4">{member.details}</p>}
                                <div className="flex justify-center space-x-2">
                                    {member.email && (
                                        <button 
                                            onClick={() => setSelectedEmail(member.email)}
                                            className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                                        >
                                            Contact
                                        </button>
                                    )}
                                    {member.name !== "Dr. Claire Goldsbury" && (
                                        <button 
                                            onClick={() => setSelectedInfo(member.projectTitle)}
                                            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                        >
                                            More Info
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedEmail && <EmailModal email={selectedEmail} onClose={() => setSelectedEmail(null)} />}
            {selectedInfo && <InfoModal info={selectedInfo} onClose={() => setSelectedInfo(null)} />}
        </div>
    );
};

export default People;