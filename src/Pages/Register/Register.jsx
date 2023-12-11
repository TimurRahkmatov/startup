import React, { useState } from 'react';

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		role: 'user', // Default role
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Add your sign-up logic here using the formData state
		console.log(formData);
	};

	return (
		<div className='flex items-center justify-center h-screen'>
			<form
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
				onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='username'>
						Username
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='username'
						type='text'
						placeholder='Username'
						name='username'
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'>
						Email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='email'
						type='email'
						placeholder='Email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'>
						Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						type='password'
						placeholder='Password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='role'>
						Role
					</label>
					<select
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='role'
						name='role'
						value={formData.role}
						onChange={handleChange}>
						<option value='user'>User</option>
						<option value='investor'>Investor</option>
						<option value='startup'>Startup</option>
					</select>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
