const Sidebar = () => (
    <div className="bg-gray-300 w-48 h-full flex flex-col items-center py-4">
        <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center mb-8">
            {/* Profile Icon SVG */}
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" strokeWidth="2"/>
                <path strokeWidth="2" d="M4 20c0-4 8-4 8-4s8 0 8 4"/>
            </svg>
        </div>
        <button className="w-full py-2 text-xl font-bold">Home</button>
        <button className="w-full py-2 text-xl font-bold bg-gray-400">Dashboard</button>
    </div>
);
export default Sidebar;
