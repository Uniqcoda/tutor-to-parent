import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage/HomePage';
import Footer from './components/footer/Footer';
import TutorRegistration from './components/tutor-registration/TutorRegistration';
import ParentRegistration from './components/parent-registration/ParentRegistration';
import Login from './components/login/Login';
import TutorDashborad from "./components/dashboard/TutorDashboard";

function App() {
	return (
		<>
			<Route path='/' exact component={Homepage} />
			<Route path='/become-a-tutor' component={TutorRegistration} />
			<Route path='/get-a-tutor' component={ParentRegistration} />
			<Route path='/login' component={Login} />
			<Route path='/user-dashboard' component={TutorDashborad} />
			<Footer />
		</>
	);
}

export default App;
