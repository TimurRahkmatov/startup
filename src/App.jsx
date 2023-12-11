import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Startup from './Pages/Startup';
import Investors from './Pages/Investors';
import Register from './Pages/Register';
import Private from './Layout/Private';
import Login from './Layout/Login';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path='/' element={<Private />}>
					<Route path='/' element={<Home />} />
					<Route path='/startups' element={<Startup />} />
					<Route path='/investors' element={<Investors />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
