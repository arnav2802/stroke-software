import { useState } from "react";

const DropList: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-[28px] gap-3">
                    <figure className="flex items-center gap-1">
                        <img src="src/assets/hamburger.svg" alt="down" width={14} height={14} />
                        Select Action
                    </figure>
                    <img src="src/assets/arrow-down.svg" alt="down" width={20} height={20} />
                </div>
            </div>

            {isOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg flex flex-col gap-2 w-full z-10 top-12">
                    {['Action 1','Action 2'].map((option) => (
                        <li key={option} className="px-3 py-2.5 text-sm font-medium -tracking-[0.8px] relative text-dark-100 cursor-pointer hover:bg-pink-100 hover:text-white transition-colors duration-200 ease-in-out rounded-md">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default DropList;