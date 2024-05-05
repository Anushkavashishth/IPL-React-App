import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { items } from './pages/home/navbar/Navigation';
import Navbar from "./pages/home/navbar/Navbar"
import { Layout} from 'antd';
import FooterFile from "./pages/home/footer/FooterFile";
import UpcommingMatchesPage from './pages/matches/upcomming matches/UpcommingMatchesPage';
import CompletedMatchesPage from './pages/matches/completed matches/CompletedMatchesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          {items.map(item => (
            <Route key={item.key} path={item.path} element={item.component} />
          ))}
          <Route path="/upcomingMatches" element={<UpcommingMatchesPage />} />
          <Route path="/completedMatches" element={<CompletedMatchesPage />} />
        </Routes>
        <FooterFile />
      </Layout>
    </Router>
  );
}

export default App;
