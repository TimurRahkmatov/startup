// SignUpPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ onSignInClick }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('user'); // Default role is 'user'

	const handleSignUp = (e) => {
		e.preventDefault();
		// Add your sign-up logic here
		console.log('Signing up with:', { username, email, password, role });
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md w-96'>
				<h2 className='text-3xl font-semibold mb-6 text-center'>
					Sign Up
				</h2>
				<form onSubmit={handleSignUp}>
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
							htmlFor='email'
							className='block text-gray-700 text-sm font-bold mb-2'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full p-3 border rounded-md'
							placeholder='Enter your email'
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
					<div className='mb-4'>
						<label
							htmlFor='role'
							className='block text-gray-700 text-sm font-bold mb-2'>
							Role
						</label>
						<select
							id='role'
							name='role'
							value={role}
							onChange={(e) => setRole(e.target.value)}
							className='w-full p-3 border rounded-md'>
							<option value='user'>User</option>
							<option value='investor'>Investor</option>
							<option value='startup'>Startup</option>
						</select>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300'>
						Sign Up
					</button>
				</form>
				<p className='text-center text-gray-600 mt-4'>
					Already have an account?{' '}
					<Link
						to={'/login'}
						className='text-blue-500 focus:outline-none hover:text-blue-700'>
						Sign In
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

export default Register;
