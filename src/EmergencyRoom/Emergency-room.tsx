import React, { useState } from 'react';

const EmergencyRoom: React.FC = () => {
    const vitals = ['Pulse Rate', 'Blood Pressure', 'Respiratory Rate', 'Random Blood Sugar', 'Temperature', 'SpO2'];

    // Initialize state with default values for each vital
    const [vitalValues, setVitalValues] = useState<Record<string, number>>(
        vitals.reduce((acc, label) => {
            acc[label] = 50; // default initial value
            return acc;
        }, {} as Record<string, number>)
    );

    const handleVitalChange = (label: string, value: number) => {
        setVitalValues(prev => ({ ...prev, [label]: value }));
    };

    return (
        <div className="flex flex-col md:flex-row bg-blue-100 h-screen font-sans">

           <div className='flex flex-1'>
             {/* Main Content */}
            <div className="w-1/2 p-4 space-y-4">
                <h1 className="text-3xl font-extrabold text-blue-700 text-center">Emergency room</h1>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {['Patient Vitals', 'Provisional Diagnosis', 'Sample Taken', 'ABCD'].map((cardTitle, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-center">{cardTitle}</h3>
                            <p className="text-center text-blue-500 cursor-pointer">Click for side view</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-2">Patient Complaints</h2>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder="Write the patient's complaint"
                        rows={4}
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg hover:opacity-80 transition-opacity">
                        Submit
                    </button>
                </div>
            </div>

            {/* Side View */}
            <div className="w-1/2 p-4">
                <h2 className="text-lg font-bold mb-2">Patient’s Vitals</h2>
                {vitals.map((label, idx) => (
                    <div key={idx} className="flex justify-between items-center mb-4">
                        <span className="w-1/4">{label}</span>
                        <input
                            type="range"
                            className="w-full mx-2"
                            min="0"
                            max="200"
                            value={vitalValues[label]}
                            onChange={(e) => handleVitalChange(label, Number(e.target.value))}
                        />
                        <input
                            type="text"
                            className="w-16 text-center border border-gray-300 rounded"
                            value={vitalValues[label]}
                            readOnly
                        />
                    </div>
                ))}
            </div>
           </div>
        </div>
    );
};

export default EmergencyRoom;
