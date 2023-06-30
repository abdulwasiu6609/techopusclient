import './App.css';
import React from "react";
import { Route, Routes,  } from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/indexpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import ContactPage from './pages/Contact us';
import AboutPage from './pages/Aboutpage';
import PrivacyPolicyPage from './pages/Privacy Policy';
import TermsAndConditionPage from './pages/Terms and Condition';



function App() {
  return (


    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<IndexPage/>} />
        <Route path={'/login'} element={ <LoginPage/>} />
        <Route path={'/Register'} element={ <RegisterPage/>} />
        <Route path={'/contact'} element={ <ContactPage/>} />
        <Route path={'/about'} element={<AboutPage/> } />
        <Route path={'/privacy'} element={<PrivacyPolicyPage/> } />
        <Route path={'/terms'} element={ <TermsAndConditionPage/>} />
        
      </Route>
    </Routes>




  );
};

export default App;
