import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login_page from './components/pages/Login_page';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/login' exact element={<Login_page/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
