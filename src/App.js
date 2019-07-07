import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage/HomePage';
import Footer from './components/footer/Footer';
import TutorSignUp from './components/tutor-registration/TutorSignUp';
import ParentSignUp from './components/parent-registration/ParentSignUp';
import Login from './components/login/Login';
import TutorDashborad from "./components/dashboard/TutorDashboard";

function App() {
	return (
		<>
			<Route path='/' exact component={Homepage} />
			<Route path='/become-a-tutor' component={TutorSignUp} />
			<Route path='/get-a-tutor' component={ParentSignUp} />
			<Route path='/login' component={Login} />
			<Route path='/user-dashboard' component={TutorDashborad} />
			<Footer />
		</>
	);
}

export default App;
