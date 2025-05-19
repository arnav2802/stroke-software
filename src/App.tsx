import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CommandCentre from './CommandCenter';
import EmergencyRoom from './EmergencyRoom/Emergency-room';
import GlobalModule from './components/GlobalModule';

const App = () => (
  <Router>
    <Header />
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <GlobalModule />
        <div className="flex flex-1 bg-white">
          <Routes>
            <Route path="/" element={<CommandCentre />} />
            <Route path="/emergency" element={<EmergencyRoom />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
