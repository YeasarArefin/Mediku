import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Notfound from './components/Notfound';
import Login from './components/Registration Form/Login';
import Contact from './components/Contact';
import AuthProvider from './context/AuthProvider';
import Register from './components/Registration Form/Register';
import DoctorsProvider from './context/DoctorsProvider';
import Appointment from './components/Appointment';
import PrivateRoute from './components/PrivateRoute';
import Aboutus from './components/Aboutus';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

	useEffect(() => {

		AOS.init();

	}, []);

	return (

		<AuthProvider>

			<DoctorsProvider>

				<Router>

					<Navbar />

					<Switch>

						<Route exact path="/">
							<HomePage />
						</Route>

						<Route exact path="/home">
							<HomePage />
						</Route>

						<Route exact path="/login">
							<Login />
						</Route>

						<Route exact path="/register">
							<Register />
						</Route>

						<Route exact path="/contact">
							<Contact />
						</Route>

						<Route exact path="/about">
							<Aboutus />
						</Route>

						<PrivateRoute exact path="/appointment/:id">
							<Appointment />
						</PrivateRoute>

						<Route exact path="*">
							<Notfound />
						</Route>

					</Switch>

				</Router>

			</DoctorsProvider>

		</AuthProvider>

	);

}

export default App;
