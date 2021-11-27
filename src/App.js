import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login_page from './components/pages/Login_page';
import Questions_Page from './components/pages/Questions_Page';
import Job_listings_page from './components/pages/Job_listings_page';
import QuestionsSpecific from './components/QuestionsSpecific';
import ShowEmployer_Page from './components/ShowEmployer';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/login' exact element={<Login_page/>}/>
            <Route path='/questions' exact element={<Questions_Page/>}/>
            <Route path='/listings' exact element={<Job_listings_page/>}/>
            <Route path='/employerQuestions' exact element={<QuestionsSpecific/>}/>
            <Route path='/showEmployer' exact element={<ShowEmployer_Page/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
