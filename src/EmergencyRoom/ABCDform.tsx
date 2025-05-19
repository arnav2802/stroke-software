import DropList from "./DropList";

const ABCDform: React.FC = () => {
    return (
        <div className="flex flex-col p-4 w-80 bg-white rounded-lg shadow-lg">
               <h2 className="text-lg font-semibold mb-4">ABCD</h2>
               <form className="space-y-4">
                   {['Airway', 'Breathing', 'Circulation', 'Disability'].map((item) => (
                       <div key={item} className="flex justify-between items-center">
                           <label className="text-gray-700">{item}</label>
                           <select className="border border-gray-300 rounded-md p-2">
                               <option>Outcomes</option>
                               <option>Option 1</option>
                               <option>Option 2</option>
                               <option>Option 3</option>
                           </select>
                       </div>
                   ))}
                   {/* <div className="flex justify-between mt-4">
                       <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded-md">
                           Clear
                       </button>
                       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                           Submit
                       </button>
                   </div> */}
               </form>
           </div>
    );
};

export default ABCDform;