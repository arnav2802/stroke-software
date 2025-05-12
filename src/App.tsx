import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CommandCentre from './CommandCenter';
import EmergencyRoom from './EmergencyRoom/Emergency-room';
import GlobalModule from './components/GlobalModule';

const App = () => (
    <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
            {/* <Sidebar /> */}
            <GlobalModule/>
            <div className="flex flex-1 bg-white">
                {/* <CommandCentre /> */}
                <EmergencyRoom/>
            </div>
        </div>
    </div>
);
export default App;