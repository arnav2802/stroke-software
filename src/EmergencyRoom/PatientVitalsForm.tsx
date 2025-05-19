import React, { useState } from 'react';

const PatientVitalsForm: React.FC = () => {
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
        <div className="w-full p-4">
            <h2 className="text-lg font-bold mb-2">Fill Patient’s Vitals</h2>
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
    );
};

export default PatientVitalsForm;