import './App.css';
import Homemess from './components/Homemess';
import Navbar from './components/Navbar';
import Homestud from './components/Homestud';
import Messlog from './components/Messlog';
import Messsign from './components/Messsign';
import Studlog from './components/Studlog';
import Studsign from './components/Studsign';
import Regstud from './components/Regstud';
import Bookitem from './components/Bookitem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path = '/' element = {
            <Homemess />
          } />
          <Route exact path = '/homestud' element={
            <Homestud/>
          } />
          <Route exact path = '/messsign' element={
            <Messsign/>
          } />
          <Route exact path = '/messlog' element={
            <Messlog/>
          } />
          <Route exact path = '/studlog' element={
            <Studlog/>
          } />
          <Route exact path = '/studsign' element={
            <Studsign/>
          } />
          <Route exact path = '/regstud' element={
            <Regstud/>
          } />
          <Route exact path = '/bookitem' element={
            <Bookitem/>
          } />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
