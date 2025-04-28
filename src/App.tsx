import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CommandCentre from './CommandCenter';

const App = () => (
    <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
            <Sidebar />
            <div className="flex flex-1 bg-white">
                <CommandCentre />
            </div>
        </div>
    </div>
);
export default App;