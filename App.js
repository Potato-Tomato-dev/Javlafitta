import Layout from "./layout/Layout";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";

function App(){
return(
  <Layout>
  <Routes>
    <Route path="/" exact element={<Section1 />} />
    <Route path="/Section2" exact element={<Section2 />} />
    <Route path="/Section3" exact element={<Section3 />} />
    <Route path="/Section4" exact element={<Section4 />} />
    <Route path="/Section5" exact element={<Section5 />} />
  </Routes>
  </Layout>
  )
}
export default App;