import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login_page from './components/pages/Login_page';
import Questions_Page from './components/pages/Questions_Page';
import Job_listings_page from './components/pages/Job_listings_page';
import QuestionsSpecific from './components/QuestionsSpecific';
import ShowEmployer_Page from './components/ShowEmployer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

function App() {

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA1o5seIhKEY17K8dRy0KKV62jryaor4aE",
      authDomain: "coghacks2021.firebaseapp.com",
      projectId: "coghacks2021",
      storageBucket: "coghacks2021.appspot.com",
      messagingSenderId: "272991366590",
      appId: "1:272991366590:web:bb1a94953685be2bb39def"
      };
  
      // Initialize Firebase
      //const app = 
      initializeApp(firebaseConfig);

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
