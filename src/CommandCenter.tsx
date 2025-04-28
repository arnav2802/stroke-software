import React from 'react';

const questions = Array.from({ length: 9 }, (_, i) => `Question ${i + 1}`);

const CommandCenter: React.FC = () => {
    return (
        <div className="flex flex-1 bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8 min-h-screen font-sans overflow-hidden ">

            <div className="flex flex-col w-full md:w-1/2 pr-0 md:pr-8">
                <div className="backdrop-blur-md bg-white/70 border border-blue-100 rounded-3xl shadow-2xl p-8 mb-8 transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col items-center md:mr-8 mb-6 md:mb-0">

                            <div className="bg-gradient-to-br from-blue-400 to-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-3 shadow-lg border-4 border-white">
                            </div>
                            <span className="text-xs text-gray-500">timestamp - [00:00:00]</span>
                            <input
                                className="border border-gray-200 rounded-xl px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder:text-gray-400 bg-white/80 shadow"
                                placeholder="Time"
                            />
                            <span className="text-xs text-gray-400 mt-1">Enter the time when patient seen well</span>
                        </div>
                        <div className="flex flex-col flex-1 space-y-4">
                            {[
                                { placeholder: 'Patient name' },
                                { placeholder: 'Age' },
                                { placeholder: 'Address' },
                                { placeholder: 'Location' },
                                { placeholder: 'Call type'},
                            ].map((item, idx) => (
                                <div key={idx} className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-blue-400"></span>
                                    <input
                                        className="pl-10 border border-gray-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder:text-gray-400 bg-white/80 shadow"
                                        placeholder={item.placeholder}
                                        maxLength={50}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-extrabold mb-2 text-blue-700 tracking-tight">Present Complaints</h2>
                        <textarea
                            className="w-full h-32 border border-gray-200 rounded-xl mt-2 p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder:text-gray-400 bg-white/80 shadow resize-none"
                            maxLength={100}
                            placeholder="Describe the present complaints (max 100 letters)"
                        />
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-10 py-3 rounded-xl mt-8 self-end transition font-bold shadow-lg text-lg tracking-wide focus:ring-4 focus:ring-blue-200">
                        Add
                    </button>
                </div>
            </div>

            <div className="w-0 md:w-1/2 pl-0 md:pl-8 hidden md:block">
                <div className="backdrop-blur-md bg-white/70 border border-blue-100 rounded-3xl shadow-2xl p-8">
                    <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-700 tracking-tight">Questionnaire</h2>
                    <div className="space-y-6">
                        {questions.map((q, idx) => (
                            <div key={q} className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">{q}</span>
                                <div className="flex items-center space-x-8">
                                    <label className="flex items-center space-x-2 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox text-blue-500 w-6 h-6 transition-all duration-200 group-hover:scale-110" />
                                        <span className="text-gray-500 group-hover:text-blue-600 transition">Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-2 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox text-blue-500 w-6 h-6 transition-all duration-200 group-hover:scale-110" />
                                        <span className="text-gray-500 group-hover:text-blue-600 transition">No</span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-10 py-3 rounded-xl mt-8 self-end transition font-bold shadow-lg text-lg tracking-wide focus:ring-4 focus:ring-blue-200">
                        Next
                    </button>
                </div>
            </div>


        </div>
    );
};

export default CommandCenter;