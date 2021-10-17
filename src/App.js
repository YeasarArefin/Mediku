import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';

function App() {

	return (

		<Router>

			<Navbar />

			<Switch>

				<Route to="/">
					<HomePage />
				</Route>

			</Switch>

		</Router>

	);

}

export default App;
