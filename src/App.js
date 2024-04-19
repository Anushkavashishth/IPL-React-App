import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { items } from './pages/home/navbar/Navigation';
import Navbar from "./pages/home/navbar/Navbar"
import { Layout} from 'antd';
import FooterFile from "./pages/home/footer/FooterFile";

function App() {
  return (
    <>
      <Layout>
        <Navbar />

        <BrowserRouter>
          <Routes>
            {items.map(item => (
              <Route path={item.path} element={item.component} />
            ))}
          </Routes>
        </BrowserRouter>

        <FooterFile />
      </Layout>
    </>
  );
}


export default App;
