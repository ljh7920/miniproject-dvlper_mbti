import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App({ props }) {
  return (
    
    <Routes>
      <Route
        path="/"
        element={<LandingPage props={props} />} 
      ></Route>
    </Routes>
  );
}

export default App;
