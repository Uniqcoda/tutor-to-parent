import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage/HomePage';
import Footer from './components/footer/Footer';
import TutorRegistration from './components/tutor-registration/TutorRegistration';
import ParentRegistration from './components/parent-registration/ParentRegistration';
import Login from './components/login/Login';

function App() {
	return (
		<>
			<Homepage />
			<Footer />
		</>
	);
}

export default App;
