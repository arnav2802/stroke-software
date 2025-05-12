
const GlobalModule = () => {
    return (
        <div className="bg-blue-200 w-48 h-full flex flex-col items-center py-4">
            <h2 className="text-xl font-extrabold text-center mb-4">Global Module</h2>
            {['NIHS Score', 'Vital', 'Complications occurred', 'Treatment Given', 'Treatment doctor team', 'Medicines & dosages', 'Medical History'].map((item, idx) => (
                // <div key={idx} className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center mb-8 cursor-pointer hover:bg-blue-300 rounded-lg transition-colors">
                //     {item}
                // </div>
                <button className="p-2 w-full py-2 text-xl font-semibold bg-blue-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300 rounded-lg transition-colors">{item}</button>
            ))}

            {/* Sidebar
            <div className="bg-blue-200 w-full md:w-1/4 p-4 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold text-center mb-4">Global Module</h2>
                {['NIHS Score', 'Vital', 'Complications occurred', 'Treatment Given', 'Treatment doctor team', 'Medicines & dosages', 'Medical History'].map((item, idx) => (
                    <div key={idx} className="p-2 text-lg cursor-pointer hover:bg-blue-300 rounded-lg transition-colors">
                        {item}
                    </div>
                ))}
            </div> */}
        </div>



    )
}

export default GlobalModule