import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login_page from './components/pages/Login_page';
import Questions_Page from './components/pages/Questions_Page';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/login' exact element={<Login_page/>}/>
            <Route path='/questions' exact element={<Questions_Page/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
