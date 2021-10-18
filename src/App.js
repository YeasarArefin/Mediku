import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Notfound from './components/Notfound';

function App() {

	return (

		<Router>

			<Navbar />

			<Switch>

				<Route exact path="/">
					<HomePage />
				</Route>

				<Route exact path="/home">
					<HomePage />
				</Route>

				<Route exact path="*">
					<Notfound />
				</Route>

			</Switch>

		</Router>

	);

}

export default App;
