import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/homepage/HomePage';
import Footer from './components/footer/Footer';
import TutorSignUp from './components/sign-up-page/TutorSignUpPage';
import GeneralSignUp from './components/sign-up-page/GeneralSignUpPage';
import Login from './components/login-page/LoginPage';
import TutorDashborad from './components/dashboard-page/TutorDashboard';
import GeneralDashboard from './components/dashboard-page/GeneralDashboard';
import ViewRequests from './components/requests-page/ViewRequests'
import ContactPage from './components/contact-page/ContactPage'

function App() {
	return (
		<>
			<Route path='/' exact component={Homepage} />
			<Route path='/become-a-tutor' component={TutorSignUp} />
			<Route path='/get-a-tutor' component={GeneralSignUp} />
			<Route path='/login' component={Login} />
			<Route path='/tutor-dashboard' component={TutorDashborad} />
			<Route path='/general-dashboard' component={GeneralDashboard} />
			<Route path='/tutor-requests' component={ViewRequests} />
			<Route path='/contact-us' component={ContactPage} />
			<Footer />
		</>
	);
}

export default App;
