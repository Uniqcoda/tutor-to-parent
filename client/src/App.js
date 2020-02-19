import React from 'react';
import { Route } from 'react-router-dom';

import AuthRoute from './utils/AuthRoute'
import Homepage from './components/homepage/HomePage';
import Footer from './components/footer/Footer';
import TutorSignUp from './components/sign-up-page/TutorSignUpPage';
import GeneralSignUp from './components/sign-up-page/GeneralSignUpPage';
import Login from './components/login-page/LoginPage';
import GeneralDashboard from './components/dashboard-page/Dashboard';
import ViewRequests from './components/requests-page/ViewRequests';
import ContactPage from './components/contact-page/ContactPage';

function App() {
	return (
		<>
			<Route path='/' exact component={Homepage} />
			<AuthRoute path='/become-a-tutor' component={TutorSignUp} />
			<AuthRoute path='/get-a-tutor' component={GeneralSignUp} />
			<AuthRoute path='/login' component={Login} />
			<Route path='/dashboard' component={GeneralDashboard} />
			<Route path='/tutor-requests' component={ViewRequests} />
			<Route path='/contact-us' component={ContactPage} />
			<Footer />
		</>
	);
}

export default App;
