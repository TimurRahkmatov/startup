// LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		// Add your login logic here
		console.log('Logging in with:', { username, password });
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md w-96'>
				<h2 className='text-3xl font-semibold mb-6 text-center'>
					Sign In
				</h2>
				<form onSubmit={handleLogin}>
					<div className='mb-4'>
						<label
							htmlFor='username'
							className='block text-gray-700 text-sm font-bold mb-2'>
							Username
						</label>
						<input
							type='text'
							id='username'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className='w-full p-3 border rounded-md'
							placeholder='Enter your username'
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='password'
							className='block text-gray-700 text-sm font-bold mb-2'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='w-full p-3 border rounded-md'
							placeholder='Enter your password'
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300'>
						Sign In
					</button>
				</form>
				<p className='text-center text-gray-600 mt-4'>
					Don't have an account?{' '}
					<Link to={'/register'} className='text-blue-500'>
						Sign Up
					</Link>
				</p>
				<br />
				<div className='flex justify-center'>
					<Link
						to={'/'}
						className='text-blue-500 focus:outline-none hover:text-blue-700'>
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
